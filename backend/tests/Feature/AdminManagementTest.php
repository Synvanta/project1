<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AdminManagementTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_list_admin_accounts_without_exposing_passwords(): void
    {
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);
        $anotherAdmin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);
        User::factory()->create(['is_admin' => false]);

        $this->actingAs($admin)
            ->getJson(route('admin.admins.data'))
            ->assertOk()
            ->assertJsonPath('meta.total', 2)
            ->assertJsonMissingPath('data.0.password')
            ->assertJsonFragment(['email' => $anotherAdmin->email]);
    }

    public function test_admin_can_create_another_admin_account_with_a_hashed_password(): void
    {
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true, 'can_add_admins' => true]);

        $this->actingAs($admin)
            ->postJson(route('admin.admins.store'), [
                'name' => 'New Administrator',
                'email' => 'new.admin@example.com',
                'password' => 'a-strong-test-password',
                'password_confirmation' => 'a-strong-test-password',
            ])
            ->assertCreated()
            ->assertJsonPath('data.name', 'New Administrator')
            ->assertJsonMissingPath('data.password');

        $newAdmin = User::query()->where('email', 'new.admin@example.com')->firstOrFail();

        $this->assertTrue($newAdmin->is_admin);
        $this->assertFalse($newAdmin->can_manage_admins);
        $this->assertFalse($newAdmin->can_add_admins);
        $this->assertTrue(Hash::check('a-strong-test-password', $newAdmin->password));
    }

    public function test_admin_can_create_an_admin_with_permissions_when_requested(): void
    {
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true, 'can_add_admins' => true]);

        $this->actingAs($admin)
            ->postJson(route('admin.admins.store'), [
                'name' => 'Trusted Administrator',
                'email' => 'trusted.admin@example.com',
                'password' => 'a-strong-test-password',
                'password_confirmation' => 'a-strong-test-password',
                'can_manage_admins' => true,
                'can_add_admins' => true,
            ])
            ->assertCreated()
            ->assertJsonPath('data.can_manage_admins', true)
            ->assertJsonPath('data.can_add_admins', true);

        $newAdmin = User::query()->where('email', 'trusted.admin@example.com')->firstOrFail();

        $this->assertTrue($newAdmin->can_manage_admins);
        $this->assertTrue($newAdmin->can_add_admins);
    }

    public function test_admin_without_management_permission_cannot_create_admin_accounts(): void
    {
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => false, 'can_add_admins' => false]);

        $this->actingAs($admin)
            ->postJson(route('admin.admins.store'), [
                'name' => 'Unauthorized',
                'email' => 'unauthorized.manager@example.com',
                'password' => 'a-strong-test-password',
                'password_confirmation' => 'a-strong-test-password',
            ])
            ->assertForbidden();

        $this->assertDatabaseMissing('users', ['email' => 'unauthorized.manager@example.com']);
    }

    public function test_admin_with_management_permission_but_without_add_permission_cannot_create_admin_accounts(): void
    {
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true, 'can_add_admins' => false]);

        $this->actingAs($admin)
            ->postJson(route('admin.admins.store'), [
                'name' => 'Unauthorized',
                'email' => 'unauthorized.adder@example.com',
                'password' => 'a-strong-test-password',
                'password_confirmation' => 'a-strong-test-password',
            ])
            ->assertForbidden();

        $this->assertDatabaseMissing('users', ['email' => 'unauthorized.adder@example.com']);
    }

    public function test_admin_creation_validates_password_email_and_confirmation(): void
    {
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true, 'can_add_admins' => true]);

        $this->actingAs($admin)
            ->postJson(route('admin.admins.store'), [
                'name' => 'New Administrator',
                'email' => 'not-an-email',
                'password' => 'short',
                'password_confirmation' => 'different',
            ])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['email', 'password']);

        $this->assertDatabaseCount('users', 1);
    }

    public function test_non_admin_cannot_view_or_create_admin_accounts(): void
    {
        $user = User::factory()->create(['is_admin' => false]);

        $this->actingAs($user)
            ->get(route('admin.admins.index'))
            ->assertForbidden();

        $this->actingAs($user)
            ->postJson(route('admin.admins.store'), [
                'name' => 'Unauthorized',
                'email' => 'unauthorized@example.com',
                'password' => 'a-strong-test-password',
                'password_confirmation' => 'a-strong-test-password',
            ])
            ->assertForbidden();

        $this->assertDatabaseMissing('users', ['email' => 'unauthorized@example.com']);
    }

    public function test_admin_management_page_mounts_react_application(): void
    {
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);

        $this->actingAs($admin)
            ->get(route('admin.admins.index'))
            ->assertOk()
            ->assertSee('admin-users-root')
            ->assertSee('data-home-url="'.config('app.frontend_url').'"', false)
            ->assertSee('admin-assets/admin-users.js')
            ->assertSee('admin-assets/admin-users.css')
            ->assertSee('data-permission-url')
            ->assertSee('data-impersonate-url');
    }

    public function test_admin_manager_can_grant_and_revoke_admin_page_access(): void
    {
        $manager = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => false]);

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $admin), ['can_manage_admins' => true])
            ->assertOk()
            ->assertJsonPath('data.can_manage_admins', true);

        $this->assertTrue($admin->fresh()->can_manage_admins);

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $admin), ['can_manage_admins' => false])
            ->assertOk()
            ->assertJsonPath('data.can_manage_admins', false);

        $this->assertFalse($admin->fresh()->can_manage_admins);
    }

    public function test_admin_manager_can_grant_and_revoke_add_admin_permission(): void
    {
        $manager = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true, 'can_add_admins' => true]);
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true, 'can_add_admins' => false]);

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $admin), ['can_add_admins' => true])
            ->assertOk()
            ->assertJsonPath('data.can_add_admins', true);

        $this->assertTrue($admin->fresh()->can_add_admins);

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $admin), ['can_add_admins' => false])
            ->assertOk()
            ->assertJsonPath('data.can_add_admins', false);

        $this->assertFalse($admin->fresh()->can_add_admins);
    }

    public function test_admin_manager_cannot_remove_the_last_add_admin_permission(): void
    {
        $manager = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true, 'can_add_admins' => true]);
        $creator = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true, 'can_add_admins' => true]);

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $creator), ['can_add_admins' => false])
            ->assertOk();

        $this->assertFalse($creator->fresh()->can_add_admins);

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $manager), ['can_add_admins' => false])
            ->assertUnprocessable()
            ->assertJsonValidationErrors('can_add_admins');

        $this->assertTrue($manager->fresh()->can_add_admins);
    }

    public function test_permission_update_requires_at_least_one_permission(): void
    {
        $manager = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true, 'can_add_admins' => true]);
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $admin), [])
            ->assertUnprocessable()
            ->assertJsonValidationErrors('permission');
    }

    public function test_admin_without_management_permission_cannot_see_admins_link_or_access_management(): void
    {
        $manager = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => false]);

        $this->actingAs($admin)
            ->get(route('admin.demo-requests.index'))
            ->assertOk()
            ->assertSee('data-can-manage-admins="false"', false);

        $this->actingAs($admin)
            ->get(route('admin.admins.index'))
            ->assertForbidden();

        $this->actingAs($admin)
            ->getJson(route('admin.admins.data'))
            ->assertForbidden();

        $this->actingAs($admin)
            ->patchJson(route('admin.admins.permission', $manager), ['can_manage_admins' => false])
            ->assertForbidden();
    }

    public function test_admin_manager_cannot_remove_own_or_last_management_permission(): void
    {
        $manager = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);
        $anotherAdmin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => false]);

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $manager), ['can_manage_admins' => false])
            ->assertUnprocessable()
            ->assertJsonValidationErrors('can_manage_admins');

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $anotherAdmin), ['can_manage_admins' => false])
            ->assertOk();

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $manager), ['can_manage_admins' => false])
            ->assertUnprocessable()
            ->assertJsonValidationErrors('can_manage_admins');
    }

    public function test_permission_update_requires_a_boolean_value_and_an_admin_target(): void
    {
        $manager = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);
        $nonAdmin = User::factory()->create(['is_admin' => false]);

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $nonAdmin), ['can_manage_admins' => true])
            ->assertNotFound();

        $this->actingAs($manager)
            ->patchJson(route('admin.admins.permission', $manager), ['can_manage_admins' => 'yes'])
            ->assertUnprocessable()
            ->assertJsonValidationErrors('can_manage_admins');
    }
}

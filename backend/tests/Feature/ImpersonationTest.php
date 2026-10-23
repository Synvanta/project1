<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ImpersonationTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_manager_can_impersonate_another_admin(): void
    {
        $manager = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);
        $admin = User::factory()->create(['is_admin' => true]);

        $this->actingAs($manager)
            ->postJson(route('admin.admins.impersonate', $admin))
            ->assertOk()
            ->assertJsonPath('redirect', route('admin.dashboard'))
            ->assertSessionHas('impersonator_id', $manager->id);

        $this->assertAuthenticatedAs($admin);
    }

    public function test_admin_cannot_impersonate_themselves(): void
    {
        $manager = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);

        $this->actingAs($manager)
            ->postJson(route('admin.admins.impersonate', $manager))
            ->assertForbidden();

        $this->assertAuthenticatedAs($manager);
    }

    public function test_admin_cannot_impersonate_a_non_admin_account(): void
    {
        $manager = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);
        $user = User::factory()->create(['is_admin' => false]);

        $this->actingAs($manager)
            ->postJson(route('admin.admins.impersonate', $user))
            ->assertNotFound();

        $this->assertAuthenticatedAs($manager);
    }

    public function test_admin_without_management_permission_cannot_impersonate(): void
    {
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => false]);
        $target = User::factory()->create(['is_admin' => true]);

        $this->actingAs($admin)
            ->postJson(route('admin.admins.impersonate', $target))
            ->assertForbidden();

        $this->assertAuthenticatedAs($admin);
    }

    public function test_stopping_impersonation_restores_the_original_admin(): void
    {
        $original = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);
        $target = User::factory()->create(['is_admin' => true]);

        $this->actingAs($target)
            ->withSession(['impersonator_id' => $original->id])
            ->post(route('admin.impersonate.stop'))
            ->assertRedirect(route('admin.dashboard'));

        $this->assertAuthenticatedAs($original);
    }

    public function test_impersonation_banner_is_shown_while_impersonating(): void
    {
        $original = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);
        $target = User::factory()->create(['is_admin' => true, 'can_add_admins' => true]);

        $this->actingAs($target)
            ->withSession(['impersonator_id' => $original->id])
            ->get(route('admin.dashboard'))
            ->assertOk()
            ->assertSee('Stop impersonating')
            ->assertSee($original->name);
    }

    public function test_impersonation_banner_is_not_shown_for_a_regular_session(): void
    {
        $admin = User::factory()->create(['is_admin' => true, 'can_manage_admins' => true]);

        $this->actingAs($admin)
            ->get(route('admin.dashboard'))
            ->assertOk()
            ->assertDontSee('Stop impersonating');
    }
}

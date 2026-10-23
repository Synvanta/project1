<?php

namespace Tests\Feature;

use App\Mail\DemoRequestReply;
use App\Models\DemoRequest;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class DemoRequestTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_api_stores_a_demo_request_with_multiple_systems(): void
    {
        $payload = [
            'name' => 'Alex Customer',
            'email' => 'alex@example.com',
            'phone' => '+254 712 345 678',
            'location' => 'Nairobi',
            'systems' => ['Inventory', 'Finance'],
        ];

        $this->postJson(route('api.demo-requests.store'), $payload)
            ->assertCreated()
            ->assertJsonPath('data.name', $payload['name'])
            ->assertJsonPath('data.systems', $payload['systems']);

        $this->assertDatabaseCount('demo_requests', 1);
        $this->assertSame($payload['systems'], DemoRequest::query()->firstOrFail()->systems);
    }

    public function test_public_api_rejects_unknown_systems_and_invalid_contact_details(): void
    {
        $this->postJson(route('api.demo-requests.store'), [
            'name' => 'Alex Customer',
            'email' => 'not-an-email',
            'phone' => 'invalid',
            'location' => 'Nairobi',
            'systems' => ['Not a system'],
        ])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['email', 'phone', 'systems.0']);

        $this->assertDatabaseCount('demo_requests', 0);
    }

    public function test_demo_request_dashboard_requires_admin_authentication(): void
    {
        $this->get(route('admin.dashboard'))
            ->assertRedirect(route('admin.login'));

        $this->get(route('admin.demo-requests.data'))
            ->assertRedirect(route('admin.login'));
    }

    public function test_admin_login_page_mounts_the_react_login_app(): void
    {
        $this->get(route('admin.login'))
            ->assertOk()
            ->assertSee('admin-login-root')
            ->assertSee('data-home-url="'.config('app.frontend_url').'"', false)
            ->assertSee('admin-assets/admin-login.js')
            ->assertSee('admin-assets/admin-login.css');
    }

    public function test_admin_can_sign_in_and_view_demo_requests(): void
    {
        $admin = User::factory()->create(['is_admin' => true]);
        DemoRequest::factory()->create();

        $this->post(route('admin.login.store'), [
            'email' => $admin->email,
            'password' => 'password',
        ])->assertRedirect(route('admin.dashboard'));

        $this->get(route('admin.dashboard'))
            ->assertOk()
            ->assertSee('admin-dashboard-root')
            ->assertSee('data-home-url="'.config('app.frontend_url').'"', false)
            ->assertSee('admin-assets/admin-dashboard.js')
            ->assertSee('admin-assets/admin-dashboard.css');
    }

    public function test_admin_can_filter_and_paginate_demo_requests_as_json(): void
    {
        $admin = User::factory()->create(['is_admin' => true]);
        DemoRequest::factory()->create([
            'name' => 'Taylor Customer',
            'systems' => ['HR', 'PMS'],
        ]);
        DemoRequest::factory()->create([
            'name' => 'Alex Customer',
            'systems' => ['Inventory'],
        ]);

        $this->actingAs($admin)
            ->getJson(route('admin.demo-requests.data', ['search' => 'Taylor', 'system' => 'PMS']))
            ->assertOk()
            ->assertJsonPath('meta.total', 1)
            ->assertJsonPath('data.0.name', 'Taylor Customer')
            ->assertJsonPath('data.0.systems', ['HR', 'PMS']);
    }

    public function test_admin_can_contact_a_requester_and_it_is_recorded(): void
    {
        Mail::fake();

        $admin = User::factory()->create(['is_admin' => true]);
        $demoRequest = DemoRequest::factory()->create(['email' => 'alex@example.com']);

        $this->actingAs($admin)
            ->postJson(route('admin.demo-requests.contact', $demoRequest), [
                'subject' => 'Your Synvanta demo request',
                'body' => 'Thanks for reaching out — when are you free for a call?',
            ])
            ->assertOk()
            ->assertJsonPath('data.id', $demoRequest->id);

        Mail::assertSent(DemoRequestReply::class, function (DemoRequestReply $mail) use ($demoRequest): bool {
            return $mail->hasTo($demoRequest->email);
        });

        $this->assertNotNull($demoRequest->fresh()->contacted_at);
    }

    public function test_contacting_a_requester_validates_subject_and_body(): void
    {
        Mail::fake();

        $admin = User::factory()->create(['is_admin' => true]);
        $demoRequest = DemoRequest::factory()->create();

        $this->actingAs($admin)
            ->postJson(route('admin.demo-requests.contact', $demoRequest), [
                'subject' => '',
                'body' => '',
            ])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['subject', 'body']);

        Mail::assertNothingSent();
        $this->assertNull($demoRequest->fresh()->contacted_at);
    }

    public function test_non_admin_users_cannot_access_admin_pages_or_request_data(): void
    {
        $user = User::factory()->create(['is_admin' => false]);

        $this->actingAs($user)
            ->get(route('admin.dashboard'))
            ->assertForbidden();

        $this->actingAs($user)
            ->getJson(route('admin.demo-requests.data'))
            ->assertForbidden();
    }

    public function test_non_admin_users_cannot_sign_in_to_the_admin_dashboard(): void
    {
        $user = User::factory()->create(['is_admin' => false]);

        $response = $this->followingRedirects()->post(route('admin.login.store'), [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $response
            ->assertOk()
            ->assertSee('data-error="Those admin credentials were not recognized."', false);

        $this->assertGuest();
    }
}

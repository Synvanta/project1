<?php

namespace Database\Factories;

use App\Models\DemoRequest;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<DemoRequest>
 */
class DemoRequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'phone' => fake()->e164PhoneNumber(),
            'location' => fake()->city(),
            'systems' => fake()->randomElements(
                ['Inventory', 'HR', 'Delivery', 'E-Commerce', 'Assistant', 'PMS', 'Garbage', 'Finance'],
                fake()->numberBetween(1, 4),
            ),
        ];
    }
}

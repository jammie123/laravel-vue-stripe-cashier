<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => '11111111', // password
            // 'remember_token' => Str::random(10),
            // 'address' => $this->faker->address,
            // 'city' => $this->faker->city,
            // 'state' => $this->faker->state,
            // 'zip_code' => $this->faker->postcode
        ];
    }
}

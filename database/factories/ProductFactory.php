<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $productPrefixes = ['Hovězí bedýnka', 'Hovězí výsekové', 'Jehněčí bedýnka'];
        $productWeight = ['5', '10', '15', '20'];
        $name = Arr::random($productPrefixes);

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->realText(320),
            'weight' => Arr::random($productWeight),
            'sku' => $this->faker->numberBetween(0, 10),
            'price' => $this->faker->randomFloat(10000, 100000),
        ];
    }
}

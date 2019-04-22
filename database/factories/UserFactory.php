<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\User::class, function (Faker $faker) {
    $updated_at = $faker->dateTimeThisYear();
    $create_at = $faker->dateTimeThisYear($updated_at);

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => bcrypt('123456'),
        'remember_token' => str_random(10),
        'created_at' => $create_at,
        'updated_at' => $updated_at,
    ];
});

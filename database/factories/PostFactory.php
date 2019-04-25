<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Post::class, function (Faker $faker) {
    $sentence = $faker->sentence(6);
    $content = $faker->paragraph(20);
    $updated_at = $faker->dateTimeThisMonth();
    $created_at = $faker->dateTimeThisMonth($updated_at);

    return [
        'title' => $sentence,
        'content' => $content,
        'created_at' => $created_at,
        'updated_at' => $updated_at,
    ];
});

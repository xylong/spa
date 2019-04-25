<?php

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = app(Faker\Generator::class);
        $user_ids = User::all()->pluck('id')->toArray();

        $posts = factory(Post::class)
            ->times(100)
            ->make()
            ->each(function ($post, $index) use ($user_ids, $faker) {
                $post->user_id = $faker->randomElement($user_ids);
            });

        Post::insert($posts->toArray());
    }
}

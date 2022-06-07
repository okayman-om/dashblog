<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Blogs;
use Illuminate\Support\Str;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        // Blogs::factory()->count(10);

        DB::table('blogs')->insert([
            'title' => Str::random(14),
            'src' => Str::random(5),
            'description' => Str::random(3)
        ]);
    }
}

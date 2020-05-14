<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){

        for ($i=0; $i < 10; $i++) {
            DB::table('users')->insert([
                'name' => 'User '.$i,
                'email' => "user{$i}@chien.com",
                'password' => \Illuminate\Support\Facades\Hash::make('123123123'),
                'note' => '123123123'
            ]);
        }
    }
}

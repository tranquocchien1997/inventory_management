<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            ReferenceSeeder::class,
            InventorySeeder::class,
//            ActionSeed::class,
            CustomerSeeder::class,
            TransportVendorSeeder::class,
            DriverSeeder::class,
            VehicleSeeder::class,
            PermissionSeeder::class,
            ContractSeeder::class,
            DeliverySeeder::class
        ]);
    }
}

<?php

use Illuminate\Database\Seeder;

class UpdateTitlePayment extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('reference')->where('display_value', 'TT')->update([
            'display_value' => 'TTR'
        ]);

        $data = [
            "Đã thanh toán",
            "Chưa thanh toán"
        ];

        foreach ($data as $item) {
            \App\Reference::updateOrCreate(
                [
                    'value' => \Illuminate\Support\Str::slug($item)
                ],
                [
                    'display_value' => $item,
                    'type' => \App\Helper::REFERENCE_PAYMENT_STATUS
                ]
            );
        }

        $data = [
            'USD',
            'CNY',
            'VND'
        ];

        foreach ($data as $item) {
            \App\Reference::updateOrCreate(
                [
                    'value' => \Illuminate\Support\Str::slug($item)
                ],
                [
                    'display_value' => $item,
                    'type' => \App\Helper::REFERENCE_UNIT_AMOUNT
                ]
            );
        }
    }
}

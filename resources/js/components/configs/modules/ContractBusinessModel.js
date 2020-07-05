export default [
    {
        title: 'Khách hàng',
        model: 'customer_id',
        type: 'dropdown',
        data: [],
        required: true
    },
    {
        title: 'Số hợp đồng',
        model: 'code',
        type: 'string',
        required: true

    },
    {
        title: 'Ngày hợp đồng',
        model: 'date_created',
        type: 'date',
    },
    {
        title: 'Số lượng (tấn)',
        model: 'quantity',
        type: 'number',
        required: true
    },
    // {
    //     title: 'Đơn giá',
    //     initTitle: 'Đơn giá',
    //     model: 'amount',
    //     type: 'currency',
    // },
    // {
    //     title: 'Đơn vị tiền tệ',
    //     model: 'unit_amount',
    //     type: 'dropdown',
    //     data: [],
    // },
    // {},
    // {
    //     title: 'Tổng giá trị hợp đồng',
    //     initTitle: 'Tổng giá trị hợp đồng',
    //     model: 'total_amount',
    //     type: 'currency',
    // },
    // {},
    // {},
    // {},
    //
    // {
    //     title: 'Phương thức thanh toán',
    //     model: 'payment_method',
    //     type: 'dropdown',
    //     data: [],
    // },
    //
    // {
    //     title: 'Thời hạn giao',
    //     model: 'expired_delivery',
    //     type: 'date',
    // },
    // {
    //     title: 'Đường đi',
    //     model: 'direction_id',
    //     type: 'dropdown',
    //     data: [],
    //     required: true
    // },
    // {},
    // {
    //     title: 'Số hàng đã giao (tấn)',
    //     model: 'delivered_quantity',
    //     type: 'number'
    // },
    // {
    //     title: 'Số hàng đã nhận (tấn)',
    //     model: 'received_quantity',
    //     type: 'number',
    // },
    {
        title: 'Ghi chú',
        model: 'note',
        type: 'textArea',
    },
    // {
    //     title: 'Người tạo',
    //     model: 'creator_id',
    //     type: 'dropdown',
    //     alwayDisable: true,
    //     disable: true,
    //     data: [],
    //     defaultValue: USER
    // }

]

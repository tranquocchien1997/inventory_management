export default [
    // {
    //     title: 'Loại hợp đồng',
    //     model: 'contract_type_id',
    //     type: 'dropdown',
    //     data: [],
    //     required: true
    // },
    {
        title: 'Khách hàng',
        model: 'customer_id',
        type: 'dropdown',
        data: [],
        required: true
    },
    {
        title: 'Đường đi',
        model: 'direction_id',
        type: 'dropdown',
        data: [],
        required: true
    },
    {
        title: 'Người tạo',
        model: 'creator_id',
        type: 'dropdown',
        alwayDisable: true,
        disable: true,
        data: [],
        defaultValue: USER
    },
    {
        title: 'Phương thức thanh toán',
        model: 'payment_method',
        type: 'dropdown',
        data: [],
    },

    {
        title: 'Thời hạn giao',
        model: 'expired_delivery',
        type: 'date',
    },
    {
        title: 'Mã hợp đồng',
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
        title: 'Số hàng',
        model: 'quantity',
        type: 'number',
        required: true
    },
    {
        title: 'Đơn giá',
        model: 'amount',
        type: 'currency',
    },
    {
        title: 'Tổng giá trị hợp đồng',
        model: 'total_amount',
        type: 'currency',
    },

    {
        title: 'Số hàng giao',
        model: 'delivered_quantity',
        type: 'number'
    },
    {
        title: 'Số hàng đã nhận',
        model: 'received_quantity',
        type: 'number',
    },
    {
        title: 'Ghi chú',
        model: 'note',
        type: 'textArea',
    },

]

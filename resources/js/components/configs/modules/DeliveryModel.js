export default [
    // {
    //     title: 'Loại vận chuyển',
    //     model: 'delivery_type_id',
    //     type: 'dropdown',
    //     data: [],
    //     required: true
    // },
    {
        title: 'Mã thông báo',
        model: 'notification_id',
        type: 'dropdown',
        data: []
    },
    {
        title: 'Hợp đồng',
        model: 'contract_id',
        type: 'dropdown',
        data: []
    },
    {
        title: 'Số Lot',
        model: 'code',
        type: 'string',
        required: true

    },
    {},
    {
        title: 'Trị giá tiền về',
        initTitle: 'Trị giá tiền về',
        model: 'amount_delivery',
        type: 'currency'
    },
    {
        title: 'Đơn vị tiền tệ',
        model: 'unit_amount',
        type: 'dropdown',
        data: [],
    },
    {},
    {},
    {
        title: 'Thời gian giao dự kiến',
        model: 'date_delivery',
        type: 'date',
    },
    {
        title: 'Số lượng dự kiến (tấn)',
        model: 'quantity_delivery',
        type: 'number',
    },
    // {},
    // {},
    {
        title: 'Số tiền về dự kiến',
        initTitle: 'Số tiền về dự kiến',
        model: 'estimate_amount_receive',
        type: 'currency',
    },
    {},
    {
        title: 'Số ngày nhận tiền dự kiến',
        model: 'estimate_date_amount_receive_count',
        type: 'dropdown',
        data: [],
    },
    {
        title: 'Ngày nhận tiền dự kiến',
        model: 'estimate_date_amount_receive',
        type: 'date',
    },
    {},
    {},
    {
        type: 'btn',
    },
    {},
    {},
    {},
    {
        title: 'Ngày giao hàng',
        model: 'date_delivered',
        type: 'date',
    },
    {
        title: 'Số lượng thực giao (tấn)',
        model: 'quantity_delivered',
        type: 'number',
    },
    // {},
    // {},


    {
        title: 'Ngày tiền về thực tế',
        model: 'date_amount_receive',
        type: 'date',
    },
    {
        title: 'Số tiền về thực tế',
        initTitle: 'Số tiền về thực tế',
        model: 'amount_receive',
        type: 'currency',
    },
    {
        title: 'Ngân hàng tiền về',
        model: 'bank_id',
        type: 'dropdown',
        alwayDisable: true,
        disable: true,
        data: [],
    },
    {
        title: 'Trạng thái tiền về',
        model: 'status_payment',
        type: 'dropdown',
        data: [],
        defaultValue: DEFAULT_STATUS_PAYMENT_ID
    },
    {
        title: 'Trạng thái',
        model: 'status',
        type: 'dropdown',
        data: [],
        defaultValue: DEFAULT_STATUS_ID
    },
    {},
    {
        title: 'Ghi chú',
        model: 'note',
        type: 'textArea',
    },
    {},
    {},
]

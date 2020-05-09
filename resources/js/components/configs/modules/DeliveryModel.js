export default [
    {
        title: 'Loại vận chuyển',
        model: 'delivery_type_id',
        type: 'dropdown',
        data: [],
        required: true
    },
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
        title: 'Mã vận chuyển',
        model: 'code',
        type: 'string',
    },
    {
        title: 'Ngày giao theo HĐ',
        model: 'date_delivery',
        type: 'date',
    },
    {
        title: 'Số lượng giao theo HĐ',
        model: 'quantity_delivery',
        type: 'number',
    },
    {
        title: 'Số tiền nhận HĐ',
        model: 'amount_delivery',
        type: 'currency'
    },
    {},
    {
        title: 'Ngày đã giao',
        model: 'date_delivered',
        type: 'date',
    },
    {
        title: 'Số lượng đã giao',
        model: 'quantity_delivered',
        type: 'number',
    },

    {
        title: 'Ngày nhận tiền dự kiến',
        model: 'estimate_date_amount_receive',
        type: 'date',
    },
    {
        title: 'Số tiền về dự kiến',
        model: 'estimate_amount_receive',
        type: 'currency',
    },
    {
        title: 'Ngân hàng tiền về',
        model: 'bank_id',
        type: 'dropdown',
        data: [],
    },
    {
        title: 'Ngày tiền về',
        model: 'date_amount_receive',
        type: 'date',
    },
    {
        title: 'Số tiền về',
        model: 'amount_receive',
        type: 'currency',
    },
    {
        title: 'Ghi chú',
        model: 'note',
        type: 'textArea',
    },
]

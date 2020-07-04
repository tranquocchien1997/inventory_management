export default [
    {
        title: 'Phiếu kho',
        model: 'action_id',
        type: 'dropdown',
        data: [],
        required: true
    },
    {
        title: 'Thực hiện HĐ',
        model: 'delivery_id',
        type: 'dropdown',
        data: [],
        required: true
    },
    {
        title: 'Đơn vị vận chuyển',
        model: 'transport_id',
        type: 'dropdown',
        data: [],
        required: true
    },
    {
        title: 'Trạng thái',
        model: 'status',
        type: 'dropdown',
        data: [],
        defaultValue: DEFAULT_STATUS_ID
    },
    {
        title: 'Số hàng dự kiến',
        model: 'amount',
        type: 'number',
    },
    {
        title: 'Số hàng đã giao',
        model: 'amount_finish',
        type: 'number',
    },
    {
        title: 'Ghi chú',
        model: 'note',
        type: 'textArea',
    },
    {
        title: 'Nơi xuất phá',
        model: 'departure',
        type: 'string',
    },
    {
        title: 'Ngày xuất phát',
        model: 'date_start',
        type: 'date',
    },
    {
        title: 'Đích đến',
        model: 'destination',
        type: 'string',
    },

    {
        title: 'Ngày đến đích',
        model: 'date_end',
        type: 'date',
    },

]

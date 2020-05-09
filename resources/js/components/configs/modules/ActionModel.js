export default [
    {
        title: 'Loại phiếu kho',
        model: 'action_type_id',
        type: 'dropdown',
        data: [],
        required: true
    },
    {
        title: 'Kho',
        model: 'inventory_id',
        type: 'dropdown',
        data: [],
        required: true
    },
    {
        title: 'Kho nhận (luân chuyển)',
        model: 'inventory_receive_id',
        type: 'dropdown',
        data: [],
    },
    {
        title: 'Hợp đồng',
        model: 'contract_id',
        type: 'dropdown',
        data: []
    },
    {
        title: 'Thông báo',
        model: 'notification_id',
        type: 'dropdown',
        data: []
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
        title: 'Mã phiếu',
        model: 'code',
        type: 'string',
    },
    {
        title: 'Số hàng',
        model: 'quantity',
        type: 'number',
        required: true
    },
    {
        title: 'Số tiền',
        model: 'amount',
        type: 'currency',
    },
    {
        title: 'Trạng thái',
        model: 'status',
        type: 'dropdown',
        data: [],
        defaultValue: DEFAULT_STATUS_ID
    },
    {
        title: 'Ghi chú',
        model: 'note',
        type: 'textArea',
    },
]

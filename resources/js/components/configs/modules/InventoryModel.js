export default [
    {
        title: 'Người phụ trách',
        model: 'user_id',
        type: 'dropdown',
        data: []
    },
    {
        title: 'Loại kho',
        model: 'type',
        type: 'dropdown',
        data: [],
        required: true
    },
    // {},
    {
        title: 'Mã kho',
        model: 'code',
        type: 'string',
        required: true
    },
    {
        title: 'Tên kho',
        model: 'name',
        type: 'string',
        required: true
    },

    // {
    //     title: 'Tồn kho khả dụng',
    //     model: 'quantity',
    //     type: 'number',
    //     required: true
    // },
    // {
    //     title: 'Tồn kho hiện tại',
    //     model: 'current_quantity',
    //     type: 'number',
    //     required: true
    // },
    {
        title: 'Địa chỉ',
        model: 'address',
        type: 'string'
    },
    {
        title: 'Mô tả',
        model: 'description',
        type: 'textArea',
    },


]

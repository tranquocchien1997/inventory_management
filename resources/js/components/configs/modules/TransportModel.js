export default [
    {
        title: 'Loại vận chuyển',
        model: 'transport_type_id',
        type: 'dropdown',
        data: [],
        required: true
    },
    {
        title: 'Mã đơn vị',
        model: 'code',
        type: 'string',
    },
    {
        title: 'Người vận chuyển',
        model: 'driver_id',
        type: 'dropdown',
        data: []
    },
    {
        title: 'Phương tiện vận chuyển',
        model: 'vehicle_id',
        type: 'dropdown',
        data: []
    },
    {
        title: 'Đối tác vận chuyển',
        model: 'transport_vendor_id',
        type: 'dropdown',
        data: []
    },
]

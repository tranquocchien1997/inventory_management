export default [
    {
        title: 'Tên tài khoản',
        model: 'email',
        type: 'string',
        required: true
    },
    {
        title: 'Mật khẩu',
        model: 'password',
        type: 'string',
        alwayDisable: true,
        disable:true,
        required: false
    },
    {
        title: 'Quyền',
        model: 'role_id',
        type: 'dropdown',
        data: []
    }
]

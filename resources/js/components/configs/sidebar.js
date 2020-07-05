import * as Helper from './Helper'
export default {
    config: {},
    menu: [
        // {
        //     title: 'Trang chủ',
        //     icon: 'fas fa-tachometer-alt',
        //     path: '/234324',
        // },
        {
            title: 'Kho',
            icon: 'fas fa-warehouse',
            id: 'inventory',
            path: Helper.parseFullPathToShortPath(PAGE.LIST_INVENTORY)
        },
        {
            title: 'Phiếu kho',
            icon: 'fas fa-book',
            id: 'action',
            path: Helper.parseFullPathToShortPath(PAGE.LIST_ACTION)

        },
        {
            title: 'Hợp đồng',
            icon: 'fas fa-copy',
            id: 'contract',
            path: Helper.parseFullPathToShortPath(PAGE.LIST_CONTRACT)
        },
        {
            title: 'Hợp đồng kinh doanh',
            icon: 'fas fa-copy',
            id: 'contract',
            path: Helper.parseFullPathToShortPath(PAGE.LIST_CONTRACT_BUSINESS)
        },
        {
            title: 'Vận chuyển',
            icon: 'fas fa-truck-moving',
            path: '#',
            child: [
                {
                    title: 'Sắp xếp thực hiện HĐ',
                    id: 'delivery_transport',
                    path: Helper.parseFullPathToShortPath(PAGE.LIST_DELIVERY_TRANSPORT)
                },
                {
                    title: 'Thực hiện hợp đồng',
                    id: 'delivery',
                    path: Helper.parseFullPathToShortPath(PAGE.LIST_DELIVERY)
                },
                {
                    title: 'Đơn vị vận chuyển',
                    id: 'transport',
                    path: Helper.parseFullPathToShortPath(PAGE.LIST_TRANSPORT)
                },
                {
                    title: 'Người vận chuyển',
                    id: 'driver',
                    path: Helper.parseFullPathToShortPath(PAGE.LIST_DRIVER)
                },
                {
                    title: 'Phương tiện',
                    id: 'vehicle',
                    path: Helper.parseFullPathToShortPath(PAGE.LIST_VEHICLE)
                },

                {
                    title: 'Đối tác',
                    id: 'vendor',
                    path: Helper.parseFullPathToShortPath(PAGE.LIST_TRANSPORT_VENDOR)
                },
            ]
        },
        {
            title: 'Khách hàng',
            icon: 'fas fa-user-tie',
            id: 'customer',
            path: Helper.parseFullPathToShortPath(PAGE.LIST_CUSTOMER)
        },
        {
            title: 'Thông báo',
            icon: 'fas fa-comments',
            id: 'notification',
            path: Helper.parseFullPathToShortPath(PAGE.LIST_NOTIFICATION),
        },
        {
            title: 'Báo cáo',
            icon: 'fas fa-table',
            id: 'report',
            path: Helper.parseFullPathToShortPath(PAGE.CREATE_REPORT),
        },
        {
            title: 'Tài khoản',
            icon: 'fas fa-users',
            path: '#',
            child: [
                {
                    title: 'Tài khoản',
                    id: 'user',
                    path: Helper.parseFullPathToShortPath(PAGE.LIST_USERS)

                },
                {
                    title: 'Phân quyền',
                    id: 'role_permission',
                    path: Helper.parseFullPathToShortPath(PAGE.LIST_ROLE_PERMISSION)
                }
            ]
        },
        {
            title: 'Cài đặt',
            icon: 'fas fa-cogs',
            path: '#',
            child: [
                {
                    title: 'Danh sách chọn',
                    icon: 'fas fa-comments',
                    id: 'notification',
                    path: Helper.parseFullPathToShortPath(PAGE.LIST_REFERENCE),
                },
                // {
                //     title: 'Loại hợp đơn hàng',
                //     path: '#'
                // },
                // {
                //     title: 'Sản phẩm',
                //     path: '#'
                // },
                // {
                //     title: 'Loại sản phẩm',
                //     path: '#'
                // },
                // {
                //     title: 'Đơn vị sản phẩm',
                //     path: '#'
                // },
                // {
                //     title: 'Loại kho',
                //     path: '#'
                // },
                // {
                //     title: 'Thao tác kho',
                //     path: '#'
                // },
                // {
                //     title: 'Loại đơn hàng',
                //     path: '#'
                // },
                // {
                //     title: 'Loại vận chuyển',
                //     path: '#'
                // },
                // {
                //     title: 'Loại báo cáo',
                //     path: '#'
                // },

            ]
        },
    ]
}

import VueRouter from 'vue-router'
import Index from "./components/index";
import Vue from 'vue'
import 'b-components'
import 'toastr'
import moment from 'moment'
import datePicker from 'vue-bootstrap-datetimepicker';
Vue.use(datePicker);
Vue.use(VueRouter)
require('./bootstrap');

window.Vue = require('vue');

Vue.component('index', require('./components/index.vue').default);

function parseFullPathToShortPath(link) {
    return link.replace(window.location.origin, '')
}

const routes = [
    {
        path: '/',
        component: Index,
        children: [
            // {
            //     path: '/',
            //     component: () => import('./components/home/index'),
            //     name: 'Home',
            //     meta: { title: 'Trang chủ'}
            // },

            //////// INVENTORY
            {
                path: parseFullPathToShortPath(PAGE.LIST_INVENTORY),
                component: () => import('./components/inventory/index'),
                name: 'Inventory',
                meta: { title: 'Quản lí kho'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_INVENTORY),
                component: () => import('./components/inventory/trash'),
                name: 'InventoryTrash',
                meta: { title: 'Thùng rác quản lí kho' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_INVENTORY),
                component: () => import('./components/inventory/create'),
                name: 'InventoryCreate',
                meta: { title: 'Tạo kho' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_INVENTORY),
                component: () => import('./components/inventory/update'),
                name: 'InventoryUpdate',
                meta: { title: 'Chỉnh sửa kho' }
            },

            //////////////// ACTION
            {
                path: parseFullPathToShortPath(PAGE.LIST_ACTION),
                component: () => import('./components/action/index'),
                name: 'Action',
                meta: { title: 'Quản lí phiếu kho'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_ACTION),
                component: () => import('./components/action/trash'),
                name: 'ActionTrash',
                meta: { title: 'Thùng rác quản lí phiếu kho' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_ACTION),
                component: () => import('./components/action/create'),
                name: 'ActionCreate',
                meta: { title: 'Tạo phiếu kho' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_ACTION),
                component: () => import('./components/action/update'),
                name: 'ActionUpdate',
                meta: { title: 'Chỉnh sửa phiếu kho' }
            },

            /////////////// USERS
            {
                path: parseFullPathToShortPath(PAGE.LIST_USERS),
                component: () => import('./components/users/index'),
                name: 'Users',
                meta: { title: 'Quản lí tài khoản'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_USERS),
                component: () => import('./components/users/trash'),
                name: 'UsersTrash',
                meta: { title: 'Thùng rác quản lí tài khoản' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_USERS),
                component: () => import('./components/users/create'),
                name: 'UsersCreate',
                meta: { title: 'Tạo tài khoản' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_USERS),
                component: () => import('./components/users/update'),
                name: 'UsersUpdate',
                meta: { title: 'Chỉnh sửa tài khoản' }
            },

            ////////////////// CONTRACT
            {
                path: parseFullPathToShortPath(PAGE.LIST_CONTRACT),
                component: () => import('./components/contract/index'),
                name: 'Contract',
                meta: { title: 'Quản lí hợp đồng'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_CONTRACT),
                component: () => import('./components/contract/trash'),
                name: 'ContractTrash',
                meta: { title: 'Thùng rác quản lí hợp đồng' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_CONTRACT),
                component: () => import('./components/contract/createGeneral'),
                name: 'ContractCreate',
                meta: { title: 'Tạo hợp đồng' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_CONTRACT),
                component: () => import('./components/contract/updateGeneral'),
                name: 'ContractUpdate',
                meta: { title: 'Chỉnh sửa hợp đồng' }
            },

            ////////////////// CUSTOMER
            {
                path: parseFullPathToShortPath(PAGE.LIST_CUSTOMER),
                component: () => import('./components/customer/index'),
                name: 'Customer',
                meta: { title: 'Quản lí khách hàng'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_CUSTOMER),
                component: () => import('./components/customer/trash'),
                name: 'CustomerTrash',
                meta: { title: 'Thùng rác quản lí khách hàng' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_CUSTOMER),
                component: () => import('./components/customer/create'),
                name: 'CustomerCreate',
                meta: { title: 'Tạo khách hàng' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_CUSTOMER),
                component: () => import('./components/customer/update'),
                name: 'CustomerUpdate',
                meta: { title: 'Chỉnh sửa khách hàng' }
            },

            ////////////////// DELIVERY
            {
                path: parseFullPathToShortPath(PAGE.LIST_DELIVERY),
                component: () => import('./components/delivery/index'),
                name: 'Delivery',
                meta: { title: 'Quản lí vận chuyển'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_DELIVERY),
                component: () => import('./components/delivery/trash'),
                name: 'DeliveryTrash',
                meta: { title: 'Thùng rác quản lí vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_DELIVERY),
                component: () => import('./components/delivery/createGeneral'),
                name: 'DeliveryCreate',
                meta: { title: 'Tạo vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_DELIVERY),
                component: () => import('./components/delivery/updateGeneral'),
                name: 'DeliveryUpdate',
                meta: { title: 'Chỉnh sửa vận chuyển' }
            },

            ////////////////// DELIVERY_TRANSPORT
            {
                path: parseFullPathToShortPath(PAGE.LIST_DELIVERY_TRANSPORT),
                component: () => import('./components/deliveryTransport/index'),
                name: 'DeliveryTransport',
                meta: { title: 'Quản lí phân công vận chuyển'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_DELIVERY_TRANSPORT),
                component: () => import('./components/deliveryTransport/trash'),
                name: 'DeliveryTransportTrash',
                meta: { title: 'Thùng rác phân công vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_DELIVERY_TRANSPORT),
                component: () => import('./components/deliveryTransport/create'),
                name: 'DeliveryTransportCreate',
                meta: { title: 'Tạo phân công vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_DELIVERY_TRANSPORT),
                component: () => import('./components/deliveryTransport/update'),
                name: 'DeliveryTransportUpdate',
                meta: { title: 'Chỉnh sửa phân công vận chuyển' }
            },

            ////////////////// DRIVER
            {
                path: parseFullPathToShortPath(PAGE.LIST_DRIVER),
                component: () => import('./components/driver/index'),
                name: 'Driver',
                meta: { title: 'Quản lí hợp người vận chuyển'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_DRIVER),
                component: () => import('./components/driver/trash'),
                name: 'DriverTrash',
                meta: { title: 'Thùng rác quản lí hợp người vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_DRIVER),
                component: () => import('./components/driver/create'),
                name: 'DriverCreate',
                meta: { title: 'Tạo hợp người vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_DRIVER),
                component: () => import('./components/driver/update'),
                name: 'DriverUpdate',
                meta: { title: 'Chỉnh sửa hợp người vận chuyển' }
            },

            ////////////////// ROLE PERMISSION
            {
                path: parseFullPathToShortPath(PAGE.LIST_ROLE_PERMISSION),
                component: () => import('./components/rolePermission/index'),
                name: 'RolePermission',
                meta: { title: 'Quản lí phân quyền'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_ROLE_PERMISSION),
                component: () => import('./components/rolePermission/trash'),
                name: 'RolePermissionTrash',
                meta: { title: 'Thùng rác quản lí phân quyền' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_ROLE_PERMISSION),
                component: () => import('./components/rolePermission/create'),
                name: 'RolePermissionCreate',
                meta: { title: 'Tạo phân quyền' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_ROLE_PERMISSION),
                component: () => import('./components/rolePermission/update'),
                name: 'RolePermissionUpdate',
                meta: { title: 'Chỉnh sửa phân quyền' }
            },

            ////////////////// TRANSPORT
            {
                path: parseFullPathToShortPath(PAGE.LIST_TRANSPORT),
                component: () => import('./components/transport/index'),
                name: 'Transport',
                meta: { title: 'Quản lí đơn vị vận chuyển'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_TRANSPORT),
                component: () => import('./components/transport/trash'),
                name: 'TransportTrash',
                meta: { title: 'Thùng rác quản lí đơn vị vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_TRANSPORT),
                component: () => import('./components/transport/create'),
                name: 'TransportCreate',
                meta: { title: 'Tạo đơn vị vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_TRANSPORT),
                component: () => import('./components/transport/update'),
                name: 'TransportUpdate',
                meta: { title: 'Chỉnh sửa đơn vị vận chuyển' }
            },

            ////////////////// TRANSPORT VENDOR
            {
                path: parseFullPathToShortPath(PAGE.LIST_TRANSPORT_VENDOR),
                component: () => import('./components/transportVendor/index'),
                name: 'TransportVendor',
                meta: { title: 'Quản lí đối tác vận chuyển'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_TRANSPORT_VENDOR),
                component: () => import('./components/transportVendor/trash'),
                name: 'TransportVendorTrash',
                meta: { title: 'Thùng rác quản lí đối tác vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_TRANSPORT_VENDOR),
                component: () => import('./components/transportVendor/create'),
                name: 'TransportVendorCreate',
                meta: { title: 'Tạo đối tác vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_TRANSPORT_VENDOR),
                component: () => import('./components/transportVendor/update'),
                name: 'TransportVendorUpdate',
                meta: { title: 'Chỉnh sửa đối tác vận chuyển' }
            },

            ////////////////// VEHICLE
            {
                path: parseFullPathToShortPath(PAGE.LIST_VEHICLE),
                component: () => import('./components/vehicle/index'),
                name: 'Vehicle',
                meta: { title: 'Quản lí phương tiện vận chuyển'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_VEHICLE),
                component: () => import('./components/vehicle/trash'),
                name: 'VehicleTrash',
                meta: { title: 'Thùng rác quản lí phương tiện vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_VEHICLE),
                component: () => import('./components/vehicle/create'),
                name: 'VehicleCreate',
                meta: { title: 'Tạo phương tiện vận chuyển' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_VEHICLE),
                component: () => import('./components/vehicle/update'),
                name: 'VehicleUpdate',
                meta: { title: 'Chỉnh sửa phương tiện vận chuyển' }
            },

            ////////////////// NOTIFICATION
            {
                path: parseFullPathToShortPath(PAGE.LIST_NOTIFICATION),
                component: () => import('./components/notification/index'),
                name: 'Notification',
                meta: { title: 'Quản lí thông báo'}
            },
            {
                path: parseFullPathToShortPath(PAGE.TRASH_NOTIFICATION),
                component: () => import('./components/notification/trash'),
                name: 'NotificationTrash',
                meta: { title: 'Thùng rác quản lí thông báo' }
            },
            {
                path: parseFullPathToShortPath(PAGE.CREATE_NOTIFICATION),
                component: () => import('./components/notification/create'),
                name: 'NotificationCreate',
                meta: { title: 'Tạo thông báo' }
            },
            {
                path: parseFullPathToShortPath(PAGE.UPDATE_NOTIFICATION),
                component: () => import('./components/notification/update'),
                name: 'NotificationUpdate',
                meta: { title: 'Chỉnh sửa thông báo' }
            },

            ///////// REPORT
            {
                path: parseFullPathToShortPath(PAGE.CREATE_REPORT),
                component: () => import('./components/report/index'),
                name: 'Report',
                meta: { title: 'Báo cáo'}
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

new Vue({
    el: '#app',
    router
})

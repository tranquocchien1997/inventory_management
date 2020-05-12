<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    @include('config')
    @include('style')

    <!-- Scripts -->

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
{{--    <link href="{{ asset('css/app.css') }}" rel="stylesheet">--}}

</head>
<body class="hold-transition sidebar-mini layout-fixed ">
    <script type="text/javascript">

        const LOGO = "{{asset('images/logo/lo-go-FCC.png')}}"
        const API = {
            LOGOUT: "{{route('logout')}}",

            // INVENTORY
            LIST_INVENTORY: "{{route('api.inventory.lists')}}",
            CREATE_INVENTORY: "{{route('api.inventory.create')}}",
            UPDATE_INVENTORY: "{{route('api.inventory.update')}}",
            GET_INVENTORY: "{{route('api.inventory.get')}}",
            SOFT_DELETE_INVENTORY: "{{route('api.inventory.softdelete')}}",
            DELETE_INVENTORY: "{{route('api.inventory.delete')}}",
            RESTORE_INVENTORY: "{{route('api.inventory.restore')}}",
            TRASH_INVENTORY: "{{route('api.inventory.trash')}}",
            REFERENCE_INVENTORY: "{{route('api.inventory.reference')}}",

            // ACTION
            LIST_ACTION: "{{route('api.action.lists')}}",
            CREATE_ACTION: "{{route('api.action.create')}}",
            UPDATE_ACTION: "{{route('api.action.update')}}",
            GET_ACTION: "{{route('api.action.get')}}",
            SOFT_DELETE_ACTION: "{{route('api.action.softdelete')}}",
            DELETE_ACTION: "{{route('api.action.delete')}}",
            RESTORE_ACTION: "{{route('api.action.restore')}}",
            TRASH_ACTION: "{{route('api.action.trash')}}",
            REFERENCE_ACTION: "{{route('api.action.reference')}}",

            // USER
            LIST_USERS: "{{route('api.users.lists')}}",
            CREATE_USERS: "{{route('api.users.create')}}",
            UPDATE_USERS: "{{route('api.users.update')}}",
            GET_USERS: "{{route('api.users.get')}}",
            SOFT_DELETE_USERS: "{{route('api.users.softdelete')}}",
            DELETE_USERS: "{{route('api.users.delete')}}",
            RESTORE_USERS: "{{route('api.users.restore')}}",
            TRASH_USERS: "{{route('api.users.trash')}}",
            REFERENCE_USERS: "{{route('api.users.reference')}}",

            // CONTRACT
            LIST_CONTRACT: "{{route('api.contract.lists')}}",
            CREATE_CONTRACT: "{{route('api.contract.create')}}",
            UPDATE_CONTRACT: "{{route('api.contract.update')}}",
            GET_CONTRACT: "{{route('api.contract.get')}}",
            SOFT_DELETE_CONTRACT: "{{route('api.contract.softdelete')}}",
            DELETE_CONTRACT: "{{route('api.contract.delete')}}",
            RESTORE_CONTRACT: "{{route('api.contract.restore')}}",
            TRASH_CONTRACT: "{{route('api.contract.trash')}}",
            REFERENCE_CONTRACT: "{{route('api.contract.reference')}}",

            // CUSTOMER
            LIST_CUSTOMER: "{{route('api.customer.lists')}}",
            CREATE_CUSTOMER: "{{route('api.customer.create')}}",
            UPDATE_CUSTOMER: "{{route('api.customer.update')}}",
            GET_CUSTOMER: "{{route('api.customer.get')}}",
            SOFT_DELETE_CUSTOMER: "{{route('api.customer.softdelete')}}",
            DELETE_CUSTOMER: "{{route('api.customer.delete')}}",
            RESTORE_CUSTOMER: "{{route('api.customer.restore')}}",
            TRASH_CUSTOMER: "{{route('api.customer.trash')}}",
            REFERENCE_CUSTOMER: "{{route('api.customer.reference')}}",

            // DELIVERY
            LIST_DELIVERY: "{{route('api.delivery.lists')}}",
            CREATE_DELIVERY: "{{route('api.delivery.create')}}",
            UPDATE_DELIVERY: "{{route('api.delivery.update')}}",
            GET_DELIVERY: "{{route('api.delivery.get')}}",
            SOFT_DELETE_DELIVERY: "{{route('api.delivery.softdelete')}}",
            DELETE_DELIVERY: "{{route('api.delivery.delete')}}",
            RESTORE_DELIVERY: "{{route('api.delivery.restore')}}",
            TRASH_DELIVERY: "{{route('api.delivery.trash')}}",
            REFERENCE_DELIVERY: "{{route('api.delivery.reference')}}",

            // DRIVER
            LIST_DRIVER: "{{route('api.driver.lists')}}",
            CREATE_DRIVER: "{{route('api.driver.create')}}",
            UPDATE_DRIVER: "{{route('api.driver.update')}}",
            GET_DRIVER: "{{route('api.driver.get')}}",
            SOFT_DELETE_DRIVER: "{{route('api.driver.softdelete')}}",
            DELETE_DRIVER: "{{route('api.driver.delete')}}",
            RESTORE_DRIVER: "{{route('api.driver.restore')}}",
            TRASH_DRIVER: "{{route('api.driver.trash')}}",
            REFERENCE_DRIVER: "{{route('api.driver.reference')}}",

            // ROLE PERMISSION
            LIST_ROLE_PERMISSION: "{{route('api.role_permission.lists')}}",
            CREATE_ROLE_PERMISSION: "{{route('api.role_permission.create')}}",
            UPDATE_ROLE_PERMISSION: "{{route('api.role_permission.update')}}",
            GET_ROLE_PERMISSION: "{{route('api.role_permission.get')}}",
            SOFT_DELETE_ROLE_PERMISSION: "{{route('api.role_permission.softdelete')}}",
            DELETE_ROLE_PERMISSION: "{{route('api.role_permission.delete')}}",
            RESTORE_ROLE_PERMISSION: "{{route('api.role_permission.restore')}}",
            TRASH_ROLE_PERMISSION: "{{route('api.role_permission.trash')}}",
            REFERENCE_ROLE_PERMISSION: "{{route('api.role_permission.reference')}}",

            // TRANSPORT
            LIST_TRANSPORT: "{{route('api.transport.lists')}}",
            CREATE_TRANSPORT: "{{route('api.transport.create')}}",
            UPDATE_TRANSPORT: "{{route('api.transport.update')}}",
            GET_TRANSPORT: "{{route('api.transport.get')}}",
            SOFT_DELETE_TRANSPORT: "{{route('api.transport.softdelete')}}",
            DELETE_TRANSPORT: "{{route('api.transport.delete')}}",
            RESTORE_TRANSPORT: "{{route('api.transport.restore')}}",
            TRASH_TRANSPORT: "{{route('api.transport.trash')}}",
            REFERENCE_TRANSPORT: "{{route('api.transport.reference')}}",

            // TRANSPORT VENDOR
            LIST_TRANSPORT_VENDOR: "{{route('api.transport_vendor.lists')}}",
            CREATE_TRANSPORT_VENDOR: "{{route('api.transport_vendor.create')}}",
            UPDATE_TRANSPORT_VENDOR: "{{route('api.transport_vendor.update')}}",
            GET_TRANSPORT_VENDOR: "{{route('api.transport_vendor.get')}}",
            SOFT_DELETE_TRANSPORT_VENDOR: "{{route('api.transport_vendor.softdelete')}}",
            DELETE_TRANSPORT_VENDOR: "{{route('api.transport_vendor.delete')}}",
            RESTORE_TRANSPORT_VENDOR: "{{route('api.transport_vendor.restore')}}",
            TRASH_TRANSPORT_VENDOR: "{{route('api.transport_vendor.trash')}}",
            REFERENCE_TRANSPORT_VENDOR: "{{route('api.transport_vendor.reference')}}",

            // VEHICLE
            LIST_VEHICLE: "{{route('api.vehicle.lists')}}",
            CREATE_VEHICLE: "{{route('api.vehicle.create')}}",
            UPDATE_VEHICLE: "{{route('api.vehicle.update')}}",
            GET_VEHICLE: "{{route('api.vehicle.get')}}",
            SOFT_DELETE_VEHICLE: "{{route('api.vehicle.softdelete')}}",
            DELETE_VEHICLE: "{{route('api.vehicle.delete')}}",
            RESTORE_VEHICLE: "{{route('api.vehicle.restore')}}",
            TRASH_VEHICLE: "{{route('api.vehicle.trash')}}",
            REFERENCE_VEHICLE: "{{route('api.vehicle.reference')}}",

            // NOTIFICATION
            LIST_NOTIFICATION: "{{route('api.notification.lists')}}",
            CREATE_NOTIFICATION: "{{route('api.notification.create')}}",
            UPDATE_NOTIFICATION: "{{route('api.notification.update')}}",
            GET_NOTIFICATION: "{{route('api.notification.get')}}",
            SOFT_DELETE_NOTIFICATION: "{{route('api.notification.softdelete')}}",
            DELETE_NOTIFICATION: "{{route('api.notification.delete')}}",
            RESTORE_NOTIFICATION: "{{route('api.notification.restore')}}",
            TRASH_NOTIFICATION: "{{route('api.notification.trash')}}",
            REFERENCE_NOTIFICATION: "{{route('api.notification.reference')}}",

            //_DELIVERY_TRANSPORT
            LIST_DELIVERY_TRANSPORT: "{{route('api.delivery_transport.lists')}}",
            CREATE_DELIVERY_TRANSPORT: "{{route('api.delivery_transport.create')}}",
            UPDATE_DELIVERY_TRANSPORT: "{{route('api.delivery_transport.update')}}",
            GET_DELIVERY_TRANSPORT: "{{route('api.delivery_transport.get')}}",
            SOFT_DELETE_DELIVERY_TRANSPORT: "{{route('api.delivery_transport.softdelete')}}",
            DELETE_DELIVERY_TRANSPORT: "{{route('api.delivery_transport.delete')}}",
            RESTORE_DELIVERY_TRANSPORT: "{{route('api.delivery_transport.restore')}}",
            TRASH_DELIVERY_TRANSPORT: "{{route('api.delivery_transport.trash')}}",
            REFERENCE_DELIVERY_TRANSPORT: "{{route('api.delivery_transport.reference')}}",

            // REPORT
            CREATE_REPORT: "{{route('api.report.create')}}",


            GET_ACTION_BY_CONTRACT: "{{route('api.contract.getAction')}}",
            GET_DELIVERY_BY_CONTRACT: "{{route('api.contract.getDelivery')}}",

            GET_TRANSPORT_BY_DELIVERY: "{{route('api.delivery.getTransport')}}"


        }

        const PAGE = {
            // INVENTORY
            CREATE_INVENTORY: "{{route('inventory.create')}}",
            LIST_INVENTORY: "{{route('inventory.lists')}}",
            TRASH_INVENTORY: "{{route('inventory.trash')}}",
            UPDATE_INVENTORY: "{{route('inventory.update')}}",

            // ACTION
            CREATE_ACTION: "{{route('action.create')}}",
            LIST_ACTION: "{{route('action.lists')}}",
            TRASH_ACTION: "{{route('action.trash')}}",
            UPDATE_ACTION: "{{route('action.update')}}",

            // USER
            CREATE_USERS: "{{route('users.create')}}",
            LIST_USERS: "{{route('users.lists')}}",
            TRASH_USERS: "{{route('users.trash')}}",
            UPDATE_USERS: "{{route('users.update')}}",

            // CONTRACT
            CREATE_CONTRACT: "{{route('contract.create')}}",
            LIST_CONTRACT: "{{route('contract.lists')}}",
            TRASH_CONTRACT: "{{route('contract.trash')}}",
            UPDATE_CONTRACT: "{{route('contract.update')}}",

            // CUSTOMER
            CREATE_CUSTOMER: "{{route('customer.create')}}",
            LIST_CUSTOMER: "{{route('customer.lists')}}",
            TRASH_CUSTOMER: "{{route('customer.trash')}}",
            UPDATE_CUSTOMER: "{{route('customer.update')}}",

            // DELIVERY
            CREATE_DELIVERY: "{{route('delivery.create')}}",
            LIST_DELIVERY: "{{route('delivery.lists')}}",
            TRASH_DELIVERY: "{{route('delivery.trash')}}",
            UPDATE_DELIVERY: "{{route('delivery.update')}}",

            // DRIVER
            CREATE_DRIVER: "{{route('driver.create')}}",
            LIST_DRIVER: "{{route('driver.lists')}}",
            TRASH_DRIVER: "{{route('driver.trash')}}",
            UPDATE_DRIVER: "{{route('driver.update')}}",

            // ROLE PERMISSION
            CREATE_ROLE_PERMISSION: "{{route('role_permission.create')}}",
            LIST_ROLE_PERMISSION: "{{route('role_permission.lists')}}",
            TRASH_ROLE_PERMISSION: "{{route('role_permission.trash')}}",
            UPDATE_ROLE_PERMISSION: "{{route('role_permission.update')}}",

            // TRANSPORT
            CREATE_TRANSPORT: "{{route('transport.create')}}",
            LIST_TRANSPORT: "{{route('transport.lists')}}",
            TRASH_TRANSPORT: "{{route('transport.trash')}}",
            UPDATE_TRANSPORT: "{{route('transport.update')}}",

            // TRANSPORT VENDOR
            CREATE_TRANSPORT_VENDOR: "{{route('transport_vendor.create')}}",
            LIST_TRANSPORT_VENDOR: "{{route('transport_vendor.lists')}}",
            TRASH_TRANSPORT_VENDOR: "{{route('transport_vendor.trash')}}",
            UPDATE_TRANSPORT_VENDOR: "{{route('transport_vendor.update')}}",

            // VEHICLE
            CREATE_VEHICLE: "{{route('vehicle.create')}}",
            LIST_VEHICLE: "{{route('vehicle.lists')}}",
            TRASH_VEHICLE: "{{route('vehicle.trash')}}",
            UPDATE_VEHICLE: "{{route('vehicle.update')}}",

            // NOTIFICATION
            CREATE_NOTIFICATION: "{{route('notification.create')}}",
            LIST_NOTIFICATION: "{{route('notification.lists')}}",
            TRASH_NOTIFICATION: "{{route('notification.trash')}}",
            UPDATE_NOTIFICATION: "{{route('notification.update')}}",

            // DELIVERY_TRANSPORT
            CREATE_DELIVERY_TRANSPORT: "{{route('delivery_transport.create')}}",
            LIST_DELIVERY_TRANSPORT: "{{route('delivery_transport.lists')}}",
            TRASH_DELIVERY_TRANSPORT: "{{route('delivery_transport.trash')}}",
            UPDATE_DELIVERY_TRANSPORT: "{{route('delivery_transport.update')}}",

            // REPORT
            CREATE_REPORT: "{{route('report.create')}}",

        }

        let reference
        @isset($reference)
            reference = JSON.parse('{!! $reference !!}')
        @endisset

        const USER = "{{Auth::id()}}"

        const DEFAULT_STATUS_ID = "{{\App\Helper::DEFAULT_STATUS_ID}}"

        const PENDING_STATUS_ID = "{{\App\Helper::PENDING_STATUS_ID}}"

        const MODULE = JSON.parse('{!! json_encode(\App\Helper::MODULE) !!}')

        const METHOD = JSON.parse('{!! json_encode(\App\Helper::METHOD) !!}')

        @isset($permission)
            PERMISSION_USER = JSON.parse('{!! $permission !!}')
        @endisset

    </script>


    <div id="app">
        <router-view />
    </div>

    <script src="{{ asset('js/app.js') }}" defer></script>

    @include('plugin')

</body>
</html>

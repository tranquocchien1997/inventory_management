<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', function () {
    return redirect()->route('inventory.lists');
});

Route::post('logout-account', 'HomeController@logout')->name('logout');

Route::prefix('inventory/')->group(function () {
    Route::get('lists', 'InventoryController@pageMain')->name('inventory.lists');
    Route::get('trash', 'InventoryController@pageMain')->name('inventory.trash');
    Route::get('create', 'InventoryController@pageMain')->name('inventory.create');
    Route::get('update', 'InventoryController@pageMain')->name('inventory.update');
});

Route::prefix('action/')->group(function () {
    Route::get('lists', 'ActionController@pageMain')->name('action.lists');
    Route::get('trash', 'ActionController@pageMain')->name('action.trash');
    Route::get('create', 'ActionController@pageMain')->name('action.create');
    Route::get('update', 'ActionController@pageMain')->name('action.update');
});

Route::prefix('users/')->group(function () {
    Route::get('lists', 'UserController@pageMain')->name('users.lists');
    Route::get('trash', 'UserController@pageMain')->name('users.trash');
    Route::get('create', 'UserController@pageMain')->name('users.create');
    Route::get('update', 'UserController@pageMain')->name('users.update');
});

Route::prefix('contract/')->group(function () {
    Route::get('lists', 'ContractController@pageMain')->name('contract.lists');
    Route::get('trash', 'ContractController@pageMain')->name('contract.trash');
    Route::get('create', 'ContractController@pageMain')->name('contract.create');
    Route::get('update', 'ContractController@pageMain')->name('contract.update');
});

Route::prefix('customer/')->group(function () {
    Route::get('lists', 'CustomerController@pageMain')->name('customer.lists');
    Route::get('trash', 'CustomerController@pageMain')->name('customer.trash');
    Route::get('create', 'CustomerController@pageMain')->name('customer.create');
    Route::get('update', 'CustomerController@pageMain')->name('customer.update');
});

Route::prefix('delivery/')->group(function () {
    Route::get('lists', 'DeliveryController@pageMain')->name('delivery.lists');
    Route::get('trash', 'DeliveryController@pageMain')->name('delivery.trash');
    Route::get('create', 'DeliveryController@pageMain')->name('delivery.create');
    Route::get('update', 'DeliveryController@pageMain')->name('delivery.update');
});

Route::prefix('driver/')->group(function () {
    Route::get('lists', 'DriverController@pageMain')->name('driver.lists');
    Route::get('trash', 'DriverController@pageMain')->name('driver.trash');
    Route::get('create', 'DriverController@pageMain')->name('driver.create');
    Route::get('update', 'DriverController@pageMain')->name('driver.update');
});

Route::prefix('role-permission/')->group(function () {
    Route::get('lists', 'RolePermissionController@pageMain')->name('role_permission.lists');
    Route::get('trash', 'RolePermissionController@pageMain')->name('role_permission.trash');
    Route::get('create', 'RolePermissionController@pageMain')->name('role_permission.create');
    Route::get('update', 'RolePermissionController@pageMain')->name('role_permission.update');
});

Route::prefix('transport/')->group(function () {
    Route::get('lists', 'TransportController@pageMain')->name('transport.lists');
    Route::get('trash', 'TransportController@pageMain')->name('transport.trash');
    Route::get('create', 'TransportController@pageMain')->name('transport.create');
    Route::get('update', 'TransportController@pageMain')->name('transport.update');
});

Route::prefix('transport-vendor/')->group(function () {
    Route::get('lists', 'TransportVendorController@pageMain')->name('transport_vendor.lists');
    Route::get('trash', 'TransportVendorController@pageMain')->name('transport_vendor.trash');
    Route::get('create', 'TransportVendorController@pageMain')->name('transport_vendor.create');
    Route::get('update', 'TransportVendorController@pageMain')->name('transport_vendor.update');
});

Route::prefix('vehicle/')->group(function () {
    Route::get('lists', 'VehicleController@pageMain')->name('vehicle.lists');
    Route::get('trash', 'VehicleController@pageMain')->name('vehicle.trash');
    Route::get('create', 'VehicleController@pageMain')->name('vehicle.create');
    Route::get('update', 'VehicleController@pageMain')->name('vehicle.update');
});

Route::prefix('noti/')->group(function () {
    Route::get('lists', 'NotiController@pageMain')->name('notification.lists');
    Route::get('trash', 'NotiController@pageMain')->name('notification.trash');
    Route::get('create', 'NotiController@pageMain')->name('notification.create');
    Route::get('update', 'NotiController@pageMain')->name('notification.update');
});

Route::prefix('delivery-transport/')->group(function () {
    Route::get('lists', 'DeliveryTransportController@pageMain')->name('delivery_transport.lists');
    Route::get('trash', 'DeliveryTransportController@pageMain')->name('delivery_transport.trash');
    Route::get('create', 'DeliveryTransportController@pageMain')->name('delivery_transport.create');
    Route::get('update', 'DeliveryTransportController@pageMain')->name('delivery_transport.update');
});

Route::prefix('report/')->group(function () {
    Route::get('create', 'ReportController@pageMain')->name('report.create');
});


Route::prefix('api/')->group(function () {
    Route::prefix('inventory/')->group(function () {
        Route::post('lists', 'InventoryController@lists')->name('api.inventory.lists');
        Route::post('trash', 'InventoryController@trash')->name('api.inventory.trash');
        Route::post('create', 'InventoryController@create')->name('api.inventory.create');
        Route::post('update', 'InventoryController@update')->name('api.inventory.update');
        Route::post('get', 'InventoryController@get')->name('api.inventory.get');
        Route::post('soft-delete', 'InventoryController@softDelete')->name('api.inventory.softdelete');
        Route::post('delete', 'InventoryController@delete')->name('api.inventory.delete');
        Route::post('restore', 'InventoryController@restore')->name('api.inventory.restore');
        Route::post('reference', 'InventoryController@reference')->name('api.inventory.reference');

    });

    Route::prefix('action/')->group(function () {
        Route::post('lists', 'ActionController@lists')->name('api.action.lists');
        Route::post('trash', 'ActionController@trash')->name('api.action.trash');
        Route::post('create', 'ActionController@create')->name('api.action.create');
        Route::post('update', 'ActionController@update')->name('api.action.update');
        Route::post('get', 'ActionController@get')->name('api.action.get');
        Route::post('soft-delete', 'ActionController@softDelete')->name('api.action.softdelete');
        Route::post('delete', 'ActionController@delete')->name('api.action.delete');
        Route::post('restore', 'ActionController@restore')->name('api.action.restore');
        Route::post('reference', 'ActionController@reference')->name('api.action.reference');

    });


    Route::prefix('users/')->group(function () {
        Route::post('lists', 'UserController@lists')->name('api.users.lists');
        Route::post('trash', 'UserController@trash')->name('api.users.trash');
        Route::post('create', 'UserController@create')->name('api.users.create');
        Route::post('update', 'UserController@update')->name('api.users.update');
        Route::post('get', 'UserController@get')->name('api.users.get');
        Route::post('soft-delete', 'UserController@softDelete')->name('api.users.softdelete');
        Route::post('delete', 'UserController@delete')->name('api.users.delete');
        Route::post('restore', 'UserController@restore')->name('api.users.restore');
        Route::post('reference', 'UserController@reference')->name('api.users.reference');
    });


    Route::prefix('contract/')->group(function () {
        Route::post('lists', 'ContractController@lists')->name('api.contract.lists');
        Route::post('trash', 'ContractController@trash')->name('api.contract.trash');
        Route::post('create', 'ContractController@create')->name('api.contract.create');
        Route::post('update', 'ContractController@update')->name('api.contract.update');
        Route::post('get', 'ContractController@get')->name('api.contract.get');
        Route::post('soft-delete', 'ContractController@softDelete')->name('api.contract.softdelete');
        Route::post('delete', 'ContractController@delete')->name('api.contract.delete');
        Route::post('restore', 'ContractController@restore')->name('api.contract.restore');
        Route::post('reference', 'ContractController@reference')->name('api.contract.reference');
    });

    Route::prefix('delivery-transport/')->group(function () {
        Route::post('lists', 'DeliveryTransportController@lists')->name('api.delivery_transport.lists');
        Route::post('trash', 'DeliveryTransportController@trash')->name('api.delivery_transport.trash');
        Route::post('create', 'DeliveryTransportController@create')->name('api.delivery_transport.create');
        Route::post('update', 'DeliveryTransportController@update')->name('api.delivery_transport.update');
        Route::post('get', 'DeliveryTransportController@get')->name('api.delivery_transport.get');
        Route::post('soft-delete', 'DeliveryTransportController@softDelete')->name('api.delivery_transport.softdelete');
        Route::post('delete', 'DeliveryTransportController@delete')->name('api.delivery_transport.delete');
        Route::post('restore', 'DeliveryTransportController@restore')->name('api.delivery_transport.restore');
        Route::post('reference', 'DeliveryTransportController@reference')->name('api.delivery_transport.reference');
    });

    Route::prefix('customer/')->group(function () {
        Route::post('lists', 'CustomerController@lists')->name('api.customer.lists');
        Route::post('trash', 'CustomerController@trash')->name('api.customer.trash');
        Route::post('create', 'CustomerController@create')->name('api.customer.create');
        Route::post('update', 'CustomerController@update')->name('api.customer.update');
        Route::post('get', 'CustomerController@get')->name('api.customer.get');
        Route::post('soft-delete', 'CustomerController@softDelete')->name('api.customer.softdelete');
        Route::post('delete', 'CustomerController@delete')->name('api.customer.delete');
        Route::post('restore', 'CustomerController@restore')->name('api.customer.restore');
        Route::post('reference', 'CustomerController@reference')->name('api.customer.reference');
    });

    Route::prefix('delivery/')->group(function () {
        Route::post('lists', 'DeliveryController@lists')->name('api.delivery.lists');
        Route::post('trash', 'DeliveryController@trash')->name('api.delivery.trash');
        Route::post('create', 'DeliveryController@create')->name('api.delivery.create');
        Route::post('update', 'DeliveryController@update')->name('api.delivery.update');
        Route::post('get', 'DeliveryController@get')->name('api.delivery.get');
        Route::post('soft-delete', 'DeliveryController@softDelete')->name('api.delivery.softdelete');
        Route::post('delete', 'DeliveryController@delete')->name('api.delivery.delete');
        Route::post('restore', 'DeliveryController@restore')->name('api.delivery.restore');
        Route::post('reference', 'DeliveryController@reference')->name('api.delivery.reference');
    });

    Route::prefix('driver/')->group(function () {
        Route::post('lists', 'DriverController@lists')->name('api.driver.lists');
        Route::post('trash', 'DriverController@trash')->name('api.driver.trash');
        Route::post('create', 'DriverController@create')->name('api.driver.create');
        Route::post('update', 'DriverController@update')->name('api.driver.update');
        Route::post('get', 'DriverController@get')->name('api.driver.get');
        Route::post('soft-delete', 'DriverController@softDelete')->name('api.driver.softdelete');
        Route::post('delete', 'DriverController@delete')->name('api.driver.delete');
        Route::post('restore', 'DriverController@restore')->name('api.driver.restore');
        Route::post('reference', 'DriverController@reference')->name('api.driver.reference');
    });

    Route::prefix('role-permission/')->group(function () {
        Route::post('lists', 'RolePermissionController@lists')->name('api.role_permission.lists');
        Route::post('trash', 'RolePermissionController@trash')->name('api.role_permission.trash');
        Route::post('create', 'RolePermissionController@create')->name('api.role_permission.create');
        Route::post('update', 'RolePermissionController@update')->name('api.role_permission.update');
        Route::post('get', 'RolePermissionController@get')->name('api.role_permission.get');
        Route::post('soft-delete', 'RolePermissionController@softDelete')->name('api.role_permission.softdelete');
        Route::post('delete', 'RolePermissionController@delete')->name('api.role_permission.delete');
        Route::post('restore', 'RolePermissionController@restore')->name('api.role_permission.restore');
        Route::post('reference', 'RolePermissionController@reference')->name('api.role_permission.reference');
    });


    Route::prefix('transport/')->group(function () {
        Route::post('lists', 'TransportController@lists')->name('api.transport.lists');
        Route::post('trash', 'TransportController@trash')->name('api.transport.trash');
        Route::post('create', 'TransportController@create')->name('api.transport.create');
        Route::post('update', 'TransportController@update')->name('api.transport.update');
        Route::post('get', 'TransportController@get')->name('api.transport.get');
        Route::post('soft-delete', 'TransportController@softDelete')->name('api.transport.softdelete');
        Route::post('delete', 'TransportController@delete')->name('api.transport.delete');
        Route::post('restore', 'TransportController@restore')->name('api.transport.restore');
        Route::post('reference', 'TransportController@reference')->name('api.transport.reference');
    });


    Route::prefix('transport-vendor/')->group(function () {
        Route::post('lists', 'TransportVendorController@lists')->name('api.transport_vendor.lists');
        Route::post('trash', 'TransportVendorController@trash')->name('api.transport_vendor.trash');
        Route::post('create', 'TransportVendorController@create')->name('api.transport_vendor.create');
        Route::post('update', 'TransportVendorController@update')->name('api.transport_vendor.update');
        Route::post('get', 'TransportVendorController@get')->name('api.transport_vendor.get');
        Route::post('soft-delete', 'TransportVendorController@softDelete')->name('api.transport_vendor.softdelete');
        Route::post('delete', 'TransportVendorController@delete')->name('api.transport_vendor.delete');
        Route::post('restore', 'TransportVendorController@restore')->name('api.transport_vendor.restore');
        Route::post('reference', 'TransportVendorController@reference')->name('api.transport_vendor.reference');
    });

    Route::prefix('vehicle/')->group(function () {
        Route::post('lists', 'VehicleController@lists')->name('api.vehicle.lists');
        Route::post('trash', 'VehicleController@trash')->name('api.vehicle.trash');
        Route::post('create', 'VehicleController@create')->name('api.vehicle.create');
        Route::post('update', 'VehicleController@update')->name('api.vehicle.update');
        Route::post('get', 'VehicleController@get')->name('api.vehicle.get');
        Route::post('soft-delete', 'VehicleController@softDelete')->name('api.vehicle.softdelete');
        Route::post('delete', 'VehicleController@delete')->name('api.vehicle.delete');
        Route::post('restore', 'VehicleController@restore')->name('api.vehicle.restore');
        Route::post('reference', 'VehicleController@reference')->name('api.vehicle.reference');
    });

    Route::prefix('noti/')->group(function () {
        Route::post('lists', 'NotiController@lists')->name('api.notification.lists');
        Route::post('trash', 'NotiController@trash')->name('api.notification.trash');
        Route::post('create', 'NotiController@create')->name('api.notification.create');
        Route::post('update', 'NotiController@update')->name('api.notification.update');
        Route::post('get', 'NotiController@get')->name('api.notification.get');
        Route::post('soft-delete', 'NotiController@softDelete')->name('api.notification.softdelete');
        Route::post('delete', 'NotiController@delete')->name('api.notification.delete');
        Route::post('restore', 'NotiController@restore')->name('api.notification.restore');
        Route::post('reference', 'NotiController@reference')->name('api.notification.reference');
    });

    Route::prefix('report/')->group(function () {
        Route::get('create', 'ReportController@create')->name('api.report.create');
    });

    Route::post('get-action-by-contract', 'ContractController@getActionByContract')->name('api.contract.getAction');
    Route::post('get-delivery-by-contract', 'ContractController@getDeliveryByContract')->name('api.contract.getDelivery');
    Route::post('get-transport-by-delivery', 'DeliveryController@getTransportByDelivery')->name('api.delivery.getTransport');

});


import configForm from "../configForm";
import TransportModel from "./TransportModel";

let config = configForm

function getDropdownField(item) {
    if (item.model == 'transport_type_id') {
        return reference.transportType.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    } else if (item.model == 'driver_id') {
        return reference.driver.map((item) => {
            return {
                id: item.id,
                value: item.name
            }
        })
    } else if (item.model == 'vehicle_id') {
        return reference.vehicle.map((item) => {
            return {
                id: item.id,
                value: item.name
            }
        })
    } else if (item.model == 'transport_vendor_id') {
        return reference.transportVendor.map((item) => {
            return {
                id: item.id,
                value: item.name
            }
        })
    }
}

config.id = 'transport'
config.title = 'Thông tin đơn vị vận chuyển'
config.modelField = TransportModel
config.createApi = API.CREATE_TRANSPORT
config.updateApi = API.UPDATE_TRANSPORT
config.commonDataApi = API.GET_TRANSPORT
config.referenceApi = API.REFERENCE_TRANSPORT
config.listPath = PAGE.LIST_TRANSPORT
config.updateNoti = "Cập nhật thông tin đơn vị vận chuyển thành công!"
config.createNoti = "Tạo đơn vị vận chuyển mới thành công!"
config.getDropdownField = getDropdownField


export default config

import configForm from "../configForm";
import VehicleModel from "./VehicleModel";

let config = configForm

function getDropdownField(item) {
    if (item.model == 'transport_type_id') {
        return reference.transportType.map((item) => {
            return {
                id: item.id,
                value: item.display_value
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

config.id = 'vehicle'
config.title = 'Thông tin phương tiện vận chuyển'
config.modelField = VehicleModel
config.createApi = API.CREATE_VEHICLE
config.updateApi = API.UPDATE_VEHICLE
config.commonDataApi = API.GET_VEHICLE
config.referenceApi = API.REFERENCE_VEHICLE
config.listPath = PAGE.LIST_VEHICLE
config.updateNoti = "Cập nhật thông tin phương tiện vận chuyển thành công!"
config.createNoti = "Tạo phương tiện vận chuyển mới thành công!"
config.getDropdownField = getDropdownField


export default config

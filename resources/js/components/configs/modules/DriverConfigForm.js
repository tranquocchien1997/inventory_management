import configForm from "../configForm";
import DriverModel from "./DriverModel";

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
config.id = 'driver'
config.title = 'Thông tin người vận chuyển'
config.modelField = DriverModel
config.createApi = API.CREATE_DRIVER
config.updateApi = API.UPDATE_DRIVER
config.commonDataApi = API.GET_DRIVER
config.referenceApi = API.REFERENCE_DRIVER
config.listPath = PAGE.LIST_DRIVER
config.updateNoti = "Cập nhật thông tin người vận chuyển thành công!"
config.createNoti = "Tạo người vận chuyển mới thành công!"
config.getDropdownField = getDropdownField


export default config

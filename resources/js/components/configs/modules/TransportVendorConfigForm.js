import configForm from "../configForm";
import TransportVendorModel from "./TransportVendorModel";

let config = configForm

config.id = 'transport_vendor'
config.title = 'Thông tin đối tác vận chuyển'
config.modelField = TransportVendorModel
config.createApi = API.CREATE_TRANSPORT_VENDOR
config.updateApi = API.UPDATE_TRANSPORT_VENDOR
config.commonDataApi = API.GET_TRANSPORT_VENDOR
config.referenceApi = API.REFERENCE_TRANSPORT_VENDOR
config.listPath = PAGE.LIST_TRANSPORT_VENDOR
config.updateNoti = "Cập nhật thông tin đối tác vận chuyển thành công!"
config.createNoti = "Tạo đối tác vận chuyển mới thành công!"

export default config

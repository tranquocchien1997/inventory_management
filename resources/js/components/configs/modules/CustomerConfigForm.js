import configForm from "../configForm";
import CustomerModel from "./CustomerModel";

let config = configForm

config.id = 'customer'
config.title = 'Thông tin khách hàng'
config.modelField = CustomerModel
config.createApi = API.CREATE_CUSTOMER
config.updateApi = API.UPDATE_CUSTOMER
config.commonDataApi = API.GET_CUSTOMER
config.referenceApi = API.REFERENCE_CUSTOMER
config.listPath = PAGE.LIST_CUSTOMER
config.updateNoti = "Cập nhật thông tin khách hàng thành công!"
config.createNoti = "Tạo khách hàng mới thành công!"

export default config

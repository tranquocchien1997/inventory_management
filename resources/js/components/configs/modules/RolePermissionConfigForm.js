import configForm from "../configForm";
let config = configForm


config.id = 'role_permission'
config.title = 'Thông tin phân quyền'
config.createApi = API.CREATE_ROLE_PERMISSION
config.updateApi = API.UPDATE_ROLE_PERMISSION
config.commonDataApi = API.GET_ROLE_PERMISSION
config.referenceApi = API.REFERENCE_ROLE_PERMISSION
config.listPath = PAGE.LIST_ROLE_PERMISSION
config.updateNoti = "Cập nhật thông tin thành công!"
config.createNoti = "Tạo mới thành công!"


export default config

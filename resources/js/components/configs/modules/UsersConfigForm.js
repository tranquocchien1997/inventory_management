import configForm from "../configForm";
import UsersModel from "./UsersModel";

let config = configForm

function getDropdownField(item) {

    if (item.model == 'role_id') {
        return reference.role.map((item) => {
            return {
                id: item.id,
                value: item.name
            }
        })
    }
}

config.id = 'user'
config.title = 'Thông tin tài khoản'
config.modelField = UsersModel
config.createApi = API.CREATE_USERS
config.updateApi = API.UPDATE_USERS
config.commonDataApi = API.GET_USERS
config.referenceApi = API.REFERENCE_USERS
config.listPath = PAGE.LIST_USERS
config.updateNoti = "Cập nhật tài khoản thành công!"
config.createNoti = "Tạo tài khoản mới thành công!"
config.getDropdownField = getDropdownField


export default config

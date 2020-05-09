import configForm from "../configForm";
import NotificationModel from "./NotificationModel";

let config = configForm


function getDropdownField(item) {
    if (item.model == 'action_type_id') {
        return reference.actionType.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    }
}

config.id = 'notification'
config.title = 'Thông tin thông báo'
config.modelField = NotificationModel
config.createApi = API.CREATE_NOTIFICATION
config.updateApi = API.UPDATE_NOTIFICATION
config.commonDataApi = API.GET_NOTIFICATION
config.referenceApi = API.REFERENCE_NOTIFICATION
config.listPath = PAGE.LIST_NOTIFICATION
config.updateNoti = "Cập nhật thông tin thông báo thành công!"
config.createNoti = "Tạo thông báo mới thành công!"
config.getDropdownField = getDropdownField

export default config

import configForm from "../configForm";
import ActionModel from "./ActionModel";

let config = JSON.parse(JSON.stringify(configForm))

function getDropdownField(item) {
    if (item.model == 'action_type_id' && reference.actionType) {
        return reference.actionType.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    } else if (item.model == 'contract_id' && reference.contract) {
        return reference.contract.map((item) => {
            return {
                id: item.id,
                value: item.code
            }
        })
    } else if (item.model == 'creator_id' && reference.user) {
        return reference.user.map((item) => {
            return {
                id: item.id,
                value: item.name
            }
        })
    } else if ((item.model == 'inventory_id' || item.model == 'inventory_receive_id')  && reference.inventory) {
        return reference.inventory.map((item) => {
            return {
                id: item.id,
                value: item.name
            }
        })
    } else if (item.model == 'notification_id' && reference.notification) {
        return reference.notification.map((item) => {
            return {
                id: item.id,
                value: item.code
            }
        })
    } else if (item.model == 'status' && reference.status) {
        return reference.status.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    }
}

config.id = 'action'
config.title = 'Thông tin phiếu kho'
config.modelField = ActionModel
config.createApi = API.CREATE_ACTION
config.updateApi = API.UPDATE_ACTION
config.commonDataApi = API.GET_ACTION
config.referenceApi = API.REFERENCE_ACTION
config.listPath = PAGE.LIST_ACTION
config.softDeleteApi = API.DELETE_ACTION
config.updateNoti = "Cập nhật thông tin phiếu thành công!"
config.createNoti = "Tạo phiếu kho mới thành công!"
config.getDropdownField = getDropdownField


export default config

import configForm from "../configForm";
import DeliveryModel from "./DeliveryModel";

let config = JSON.parse(JSON.stringify(configForm))

function getDropdownField(item) {
    if (item.model == 'bank_id' && reference.bank) {
        return reference.bank.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    } else if (item.model == 'notification_id' && reference.notification) {
        return reference.notification.map((item) => {
            return {
                id: item.id,
                value: item.code
            }
        })
    } else if (item.model == 'delivery_type_id' && reference.deliveryType) {
        return reference.deliveryType.map((item) => {
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
    } else if (item.model == 'status' && reference.status) {
        return reference.status.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    }
}

config.id = 'delivery'
config.title = 'Thông tin vận chuyển'
config.modelField = DeliveryModel
config.createApi = API.CREATE_DELIVERY
config.updateApi = API.UPDATE_DELIVERY
config.commonDataApi = API.GET_DELIVERY
config.referenceApi = API.REFERENCE_DELIVERY
// config.listPath = PAGE.LIST_DELIVERY
config.updatePath = PAGE.UPDATE_DELIVERY
config.softDeleteApi = API.DELETE_DELIVERY
config.updateNoti = "Cập nhật thông tin vận chuyển thành công!"
config.createNoti = "Tạo vận chuyển mới thành công!"
config.getDropdownField = getDropdownField


export default config

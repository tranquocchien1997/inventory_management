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
    } else if (item.model == 'status_payment' && reference.statusPayment){
        return reference.statusPayment.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    } else if (item.model == 'unit_amount') {
        return reference.unitAmount.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    } else if (item.model == 'estimate_date_amount_receive_count') {
        return [
            {
                id: 7,
                value: 7
            },
            {
                id: 10,
                value: 10
            },
            {
                id: 14,
                value: 14
            },
            {
                id: 21,
                value: 21
            }
        ]
    }


}

config.id = 'delivery'
config.title = 'Thông tin thực hiện HĐ'
config.modelField = DeliveryModel
config.createApi = API.CREATE_DELIVERY
config.updateApi = API.UPDATE_DELIVERY
config.commonDataApi = API.GET_DELIVERY
config.referenceApi = API.REFERENCE_DELIVERY
// config.listPath = PAGE.LIST_DELIVERY
config.updatePath = PAGE.UPDATE_DELIVERY
config.softDeleteApi = API.DELETE_DELIVERY
config.updateNoti = "Cập nhật thực hiện HĐ thành công!"
config.createNoti = "Tạo thực hiện HĐ mới thành công!"
config.getDropdownField = getDropdownField


export default config

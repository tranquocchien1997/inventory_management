import configForm from "../configForm";
import DeliveryTransportModel from "./DeliveryTransportModel";

let config = JSON.parse(JSON.stringify(DeliveryTransportModel))

function getDropdownField(item) {
    if (item.model == 'action_id' && reference.action) {
        return reference.action.map((item) => {
            return {
                id: item.id,
                value: item.code
            }
        })
    } else if (item.model == 'delivery_id' && reference.delivery) {
        return reference.delivery.map((item) => {
            return {
                id: item.id,
                value: item.code
            }
        })
    } else if (item.model == 'transport_id' && reference.transport) {
        return reference.transport.map((item) => {
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

config.id = 'delivery_transport'
config.title = 'Thông tin vận chuyển'
config.modelField = DeliveryTransportModel
config.createApi = API.CREATE_DELIVERY_TRANSPORT
config.updateApi = API.UPDATE_DELIVERY_TRANSPORT
config.commonDataApi = API.GET_DELIVERY_TRANSPORT
config.referenceApi = API.REFERENCE_DELIVERY_TRANSPORT
// config.listPath = PAGE.LIST_DELIVERY_TRANSPORT
config.softDeleteApi = API.DELETE_DELIVERY_TRANSPORT
config.updateNoti = "Cập nhật thành công!"
config.createNoti = "Tạo mới thành công!"
config.getDropdownField = getDropdownField


export default config

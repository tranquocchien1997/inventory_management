import configForm from "../configForm";
import ContractModel from "./ContractBusinessModel";

let config = JSON.parse(JSON.stringify(configForm))

function getDropdownField(item) {
    if (item.model == 'customer_id') {
        return reference.customer.map((item) => {
            return {
                id: item.id,
                value: item.company_name
            }
        })
    } else if (item.model == 'contract_type_id') {
        return reference.contractType.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    } else if (item.model == 'creator_id') {
        return reference.user.map((item) => {
            return {
                id: item.id,
                value: item.name
            }
        })
    } else if (item.model == 'payment_method') {
        return reference.paymentMethod.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    } else if (item.model == 'direction_id') {
        return reference.direction.map((item) => {
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
    }
}

config.id = 'contract'
config.title = 'Thông tin hợp đồng'
config.modelField = ContractModel
config.createApi = API.CREATE_CONTRACT_BUSINESS
config.updateApi = API.UPDATE_CONTRACT_BUSINESS
config.commonDataApi = API.GET_CONTRACT
config.referenceApi = API.REFERENCE_CONTRACT_BUSINESS
config.softDeleteApi = API.ROLLBACK_CONTRACT_BUSINESS
config.listPath = PAGE.LIST_CONTRACT_BUSINESS
config.updateNoti = "Cập nhật thông tin hợp đồng thành công!"
config.createNoti = "Tạo hợp đồng thành công!"
config.getDropdownField = getDropdownField


export default config

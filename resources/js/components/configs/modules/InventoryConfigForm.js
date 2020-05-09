import configForm from "../configForm";
import InventoryModel from "./InventoryModel";

let config = configForm

function getDropdownField(item) {
    if (item.model == 'user_id') {
        return reference.users.map((item) => {
            return {
                id: item.id,
                value: item.name
            }
        })
    } else if (item.model == 'type') {
        return reference.inventoryType.map((item) => {
            return {
                id: item.id,
                value: item.display_value
            }
        })
    }
}

config.id = 'inventory'
config.title = 'Thông tin kho'
config.modelField = InventoryModel
config.createApi = API.CREATE_INVENTORY
config.updateApi = API.UPDATE_INVENTORY
config.commonDataApi = API.GET_INVENTORY
config.referenceApi = API.REFERENCE_INVENTORY
config.listPath = PAGE.LIST_INVENTORY
config.updateNoti = "Cập nhật thông tin kho hàng thành công!"
config.createNoti = "Tạo kho hàng mới thành công!",
config.getDropdownField = getDropdownField


export default config

<template>
    <div>
        <PanelTable :configs="configs" :parsePayload="parseResponse"/>
    </div>
</template>

<script>

    import PanelTable from '../common/panelTable'
    import configTable from '../configs/panelTable'
    import MixinForm from "../configs/MixinForm";

    export default {
        mixins: [ MixinForm ],
        components: {
            PanelTable
        },
        data(){
            return {
                configs: [],
            }
        },
        created() {
            let config = JSON.parse(JSON.stringify(configTable))
            config.id = 'inventory'
            if(this.trashMode){
                config.delete.api = API.DELETE_INVENTORY
                config.restore.api = API.RESTORE_INVENTORY
                config.list.api = API.TRASH_INVENTORY
                config.list.path = PAGE.LIST_INVENTORY
            }else{
                config.list.api = API.LIST_INVENTORY
                config.softDelete.api = API.SOFT_DELETE_INVENTORY
                config.update.path = PAGE.UPDATE_INVENTORY
                config.create.path = PAGE.CREATE_INVENTORY
                config.trash.path = PAGE.TRASH_INVENTORY
            }
            config.titlePanel = 'Danh sách kho'
            config.titleColumn = {
                code: 'Mã kho',
                inventory_type: 'Loại kho',
                name: 'Tên kho hàng',
                user_name: 'Người phụ trách',
                quantity: 'Tồn kho khả dụng',
                current_quantity: 'Tồn kho hiện tại',
                action: 'Thao tác'
            }

            this.configs = config
        },
        methods:{
            parseResponse(res){
                return res.map((item) => {
                    item.current_quantity = this.helper.formatWeight(item.current_quantity)
                    item.quantity = this.helper.formatWeight(item.quantity)
                    return item
                })
            }
        }
    }
</script>


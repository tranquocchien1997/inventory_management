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
            config.id = 'action'
            if(this.trashMode){
                config.delete.api = API.DELETE_ACTION
                config.restore.api = API.RESTORE_ACTION
                config.list.api = API.TRASH_ACTION
                config.list.path = PAGE.LIST_ACTION
            }else{
                config.list.api = API.LIST_ACTION
                config.softDelete.api = API.SOFT_DELETE_ACTION
                config.update.path = PAGE.UPDATE_ACTION
                config.create.path = PAGE.CREATE_ACTION
                config.trash.path = PAGE.TRASH_ACTION
            }
            config.titlePanel = 'Danh sách phiếu kho'
            config.titleColumn = {
                action_type: 'Loại phiếu',
                iven_name: 'Kho',
                user_name: 'Người tạo',
                contract_code: 'Hợp đồng',
                notification_code: 'Thông báo',
                // code: 'Mã phiếu',
                quantity: 'Số lượng',
                status_name: 'Trạng thái',
                // updated_at: 'Ngày cập nhật',
                // created_at: 'Ngày tạo',
                action: 'Thao tác'
            }

            this.configs = config
        },
        methods:{
            parseResponse(res){
                return res.map((item) => {
                    item.quantity = this.helper.formatWeight(item.quantity)
                    item.amount = this.helper.formatCurrency(item.amount)
                    item.created_at = this.helper.formatDateTime(item.created_at)
                    item.updated_at = this.helper.formatDateTime(item.updated_at)

                    return item
                })
            }
        }
    }
</script>


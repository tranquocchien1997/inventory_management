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
            config.id = 'contract'
            if(this.trashMode){
                config.delete.api = API.DELETE_CONTRACT
                config.restore.api = API.RESTORE_CONTRACT
                config.list.api = API.TRASH_CONTRACT
                config.list.path = PAGE.LIST_CONTRACT
            }else{
                config.list.api = API.LIST_CONTRACT
                config.softDelete.api = API.SOFT_DELETE_CONTRACT
                config.update.path = PAGE.UPDATE_CONTRACT_BUSINESS
                config.create.path = PAGE.CREATE_CONTRACT_BUSINESS
                config.trash.path = PAGE.TRASH_CONTRACT_BUSINESS
            }
            config.titlePanel = 'Danh sách hợp đồng'
            config.titleColumn = {
                company_name: 'Khách hàng',
                creator: 'Người tạo',
                code: 'Mã hợp đồng',
                quantity: 'Số lượng',
                action: 'Thao tác'
            }

            this.configs = config
        },
        methods:{
            parseResponse(res){
                return res.map((item) => {
                    item.quantity = this.helper.formatWeight(item.quantity)
                    item.amount = this.helper.formatCurrency(item.amount)
                    item.delivered_quantity = this.helper.formatWeight(item.delivered_quantity)
                    item.received_quantity = this.helper.formatWeight(item.received_quantity)
                    item.expired_delivery = this.helper.formatDateTime(item.expired_delivery)
                    item.created_at = this.helper.formatDateTime(item.created_at)
                    item.updated_at = this.helper.formatDateTime(item.updated_at)

                    return item
                })
            }
        }
    }
</script>


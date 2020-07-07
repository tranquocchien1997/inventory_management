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
                date_created: 'Ngày hợp đồng',
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
                    item.date_created = this.helper.formatDateTime(item.date_created, 'DD/MM/YYYY')

                    return item
                })
            }
        }
    }
</script>


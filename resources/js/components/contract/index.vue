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
                config.update.path = PAGE.UPDATE_CONTRACT
                config.create.path = PAGE.CREATE_CONTRACT
                config.trash.path = PAGE.TRASH_CONTRACT
            }
            config.titlePanel = 'Danh sách hợp đồng'
            config.titleColumn = {
                // contract_type_id: 'Loại hợp đồng',
                company_name: 'Khách hàng',
                creator: 'Người tạo',
                direction: 'Đường đi',
                code: 'Mã hợp đồng',
                quantity: 'Số lượng',
                // amount: 'Đơn giá',
                // total_amount: 'Số tiền',
                // payment: 'Phương thức thanh toán',
                delivered_quantity: 'Số lượng đã giao',
                received_quantity: 'Số lượng đã nhận',
                // expired_delivery: 'Thời hạn giao',
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


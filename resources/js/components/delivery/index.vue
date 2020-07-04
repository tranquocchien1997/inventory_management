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
            config.id = 'delivery'
            if(this.trashMode){
                config.delete.api = API.DELETE_DELIVERY
                config.restore.api = API.RESTORE_DELIVERY
                config.list.api = API.TRASH_DELIVERY
                config.list.path = PAGE.LIST_DELIVERY
            }else{
                config.list.api = API.LIST_DELIVERY
                config.softDelete.api = API.SOFT_DELETE_DELIVERY
                config.update.path = PAGE.UPDATE_DELIVERY
                config.create.path = PAGE.CREATE_DELIVERY
                config.trash.path = PAGE.TRASH_DELIVERY
            }
            config.titlePanel = 'Danh sách phiếu kho'
            config.titleColumn = {
                // delivery_type: 'Loại vận chuyển',
                notification_code: 'Mã thông báo',
                code: 'Số Lot',
                date_delivery: 'Ngày giao HĐ',
                quantity_delivery: 'Số lượng giao HĐ',
                amount_delivery: 'Số tiền nhận HĐ',
                date_delivered: 'Ngày đã giao',
                quantity_delivered: 'Số lượng đã giao',
                estimate_date_amount_receive: 'Ngày nhận tiền dự kiến',
                estimate_amount_receive: 'Số tiền về dự kiến',
                bank: 'Ngân hàng tiền về',
                date_amount_receive: 'Ngày tiền về',
                amount_receive: 'Số tiền về',
                status_payment: 'Trạng thái',
                // updated_at: 'Ngày cập nhật',
                // created_at: 'Ngày tạo',
                action: 'Thao tác'
            }

            this.configs = config
        },
        methods:{
            parseResponse(res){
                return res.map((item) => {
                    item.quantity_delivery = this.helper.formatWeight(item.quantity_delivery)
                    item.quantity_delivered = this.helper.formatWeight(item.quantity_delivered)

                    item.amount_delivery = this.helper.formatCurrency(item.amount_delivery)
                    item.estimate_amount_receive = this.helper.formatCurrency(item.estimate_amount_receive)
                    item.amount_receive = this.helper.formatCurrency(item.amount_receive)

                    item.date_delivery = this.helper.formatDateTime(item.date_delivery,'DD/MM/YYYY')
                    item.date_delivered = this.helper.formatDateTime(item.date_delivered,'DD/MM/YYYY')
                    item.estimate_date_amount_receive = this.helper.formatDateTime(item.estimate_date_amount_receive,'DD/MM/YYYY')
                    item.date_amount_receive = this.helper.formatDateTime(item.date_amount_receive,'DD/MM/YYYY')

                    item.created_at = this.helper.formatDateTime(item.created_at)
                    item.updated_at = this.helper.formatDateTime(item.updated_at)

                    return item
                })
            }
        }
    }
</script>


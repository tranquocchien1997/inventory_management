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
            config.id = 'delivery_transport'
            if(this.trashMode){
                config.delete.api = API.DELETE_DELIVERY_TRANSPORT
                config.restore.api = API.RESTORE_DELIVERY_TRANSPORT
                config.list.api = API.TRASH_DELIVERY_TRANSPORT
                config.list.path = PAGE.LIST_DELIVERY_TRANSPORT
            }else{
                config.list.api = API.LIST_DELIVERY_TRANSPORT
                config.softDelete.api = API.SOFT_DELETE_DELIVERY_TRANSPORT
                config.update.path = PAGE.UPDATE_DELIVERY_TRANSPORT
                config.create.path = PAGE.CREATE_DELIVERY_TRANSPORT
                config.trash.path = PAGE.TRASH_DELIVERY_TRANSPORT
            }
            config.titlePanel = 'Danh sách phiếu kho'
            config.titleColumn = {
                action_id: 'Phiếu kho',
                delivery_id: 'Vận chuyển',
                transport_id: 'Đơn vị',
                amount: 'Số hàng',
                departure: 'Xuất phát',
                destination: 'Đích đến',
                date_start: 'Ngày bắt đầu',
                date_end: 'ngày kết thúc',
                status_name: 'Trạng thái',
                updated_at: 'Ngày cập nhật',
                created_at: 'Ngày tạo',
                action: 'Thao tác'
            }

            this.configs = config
        },
        methods:{
            parseResponse(res){
                return res.map((item) => {
                    item.amount = this.helper.formatWeight(item.amount)
                    item.date_end = this.helper.formatDateTime(item.date_end)
                    item.date_start = this.helper.formatDateTime(item.date_start)
                    item.created_at = this.helper.formatDateTime(item.created_at)
                    item.updated_at = this.helper.formatDateTime(item.updated_at)

                    return item
                })
            }
        }
    }
</script>


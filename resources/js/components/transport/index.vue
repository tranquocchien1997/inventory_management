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
            config.id = 'transport'
            if(this.trashMode){
                config.delete.api = API.DELETE_TRANSPORT
                config.restore.api = API.RESTORE_TRANSPORT
                config.list.api = API.TRASH_TRANSPORT
                config.list.path = PAGE.LIST_TRANSPORT
            }else{
                config.list.api = API.LIST_TRANSPORT
                config.softDelete.api = API.SOFT_DELETE_TRANSPORT
                config.update.path = PAGE.UPDATE_TRANSPORT
                config.create.path = PAGE.CREATE_TRANSPORT
                config.trash.path = PAGE.TRASH_TRANSPORT
            }
            config.titlePanel = 'Danh sách phiếu kho'
            config.titleColumn = {
                transport_type: 'Loại vận chuyển',
                driver_name: 'Người vận chuyển',
                vehicle_code: 'Phương tiện',
                transport_vendor_name: 'Đối tác vận chuyển',
                // updated_at: 'Ngày cập nhật',
                // created_at: 'Ngày tạo',
                action: 'Thao tác'
            }

            this.configs = config
        },
        methods:{
            parseResponse(res){
                return res.map((item) => {

                    item.created_at = this.helper.formatDateTime(item.created_at)
                    item.updated_at = this.helper.formatDateTime(item.updated_at)

                    return item
                })
            }
        }
    }
</script>


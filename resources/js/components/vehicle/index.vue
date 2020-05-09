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
            config.id = 'vehicle'
            if(this.trashMode){
                config.delete.api = API.DELETE_VEHICLE
                config.restore.api = API.RESTORE_VEHICLE
                config.list.api = API.TRASH_VEHICLE
                config.list.path = PAGE.LIST_VEHICLE
            }else{
                config.list.api = API.LIST_VEHICLE
                config.softDelete.api = API.SOFT_DELETE_VEHICLE
                config.update.path = PAGE.UPDATE_VEHICLE
                config.create.path = PAGE.CREATE_VEHICLE
                config.trash.path = PAGE.TRASH_VEHICLE
            }
            config.titlePanel = 'Danh sách phương tiện vận chuyển'
            config.titleColumn = {
                transport_type: 'Hình thức vận chuyển',
                transport_vendor: 'Đối tác',
                code: 'Mã phương tiện',
                name: 'Tên phương tiện',
                updated_at: 'Ngày cập nhật',
                created_at: 'Ngày tạo',
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


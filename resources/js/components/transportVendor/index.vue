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
            config.id = 'transport_vendor'
            if(this.trashMode){
                config.delete.api = API.DELETE_TRANSPORT_VENDOR
                config.restore.api = API.RESTORE_TRANSPORT_VENDOR
                config.list.api = API.TRASH_TRANSPORT_VENDOR
                config.list.path = PAGE.LIST_TRANSPORT_VENDOR
            }else{
                config.list.api = API.LIST_TRANSPORT_VENDOR
                config.softDelete.api = API.SOFT_DELETE_TRANSPORT_VENDOR
                config.update.path = PAGE.UPDATE_TRANSPORT_VENDOR
                config.create.path = PAGE.CREATE_TRANSPORT_VENDOR
                config.trash.path = PAGE.TRASH_TRANSPORT_VENDOR
            }
            config.titlePanel = 'Danh sách đối tác vận chuyển'
            config.titleColumn = {
                name: 'Tên đối tác',
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


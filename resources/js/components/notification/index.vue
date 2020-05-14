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
            config.id = 'notification'
            if(this.trashMode){
                config.delete.api = API.DELETE_NOTIFICATION
                config.restore.api = API.RESTORE_NOTIFICATION
                config.list.api = API.TRASH_NOTIFICATION
                config.list.path = PAGE.LIST_NOTIFICATION
            }else{
                config.list.api = API.LIST_NOTIFICATION
                config.softDelete.api = API.SOFT_DELETE_NOTIFICATION
                config.update.path = PAGE.UPDATE_NOTIFICATION
                config.create.path = PAGE.CREATE_NOTIFICATION
                config.trash.path = PAGE.TRASH_NOTIFICATION
            }
            config.titlePanel = 'Danh sách thông báo'
            config.titleColumn = {
                code: 'Mã thông báo',
                // action_type: 'Loại thao tác',
                title: 'Tiêu đề',
                content: 'Nội dung',
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


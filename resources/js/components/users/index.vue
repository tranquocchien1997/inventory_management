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
            config.id = 'user'
            if(this.trashMode){
                config.delete.api = API.DELETE_USERS
                config.restore.api = API.RESTORE_USERS
                config.list.api = API.TRASH_USERS
                config.list.path = PAGE.LIST_USERS
            }else{
                config.list.api = API.LIST_USERS
                config.softDelete.api = API.SOFT_DELETE_USERS
                config.update.path = PAGE.UPDATE_USERS
                config.create.path = PAGE.CREATE_USERS
                config.trash.path = PAGE.TRASH_USERS
            }
            config.titlePanel = 'Danh sách tài khoản'
            config.titleColumn = {
                email: 'Email',
                role_id: 'Quyền',
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


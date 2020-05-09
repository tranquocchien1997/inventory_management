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
            config.id = 'role_permission'
            if(this.trashMode){
                config.delete.api = API.DELETE_ROLE_PERMISSION
                config.restore.api = API.RESTORE_ROLE_PERMISSION
                config.list.api = API.TRASH_ROLE_PERMISSION
                config.list.path = PAGE.LIST_ROLE_PERMISSION
            }else{
                config.list.api = API.LIST_ROLE_PERMISSION
                config.softDelete.api = API.SOFT_DELETE_ROLE_PERMISSION
                config.update.path = PAGE.UPDATE_ROLE_PERMISSION
                config.create.path = PAGE.CREATE_ROLE_PERMISSION
                config.trash.path = PAGE.TRASH_ROLE_PERMISSION
            }
            config.titlePanel = 'Danh sách quyền'
            config.titleColumn = {
                name: 'Tên quyền',
                action: 'Thao tác'
            }

            this.configs = config
        },
        methods:{

        }
    }
</script>


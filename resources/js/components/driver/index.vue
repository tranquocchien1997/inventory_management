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
            config.id = 'driver'
            if(this.trashMode){
                config.delete.api = API.DELETE_DRIVER
                config.restore.api = API.RESTORE_DRIVER
                config.list.api = API.TRASH_DRIVER
                config.list.path = PAGE.LIST_DRIVER
            }else{
                config.list.api = API.LIST_DRIVER
                config.softDelete.api = API.SOFT_DELETE_DRIVER
                config.update.path = PAGE.UPDATE_DRIVER
                config.create.path = PAGE.CREATE_DRIVER
                config.trash.path = PAGE.TRASH_DRIVER
            }
            config.titlePanel = 'Danh sách người vận chuyển'
            config.titleColumn = {
                transport_type: 'Hình thức vận chuyển',
                transport_vendor: 'Đối tác',
                name: 'Tên người',
                phone: 'Điện thoại',
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


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
            config.id = 'customer'
            if(this.trashMode){
                config.delete.api = API.DELETE_CUSTOMER
                config.restore.api = API.RESTORE_CUSTOMER
                config.list.api = API.TRASH_CUSTOMER
                config.list.path = PAGE.LIST_CUSTOMER
            }else{
                config.list.api = API.LIST_CUSTOMER
                config.softDelete.api = API.SOFT_DELETE_CUSTOMER
                config.update.path = PAGE.UPDATE_CUSTOMER
                config.create.path = PAGE.CREATE_CUSTOMER
                config.trash.path = PAGE.TRASH_CUSTOMER
            }
            config.titlePanel = 'Danh sách khách hàng'
            config.titleColumn = {
                company_name: 'Tên công ty',
                contact_name: 'Tên người liên lạc',
                phone: 'Điện thoại',
                address: 'Địa chỉ',
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


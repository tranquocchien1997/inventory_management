<template>
    <div v-if="(hasPermission('detail') && type != 'create') || ( hasPermission('create') && type == 'create')" class="card card-primary card-outline">
        <Loading :show="loading"/>
        <div class="card-header">
            <h3 class="card-title">{{config.title}}</h3>
            <div class="card-tools">
                <bBtn
                    v-if="formEdit"
                    title=""
                    color="primary"
                    className="btn-default float-right btn-sm"
                    icon="fa fa-sync"
                    :onClick="reloadReference"
                    configStyle="margin-left: 10px" />

                <bBtn
                    v-if="typeView == 'update' && hasPermission('edit')"
                    :title="formEdit ? 'cancelUpdateTitle' : 'updateTitle'"
                    :color="formEdit ? 'default' : 'primary'"
                    className="float-right btn-sm"
                    icon="fa fa-edit"
                    :onClick="changeModeForm"
                    configStyle="margin-left: 10px"/>

                <bBtn
                    v-if="isGeneral"
                    title="Xoá"
                    color="danger"
                    className="float-right btn-sm"
                    configStyle="margin-left: 10px"
                    icon="fa fa-trash"
                    :onClick="deleteData" />

                <div v-if="isGeneral" class="float-right">
                    <bBtn
                        v-if="typeView == 'create'"
                        className="float-right btn-sm"
                        configStyle="margin-left: 10px"
                        title="createTitle"
                        color="primary"
                        :onClick="create"/>

                    <bBtn
                        v-else-if="formEdit"
                        title="updateTitle"
                        className="float-right btn-sm"
                        configStyle="margin-left: 10px"
                        color="primary"
                        :onClick="update"/>

                    <bBtn
                        v-if="updatePath && id"
                        className="float-right btn-sm"
                        configStyle="margin-left: 10px"
                        title="Chi tiết"
                        color="warning"
                        :onClick="() => { $router.push({
                            path: helper.parseFullPathToShortPath(updatePath),
                            query: {id : id }
                        }) }"/>
                </div>
            </div>
        </div>
        <!-- /.card-body -->
        <div v-if="showForm" class="card-body">
            <div class="row">
                <div v-for="item in configModel" :class="item.type == 'textArea' ? 'col-md-6 form-group' : 'col-md-3 form-group'">
                    <InputField v-if="item" :item="item" :model="model" :data="config.getDropdownField(item)"/>
                </div>
            </div>

            <div class="card">
                <div class="row">
                    <div class="col-md-12">
                        <h5 style="padding: 20px">Số lượng còn lại chưa chọn: {{remainQuantity}}</h5>
                    </div>
                    <div class="col-md-12" style="padding: 20px">
                        <table class="table table-bordered table-inventory" >
                            <thead>
                            <tr>
                                <th>Mã kho</th>
                                <th>Tên kho</th>
                                <th>Tồn kho ban đầu (tấn)</th>
                                <th>Số lượng xuất (tấn)</th>
                                <th>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in listsInventory">
                                    <td>{{item.code}}</td>
                                    <td>{{item.name}}</td>
                                    <td>{{item.quantity_business.toLocaleString()}}</td>
                                    <td>
                                        <b-telerik-numberic
                                            :disabled="!formEdit ? true : item.disabled"
                                            class-name="form-control"
                                            null-placeholder="-"
                                            placeholder=""
                                            org-placeholder=""
                                            label=""
                                            v-model="item.qty_export"
                                            :isDecimalNumber="true"
                                            :decimalNumbers=3 />
                                        {{ item.quantity_business - item.qty_export < 0 ? 'Vượt quá số tồn kho' : '' }}
                                    </td>
                                    <td>
                                        <bBtn
                                            v-if="item.disabled"
                                            className="btn-sm"
                                            title="Xoá"
                                            color="danger"
                                            :onClick="() => {softDeleteRecord({
                                                id: $route.query.id,
                                                inventory: item.id
                                            })}"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
        <!-- /.card-body -->
        <div v-if="formEdit && !isGeneral && hasPermission('edit')" class="card-footer">
            <bBtn v-if="typeView == 'create'" title="createTitle" color="primary" :onClick="create"/>
            <bBtn v-else title="updateTitle" color="primary" :onClick="update"/>
            <bBtn v-if="listPath" title="cancelTitle" color="primary" className="btn-default float-right" :link="helper.parseFullPathToShortPath(listPath)"/>
        </div>

    </div>
</template>

<script>
    import MixinForm from '../configs/MixinForm'
    import Loading from "../common/loading";

    export default {
        mixins: [MixinForm],
        components: {
            Loading
        },
        props: ['type', 'config', 'mode','setData', 'data'],
        data() {
            return {
                configModel: [],
                model: {},
                createApi: '',
                updateApi: '',
                softDeleteApi: '',
                commonDataApi: '',
                listPath: '',
                updatePath: '',
                referenceApi: '',
                id: null,
                typeView: null,
                moduleId: this.config.id,
                inventorySelected: null,
                listsInventory: [],
                updated: false,
                statusSubmit: true
            }
        },
        created() {

            let config = this.config

            this.createApi = config.createApi
            this.commonDataApi = config.commonDataApi
            this.referenceApi = config.referenceApi
            this.softDeleteApi = config.softDeleteApi
            this.listPath = config.listPath
            this.updatePath = config.updatePath
            this.configModel = JSON.parse(JSON.stringify(config.modelField))
            this.typeView = this.type
            this.model = this.getModelByConfigModel(this.configModel)

            if(this.data && this.data.id){
                this.id = this.data.id
            }
        },
        computed: {
            isGeneral: function () {
                return this.mode == 'general'
            },
            remainQuantity: function () {
                let qty = 0
                this.listsInventory.forEach(item => {
                    if (item.qty_export){
                        qty += parseFloat(item.qty_export)
                    }
                })

                if (parseFloat(this.model.quantity - qty) < 0) {
                    this.statusSubmit = false
                    return 'Vượt mức số lượng HĐ'
                }

                this.statusSubmit = true

                return this.helper.formatWeight(parseFloat(this.model.quantity - qty))
            }
        },
        async mounted() {
            await this.reloadReference()

            if((this.typeView == 'update' && this.$route.query.id) || (this.id && this.isGeneral)){
                this.prepareDataCommon()
                this.changeModeForm()
            }else{
                this.loadingArc()

                setTimeout(() => { this.loadingDone() }, 100)
            }

            if (this.isGeneral && this.data){
                this.model = {...this.model, ...this.data.model}
            }

        },
        methods: {
            getParamsCommon(){
                return {
                    id: this.id ? this.id : this.$route.query.id
                }
            },
            afterGetDataCommon(success){

                let res = success.data.data

                if(res){
                    Object.keys(this.model).forEach((item) => {
                        this.model[item] = res[item]
                    })
                }

                if (this.isGeneral && this.data){
                    this.model = {...this.model, ...this.data.model}
                }

                let inventorySelected = JSON.parse(res.inventory_selected), inventory

                inventorySelected.forEach(item => {
                    inventory = this.listsInventory.find(elm => elm.id == item.id)
                    inventory.qty_export = item.qty_export
                    inventory.disabled = true
                })
                this.formatDateSubmit('YYYY-MM-DD HH:mm:ss', 'DD/MM/YYYY')
            },
            validateCreation(){
                if (!this.statusSubmit){
                    toastr.error('Vượt mức số lượng HĐ');
                    return false
                }
                this.setModelInventorySelected()
                return this.validateModel()
            },

            createdCompletely(response){
                const res = response.data

                if(res.status == 0){
                    toastr.success(this.config.createNoti);

                    if (this.listPath){
                        this.$router.push(this.helper.parseFullPathToShortPath(this.listPath))
                    }else{

                        this.typeView = 'update'
                        this.id = res.data

                        if(this.setData){
                            this.setData({
                                idForm: this.config.id,
                                id: this.id,
                                action: 'create',
                                ...this.data
                            })
                        }

                        this.prepareDataCommon()

                        this.changeModeForm()
                    }
                }else {
                    toastr.error(res.message);
                }
            },

            validateUpdate(){
                if (!this.statusSubmit){
                    toastr.error('Vượt mức số lượng HĐ');
                    return false
                }
                this.setModelInventorySelected()
                return this.validateModel()
            },
            async updatedCompletely(success){
                const res = success.data

                if(res.status != 0){
                    return toastr.error(res.message);
                }
                toastr.success(this.config.updateNoti);

                if(this.setData){
                    this.setData({
                        idForm: this.config.id,
                        id: this.id,
                        action: 'update',
                        ...this.data
                    })
                }

                await this.reloadReference()
                this.prepareDataCommon()
                this.changeModeForm()
            },
            reloadReference(){
                this.getReference()
            },
            afterGetReference(success){
                reference = {...reference, ...success.data.data}

                this.listsInventory = JSON.parse(JSON.stringify(success.data.data.inventory)).map(item => {
                    item.qty_export = null
                    return item
                })

                if(this.setData){
                    this.setData({
                        idForm: this.config.id,
                        id: this.id,
                        action: 'loadReference',
                        ...this.data
                    })
                }

                this.forceReRenderComponent()
            },
            beforeUpdate(){
                this.updateApi = this.config.updateApi + '?id=' + this.getParamsCommon().id
                this.formatDateSubmit()
            },
            beforeCreate(){
                this.formatDateSubmit()
            },
            deleteData(){
                if(this.id){
                    this.softDeleteRecord(this.id)
                }else{
                    this.deletedCompletely()
                }
            },
            async deletedCompletely(){
                toastr.success('Xoá thành công!');

                this.listsInventory = JSON.parse(JSON.stringify(reference.inventory)).map(item => {
                    item.qty_export = null
                    return item
                })
                await this.reloadReference()
                this.prepareDataCommon()

                if(this.setData){
                    this.setData({
                        idForm: this.config.id,
                        id: this.id,
                        action: 'delete',
                        ...this.data
                    })
                }
            },
            calculateTotalAmountContract(){
                // this.model.total_amount = this.model.quantity * this.model.amount
            },
            setModelInventorySelected(){
                let modelInventorySelected = []

                this.listsInventory.forEach(item => {
                    if (parseFloat(item.qty_export) > 0){
                        modelInventorySelected.push({
                            id: item.id,
                            qty_export: item.qty_export,
                            disabled: item.disabled
                        })
                    }
                })

                this.model.inventory_selected = JSON.stringify(modelInventorySelected)
            },
        },
        watch: {
            'model.unit_amount': function(value) {
                if (!value){
                    return
                }
                const unit = reference.unitAmount.find(item => item.id == value)

                const fields = [
                    'Đơn giá',
                    'Tổng giá trị hợp đồng'
                ]

                let field

                fields.forEach(item => {
                    field = this.configModel.find(elm => elm.initTitle == item)

                    if (field){
                        field.title = field.initTitle + ` (${unit.display_value})`
                    }
                })
            },
            'model.amount': function () {
                this.calculateTotalAmountContract()
            },
            'model.quantity': function () {
                this.calculateTotalAmountContract()
            }
        }
    };
</script>
<style>
    .table-inventory td label {
        display: none !important;
    }
</style>

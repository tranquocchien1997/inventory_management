<template>
    <div class="card card-primary card-outline">
         <Loading :show="loading"/>
        <div class="card-header">
            <h3 class="card-title">{{config.title}}</h3>
            <div class="card-tools">
                <bBtn v-if="formEdit" title="" color="primary" className="btn-default float-right btn-sm" icon="fa fa-sync" :onClick="reloadReference" configStyle="margin-left: 10px"/>
                <bBtn v-if="type == 'update'" :title="formEdit ? 'cancelUpdateTitle' : 'updateTitle'" :color="formEdit ? 'default' : 'primary'" className="float-right btn-sm" icon="fa fa-edit" :onClick="changeModeForm" />
            </div>
        </div>
        <!-- /.card-body -->
        <div v-if="showForm" class="card-body">
            <div class="row">
                <div class="col-md-12 form-group">
                    <div class="col-md-4">
                        <b-text-field
                            :disabled="!formEdit"
                            v-model="nameRole"
                            className="form-control"
                            null-placeholder="-"
                            org-placeholder="Tên quyền"
                            placeholder="Tên quyền"
                            label="Tên quyền" />
                    </div>
                </div>
                <div v-for="module in modules" class="col-md-3 form-group">
                    <div class="title-checkbox">
                        <input type="checkbox" :id="module.value" v-model="checkModule[module.value]" :disabled="!formEdit" @change="handleCheckModule(module.value)">
                        <label :for="module.value">{{ module.display_value }}</label>
                    </div>
                    <div v-for="(item,index) in methods">
                        <input type="checkbox" :id="module.value + '_' + index" v-model="model[module.value][index]" :disabled="!formEdit">
                        <label :for="module.value + '_' + index">{{ item }}</label>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.card-body -->
        <div v-if="formEdit" class="card-footer">
            <bBtn v-if="type == 'create'" title="createTitle" color="primary" :onClick="create"/>
            <bBtn v-else title="updateTitle" color="primary" :onClick="update"/>
            <bBtn title="cancelTitle" color="primary" className="btn-default float-right" :link="helper.parseFullPathToShortPath(listPath)"/>
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
        props: ['type', 'config'],
        data() {
            return {
                configModel: [],
                model: {},
                createApi: '',
                updateApi: '',
                commonDataApi: '',
                listPath: '',
                referenceApi: '',
                modules: MODULE,
                methods: METHOD,
                checkModule: [],
                nameRole: '',
                moduleId: this.config.id
            }
        },
        created() {
            this.updateApi = this.config.updateApi + '?id=' + this.$route.query.id
            this.createApi = this.config.createApi
            this.commonDataApi = this.config.commonDataApi
            this.referenceApi = this.config.referenceApi
            this.listPath = this.config.listPath

            let model = [], arrModule = []
            this.modules.forEach((module) => {
                let arr = [], data = module.value
                arrModule[module.value] = false
                Object.keys(this.methods).forEach((method) => {
                    arr[method] = false
                })

                model[data] = arr
            })

            this.model = model
            this.checkModule = arrModule
        },
        mounted() {
            this.reloadReference()

            if(this.type == 'update'){
                this.prepareDataCommon()
                this.changeModeForm()
            }

        },
        methods: {
            getParamsCommon(){
                return {
                    id: this.$route.query.id
                }
            },
            afterGetDataCommon(success){
                let res = success.data.data

                res.forEach((item) => {
                    this.nameRole = item.name
                    this.model[item.module][item.method] = true
                })

            },
            createdCompletely(success){
                toastr.success(this.config.createNoti);
                this.prepareDataCommon()
                this.$router.push(this.helper.parseFullPathToShortPath(this.listPath))
            },
            updatedCompletely(success){
                toastr.success(this.config.updateNoti);
                this.prepareDataCommon()
                this.changeModeForm()
            },
            reloadReference(){
                this.getReference()
            },
            afterGetReference(success){
                // toastr.success('Lảm mới thông tin thành công!');
                reference = success.data.data
                this.forceReRenderComponent()
            },

            handleCheckModule(module){
                const status = this.checkModule[module]
                Object.keys(this.model[module]).forEach((value) => {
                    this.model[module][value] = status
                })

                this.$nextTick(() => {
                    this.forceReRenderComponent()

                })
            },
            getParams(){
                let params = []

                Object.keys(this.model).forEach((module) => {
                    Object.keys(this.model[module]).forEach((value) => {

                        if (this.model[module][value]) {
                            params.push({
                                method: value,
                                module: module
                            })
                        }
                    })
                })

                return {params: params, _token: this.token, name: this.nameRole}
            },
            create() {
                if (!this.validateCreation()) return

                this.beforeCreate()
                this.loadingArc();
                // this.model._token = this.token
                this.$nextTick(()=>{
                    let requestApi = this.$http.post(this.createApi, this.getParams() , {});
                    return requestApi.then(
                        (success) => {
                            this.loadingDone()
                            this.createdDone(success)
                            this.createdCompletely(success)
                            this.afterCreated(success)
                        },
                        (response) => {

                            this.createError(response)
                            this.afterCreated(response)
                        }
                    ).then(function(){

                    })
                })
            },
            getPayloadUpdate(){
                return this.getParams();
            },
            update() {
                if (!this.validateUpdate()) return
                this.beforeUpdate()
                this.loadingArc();
                // this.model._token = this.token
                this.$nextTick(()=>{
                    let requestApi      = this.$http.post(this.updateApi, this.getPayloadUpdate() )
                    return requestApi.then(
                        (success) => {
                            this.loadingDone()
                            this.updatedDone(success)
                            this.updatedCompletely(success)
                            this.afterUpdated(success)
                        },
                        (response) => {
                            if(response.status === 401)
                                toastr.error('Permission Denied.')
                            this.updateError(response)
                            this.afterUpdated(response)
                        }
                    ).then(function(){

                    })
                })
            },
        },
    };
</script>
<style>
    .title-checkbox label {
        color: red;
        font-size: 20px;
    }
    label:not(.form-check-label):not(.custom-file-label) {
         font-weight: normal;
    }
</style>

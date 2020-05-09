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
                <div v-for="item in configModel" class="col-md-4 form-group">
                    <InputField v-if="item" :item="item" :model="model" :data="config.getDropdownField(item)"/>
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
                referenceApi: ''
            }
        },
        created() {
            this.updateApi = this.config.updateApi + '?id=' + this.$route.query.id
            this.createApi = this.config.createApi
            this.commonDataApi = this.config.commonDataApi
            this.referenceApi = this.config.referenceApi
            this.listPath = this.config.listPath
            this.configModel = this.config.modelField
            this.model = this.getModelByConfigModel(this.configModel)
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

                Object.keys(this.model).forEach((item) => {
                    this.model[item] = res[item]
                })
            },
            validateCreation(){
                return this.validateModel()
            },
            createdCompletely(response){

                if(!response.body.data){
                    return toastr.error('Email đã tồn tại');
                }
                toastr.success(this.config.createNoti);
                this.changeModeForm()
            },

            validateUpdate(){
                return this.validateModel()
            },
            updatedCompletely(success){
                toastr.success(this.config.updateNoti);
                this.changeModeForm()
            },
            reloadReference(){
                this.getReference()
            },
            afterGetReference(success){
                reference = success.data.data
                this.forceReRenderComponent()
            },
            beforeCreate(){
                this.model.password = Math.random().toString(36).substring(7);
            },
        }
    };
</script>

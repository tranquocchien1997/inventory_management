<template>
    <div class="card card-primary card-outline">
        <Loading :show="loading"/>
        <div class="card-header">
            <h3 class="card-title">Tạo báo cáo</h3>
        </div>
        <!-- /.card-body -->
        <div v-if="showForm" class="card-body">
            <div class="row">
                <div v-for="item in configModel" class="col-md-4 form-group">
                    <InputField v-if="item" :item="item" :model="model" :data="getDropdownField(item)"/>
                </div>
            </div>
        </div>
        <!-- /.card-body -->
        <div v-if="formEdit" class="card-footer">
            <bBtn title="createTitle" color="primary" :onClick="create"/>
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

            this.createApi = API.CREATE_REPORT

            this.configModel = [
                {
                    title: 'Loại báo cáo',
                    model: 'type',
                    type: 'dropdown',
                    data: [],
                    required: true
                },
                // {
                //     title: 'Từ ngày',
                //     model: 'from_date',
                //     type: 'date',
                //     required: true
                // },
                {
                    title: 'Đến hết ngày',
                    model: 'to_date',
                    type: 'date',
                    defaultValue: moment().format('DD/MM/YYYY')
                },

            ]

        },
        mounted() {
            this.model = this.getModelByConfigModel(this.configModel)
        },
        methods: {
            create(){
               if (this.validateModel()){
                   let route = this.$router.resolve({path: this.helper.parseFullPathToShortPath(API.CREATE_REPORT), query: this.model});
                   window.open(route.href, '_blank');
               }
            },
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
                const res = response.data.data

                if(res === true){
                    toastr.success(this.config.createNoti);
                    this.$router.push(this.helper.parseFullPathToShortPath(this.listPath))
                }else {
                    toastr.error(res.msg);

                }
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
            getDropdownField(item) {
                if (item.model == 'type'){
                    return [
                        {
                            id: 1,
                            value: 'Theo dõi thực hiện hợp đồng'
                        },
                        {
                            id: 2,
                            value: 'Chi tiết phải giao'
                        },
                        {
                            id: 3,
                            value: 'Báo cáo nhanh tồn kho'
                        }
                    ]
                }
            }
        }
    };
</script>

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
            <div v-if="showInputNote" class="row">
                <div class="col-md-12 form-group">
                    <h4>Sắp xếp tứ thự kho</h4>
                    <table class="table table-sm col-md-6">
                        <thead>
                        <tr>
                            <th>Kho</th>
                            <th>Thao tác</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in inventorySort">
                                <td>{{item.id}}</td>
                                <td>
                                    <button
                                        @click="goUp(item.index)"
                                        type="button"
                                        class="btn btn-xs btn-default"
                                        title="Lên">
                                        <i class="fas fa-caret-up"></i>
                                    </button>
                                    <button
                                        @click="goDown(item.index)"
                                        type="button"
                                        class="btn btn-xs btn-default"
                                        title="Xuống">
                                        <i class="fas fa-caret-down"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="col-md-12 row">
                    <div class="col-md-12 form-group">
                        <h4>Ghi chú kho nhà máy</h4>
                    </div>
                    <div v-for="item in inventoryfields" class="col-md-3 form-group">
                        <InputField v-if="item" :item="item" :model="inventory" :data="getDropdownField(item)"/>
                    </div>
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
                referenceApi: '',
                inventory: {},
                inventorySort: []
            }
        },
        computed: {
            showInputNote(){
                if (this.model['type'] == 3){
                    return true
                }
                return  false
            },
            inventoryfields(){
                return reference.inventory.filter(item => item.type != ENROL_INVENTORY_TYPE_ID).map(item => {
                    return {
                        type: 'textArea',
                        model: item.id,
                        title: item.name
                    }
                })
            },
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


            let data = [],newData = []


            data = reference.inventory.filter(item => item.type == ENROL_INVENTORY_TYPE_ID).map((item, index) => {
                return {
                    id: item.address,
                    title: item.name,
                    index: index
                }
            })

            data.forEach((item, index) => {
                newData[item.id] = item
            })

            console.log(newData)
            this.inventorySort = Object.values(newData)
            // this.inventorySort = JSON.parse(JSON.stringify(data))

        },
        mounted() {
            this.model = this.getModelByConfigModel(this.configModel)

            this.inventory = this.getModelByConfigModel(this.inventoryfields)


        },
        methods: {
            create(){
               if (this.validateModel()){
                   this.model.inventory = JSON.stringify(this.inventory)

                   this.model.sort = JSON.stringify(this.inventorySort.map(item => { return item.id}))
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
            },
            goUp(index){
                this.changeIndex(index, 'up')
            },
            goDown(index){
                this.changeIndex(index, 'down')

            },
            changeIndex(currentIndex, type){
                const lastIndex = this.inventorySort.length - 1

                let newIndex

                if (type == 'up'){
                    newIndex = currentIndex == 0 ? 0 : currentIndex - 1
                }else{
                    newIndex = currentIndex == lastIndex ? lastIndex : currentIndex + 1
                }


                let currentItem = this.inventorySort.find(item => item.index == currentIndex)

                let changeItem = this.inventorySort.find(item => item.index == newIndex)

                currentItem.index = newIndex
                changeItem.index = currentIndex

                this.inventorySort = this.inventorySort.sort(function (a, b) {
                    return a.index - b.index;
                });
            },

        }
    };
</script>

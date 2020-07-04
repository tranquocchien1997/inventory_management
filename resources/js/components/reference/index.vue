<template>
    <div class="card card-primary card-outline">
        <Loading :show="loading"/>
        <div class="card-header">
            <h3 class="card-title">Cài đặt danh sách tuỳ chọn</h3>
        </div>
        <!-- /.card-body -->
        <div v-if="showForm" class="card-body">
            <div class="row">
                <div class="col-md-3 form-group">
                    <InputField :item="listsOption" :model="model" :data="referenceType"/>
                </div>

                <div v-if="listsReference.length" class="col-md-12 pl-0">
                    <div class="row form-group">
                        <bBtn
                            title="Thêm"
                            color="primary"
                            config-style="margin-left:15px"
                            :onClick="addReference" />
                        <bBtn
                            title="Lưu"
                            color="danger"
                            config-style="margin-left:10px;"
                            :onClick="update" />
                    </div>
                    <div
                        class="card card-primary card-outline col-md-3"
                        style="padding-bottom: 10px; margin-left: 8px;">

                        <div v-for="item in listsReference">
                            <b-text-field
                                v-model="item.display_value"
                                className="form-control"
                                null-placeholder="-"/>
                        </div>
                    </div>

                </div>
            </div>
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
        data() {
            return {
                configModel: [],
                model: {
                    type: null
                },
                createApi: '',
                updateApi: API.UPDATE_REFERENCE,
                commonDataApi: API.LIST_REFERENCE,
                listPath: '',
                referenceApi: API.LIST_REFERENCE_TYPE,
                listsOption: {},
                referenceType: [],
                listsReference: []
            }
        },
        created() {
            this.listsOption = {
                title: 'Chọn danh sách',
                model: 'type',
                type: 'dropdown',
                data: [],
            }
        },
        mounted() {
            this.reloadReference()
        },
        methods: {
            reloadReference(){
                this.getReference()
            },
            afterGetReference(success){
                reference = success.data.data

                this.referenceType = success.data.data.referenceType.map(item => {
                    return {id: item, value: item.toUpperCase()}
                })

                this.forceReRenderComponent()
            },
            getParamsCommon(){
                return {
                    type: this.model.type
                }
            },
            afterGetDataCommon(res){
                this.listsReference = res.data.data.list
            },
            addReference(){
                this.listsReference.push({
                    display_value: null
                })
            },
            getPayloadUpdate(){
                return {
                    lists: this.listsReference.map(item => {
                        return {
                            id: item.id,
                            display_value: item.display_value,
                        }
                    }),
                    _token: this.token,
                    type: this.model.type
                }
            },
            updatedCompletely(){
                toastr.success('Cập nhật danh sách tuỳ chọn thành công!');
                this.prepareDataCommon()
            }
        },
        watch: {
            'model.type': function (value) {
                this.prepareDataCommon()
            }
        }
    };
</script>

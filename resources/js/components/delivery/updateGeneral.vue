<template>
    <div>
        <Delivery :setData="setData"/>

        <div class="card card-primary card-outline">
            <Loading :show="loading.action"/>
            <div class="card-header">
                <h3 class="card-title">Phân công vận chuyển</h3>
                <div class="card-tools">
                    <bBtn
                        v-if="hasPermission('create', 'delivery_transport')"
                        color='primary'
                        className="float-right btn-sm"
                        icon="fa fa-plus"
                        :onClick="addTransport"
                        configStyle="margin-left: 10px" />

                    <bBtn
                        :color="viewTransport ? 'default' : 'primary'"
                        className="float-right btn-sm"
                        :icon="viewTransport ? 'fa fa-angle-up' : 'fa fa-angle-down'"
                        :onClick="() => { viewTransport = !viewTransport }"
                        configStyle="margin-left: 10px" />
                </div>
            </div>
            <!-- /.card-body -->
            <div class="card-body" :style="viewTransport ? 'display:block' : 'display: none'">
                <div class="row">
                    <Transport
                        v-for="(item, key) in transportLists"
                        :key='key'
                        mode="general"
                        :data="item"
                        :setData="setData" />
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import Delivery from './update';
    import Transport from '../deliveryTransport/update'
    import MixinForm from "../configs/MixinForm";
    import Loading from "../common/loading";

    export default {
        mixins: [MixinForm],
        components: {
            Transport,
            Loading,
            Delivery
        },
        data(){
            return {
                transportLists: [],
                deliveryId: null,
                getTransportApi: API.GET_TRANSPORT_BY_DELIVERY,
                viewTransport: true,
                loading: false
            }
        },
        mounted() {
            if(this.$route.query.id){
                this.prepareDataCommon()
            }
        },
        methods: {
            setData(data){

                if(data.action == 'delete'){
                    this.loadingArc()

                    setTimeout(() => {
                        this.loadingDone()
                        if(data.idForm == 'delivery_transport') {
                            this.transportLists = this.transportLists.filter((item) => item.elementId != data.elementId)
                        }
                    }, 500)

                }else if (data.action == 'create'){
                    if (data.idForm == 'delivery'){
                        this.deliveryId = data.id
                    }
                }

            },
            addTransport(id = null, type = 'create'){
                if (this.viewTransport == false){
                    this.viewTransport = true
                }
                this.transportLists.push({
                    id: id,
                    type: type,
                    elementId: Math.random().toString(36).substring(7),
                    model:{
                        delivery_id: this.deliveryId
                    }
                })
            },
            getParamsCommon(){
                return {
                    id: this.$route.query.id
                }
            },
            prepareDataCommon(){
                this.deliveryId = this.$route.query.id

                let _token = this.token
                this.$nextTick( () => {
                    return this.$http.post(this.getTransportApi,{_token, ...this.getParamsCommon()})
                        .then(
                            (success) => {
                                success.data.data.forEach((item) => {
                                    this.addTransport(item.id, 'update')
                                })
                            }
                        )
                })
            },
        }
    }
</script>

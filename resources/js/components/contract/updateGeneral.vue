<template>
    <div>
        <Contract :setData="setData"/>

        <div class="card card-primary card-outline">
            <Loading :show="loading.action"/>
            <div class="card-header">
                <h3 class="card-title">Phiếu kho</h3>
                <div class="card-tools">
                    <bBtn
                        v-if="hasPermission('create', 'action')"
                        color='primary'
                        className="float-right btn-sm"
                        icon="fa fa-plus"
                        :onClick="addAction"
                        configStyle="margin-left: 10px" />

                    <bBtn
                        :color="viewAction ? 'default' : 'primary'"
                        className="float-right btn-sm"
                        :icon="viewAction ? 'fa fa-angle-up' : 'fa fa-angle-down'"
                        :onClick="() => { viewAction = !viewAction }"
                        configStyle="margin-left: 10px" />
                </div>
            </div>
            <!-- /.card-body -->
            <div class="card-body" :style="viewAction ? 'display:block' : 'display: none'">
                <div class="row">
                    <Action
                        v-for="(item, key) in actionLists"
                        :key='key'
                        mode="general"
                        :data="item"
                        :setData="setData" />
                </div>
            </div>

        </div>

        <div class="card card-primary card-outline">
            <Loading :show="loading.delivery"/>
            <div class="card-header">
                <h3 class="card-title">Vận chuyển</h3>
                <div class="card-tools">
                    <bBtn
                        v-if="hasPermission('create', 'delivery')"
                        color='primary'
                        className="float-right btn-sm"
                        icon="fa fa-plus"
                        :onClick="addDelivery"
                        configStyle="margin-left: 10px" />

                    <bBtn
                        :color="viewDelivery ? 'default' : 'primary'"
                        className="float-right btn-sm"
                        :icon="viewDelivery ? 'fa fa-angle-up' : 'fa fa-angle-down'"
                        :onClick="() => { viewDelivery = !viewDelivery }"
                        configStyle="margin-left: 10px" />
                </div>
            </div>
            <!-- /.card-body -->
            <div class="card-body" :style="viewDelivery ? 'display:block' : 'display: none'">
                <div class="row">
                    <Delivery
                        v-for="(item, key) in deliveryLists"
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
    import Contract from './update';
    import Action from '../action/update'
    import Delivery from '../delivery/update'
    import MixinForm from "../configs/MixinForm";
    import Loading from "../common/loading";

    export default {
        mixins: [MixinForm],
        components: {
            Contract,
            Action,
            Loading,
            Delivery
        },
        data(){
            return {
                actionLists: [],
                deliveryLists: [],
                contractId: null,
                getActionApi: API.GET_ACTION_BY_CONTRACT,
                getDeliveryApi: API.GET_DELIVERY_BY_CONTRACT,
                viewAction: false,
                viewDelivery: false,
                loading: {
                    action: false,
                    delivery: false
                }
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
                    this.loadingArc(data.idForm)

                    setTimeout(() => {
                        this.loadingDone(data.idForm)
                        if(data.idForm == 'action'){
                            this.actionLists = this.actionLists.filter((item) => item.elementId != data.elementId)
                        }else if(data.idForm == 'delivery'){
                            this.deliveryLists = this.deliveryLists.filter((item) => item.elementId != data.elementId)
                        }
                    }, 500)

                }else if (data.action == 'create'){
                    if (data.idForm == 'contract'){
                        this.contractId = data.id
                    }
                }

            },
            addAction(id = null, type = 'create'){
                if(this.viewAction == false){
                    this.viewAction = true
                }
                this.actionLists.push({
                    id: id,
                    elementId: Math.random().toString(36).substring(7),
                    type: type,
                    model:{
                        action_type_id: id ? null : reference.actionType.find(item => item.value == 'xuat').id,
                        contract_id: this.contractId
                    }
                })
            },
            addDelivery(id = null, type = 'create'){

                if(this.viewDelivery == false){
                    this.viewDelivery = true
                }
                this.deliveryLists.push({
                    id: id,
                    elementId: Math.random().toString(36).substring(7),
                    type: type,
                    model:{
                        contract_id: this.contractId
                    }
                })

            },
            getParamsCommon(){
                return {
                    id: this.$route.query.id
                }
            },
            prepareDataCommon(){
                this.contractId = this.$route.query.id
                this.getActionByContract()
                this.getDeliveryByContract()
            },
            getActionByContract(){
                let _token = this.token
                this.$nextTick( () => {
                    return this.$http.post(this.getActionApi,{_token, ...this.getParamsCommon()})
                        .then(
                            (success) => {
                                success.data.data.forEach((item) => {
                                    this.addAction(item.id, 'update')
                                })
                            }
                        )
                })
            },
            getDeliveryByContract(){
                let _token = this.token
                this.$nextTick( () => {
                    return this.$http.post(this.getDeliveryApi,{_token, ...this.getParamsCommon()})
                        .then(
                            (success) => {
                                success.data.data.forEach((item) => {
                                    this.addDelivery(item.id, 'update')
                                })
                            }
                        )
                })
            },
            loadingArc(idForm){
                this.loading[idForm] = true
            },
            loadingDone(idForm){
                setTimeout(() => {
                    this.loading[idForm] = false
                }, 1000);
            }
        }
    }
</script>

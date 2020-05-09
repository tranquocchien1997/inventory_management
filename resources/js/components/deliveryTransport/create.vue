<template>
    <Form :type="data ? data.type : 'create'"  :config="getConfig" :mode="mode" :setData="setData" :data="data"/>
</template>

<script>
    import Form from "../common/form";
    import DeliveryTransportConfigForm from "../configs/modules/DeliveryTransportConfigForm"

    export default {
        props: [ 'mode','setData', 'data' ],
        components: {
            Form
        },
        data(){
            return {
                config: DeliveryTransportConfigForm
            }
        },
        computed: {
            getConfig: function () {
                if(this.mode == 'general'){
                    this.config.listPath = null
                }

                return this.config
            }
        }
    };
</script>

<template>
    <Form type="update" :config="getConfig" :mode="mode" :setData="setData" :data="data"/>
</template>

<script>
    import Form from "./form";
    import ContractConfigForm from "../configs/modules/ContractConfigForm"

    export default {
        props: [ 'mode', 'setData','data' ],
        components: {
            Form,
        },
        data(){
            return {
                config: ContractConfigForm
            }
        },
        computed: {
            getConfig: function () {
                if(this.mode == 'general'){
                    this.config.listPath = null
                }

                return this.config
            },
        }
    };
</script>

<template>
    <Form type="create" :config="getConfig" :mode="mode" :setData="setData"/>
</template>

<script>
    import Form from "./form";
    import ContractConfigForm from "../configs/modules/ContractConfigForm"

    export default {
        props: [ 'mode', 'setData' ],
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
                if(this.setData){
                    this.config.listPath = null
                }

                return this.config
            }
        }
    };
</script>

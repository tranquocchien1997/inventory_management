<template>
    <Form type="create" :config="getConfig" :mode="mode" :setData="setData"/>
</template>

<script>
    import Form from "../common/form";
    import TransportConfigForm from "../configs/modules/TransportConfigForm";

    export default {
        props: [ 'mode', 'setData' ],
        components: {
            Form,
        },
        data(){
            return {
                config: TransportConfigForm
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

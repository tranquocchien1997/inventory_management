<template>
    <Form :type="data ? data.type : 'create'"  :config="getConfig" :mode="mode" :setData="setData" :data="data"/>
</template>

<script>
    import Form from "../common/form";
    import ActionConfigModel from "../configs/modules/ActionConfigForm"

    export default {
        props: [ 'mode','setData', 'data' ],
        components: {
            Form
        },
        data(){
            return {
                config: ActionConfigModel
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

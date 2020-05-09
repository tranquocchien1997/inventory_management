<template>
    <Form type="create" :config="config"/>
</template>

<script>
    import Form from "../common/form";

    import CustomerConfigForm from "../configs/modules/CustomerConfigForm"

    export default {
        components: {
            Form
        },
        data(){
            return {
                config: CustomerConfigForm
            }
        }
    };
</script>

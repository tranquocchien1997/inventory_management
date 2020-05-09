<template>
    <Form type="update" :config="config"/>
</template>

<script>
    import Form from "../common/form";

    import TransportConfigForm from "../configs/modules/TransportConfigForm"

    export default {
        components: {
            Form
        },
        data(){
            return {
                config: TransportConfigForm
            }
        }
    };
</script>

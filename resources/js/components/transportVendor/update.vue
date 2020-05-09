<template>
    <Form type="update" :config="config"/>
</template>

<script>
    import Form from "../common/form";

    import TransportVendorConfigForm from "../configs/modules/TransportVendorConfigForm"

    export default {
        components: {
            Form
        },
        data(){
            return {
                config: TransportVendorConfigForm
            }
        }
    };
</script>

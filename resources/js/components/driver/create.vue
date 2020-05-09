<template>
    <Form type="create" :config="config"/>
</template>

<script>
    import Form from "../common/form";

    import DriverConfigForm from "../configs/modules/DriverConfigForm"

    export default {
        components: {
            Form
        },
        data(){
            return {
                config: DriverConfigForm
            }
        }
    };
</script>

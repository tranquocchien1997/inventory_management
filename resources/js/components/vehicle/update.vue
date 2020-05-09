<template>
    <Form type="update" :config="config"/>
</template>

<script>
    import Form from "../common/form";

    import VehicleConfigForm from "../configs/modules/VehicleConfigForm"

    export default {
        components: {
            Form
        },
        data(){
            return {
                config: VehicleConfigForm
            }
        }
    };
</script>

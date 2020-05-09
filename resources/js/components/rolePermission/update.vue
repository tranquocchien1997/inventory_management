<template>
    <Form type="update" :config="config"/>
</template>

<script>
    import Form from "./form";

    import RolePermissionConfigForm from "../configs/modules/RolePermissionConfigForm"

    export default {
        components: {
            Form
        },
        data(){
            return {
                config: RolePermissionConfigForm
            }
        }
    };
</script>

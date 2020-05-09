<template>
    <Form type="update" :config="config"/>
</template>

<script>
    import Form from "../common/form";

    import NotificationConfigModel from "../configs/modules/NotificationConfigModel"

    export default {
        components: {
            Form
        },
        data(){
            return {
                config: NotificationConfigModel
            }
        }
    };
</script>


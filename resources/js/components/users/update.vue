<template>
    <Form type="update" :config="config"/>
</template>

<script>
    import Form from "../common/form";

    import UsersConfigForm from '../configs/modules/UsersConfigForm'

    export default {
        components: {
            Form
        },
        data(){
            return {
                config: UsersConfigForm
            }
        }
    };
</script>

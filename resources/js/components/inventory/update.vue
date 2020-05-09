<template>
    <Form type="update" :config="config"/>
</template>

<script>
    import Form from "../common/form";

    import InventoryConfigForm from '../configs/modules/InventoryConfigForm'

    export default {
        components: {
            Form
        },
        data(){
            return {
                config: InventoryConfigForm
            }
        }
    };
</script>

<template>
    <div v-if="show" class="overlay">
        <i class="fas fa-3x fa-sync-alt fa-spin"></i>
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>

<style scoped>
    .overlay {
        background: white !important;
        opacity: 0.9;
    }
</style>

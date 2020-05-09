<template>

    <button type="button" :class="'btn btn-' + color + ' ' + className" @click="handleClick()" :style="configStyle ? configStyle : ''">
        <i v-if="icon" :class="icon"></i>
        {{titleView}}
    </button>

</template>

<script>
    export default {
        props: ['title', 'onClick', 'color', 'className','link','icon','configStyle'],
        computed: {
            titleView: function(){
                switch (this.title) {
                    case "createTitle":
                        return 'Tạo mới'
                    case "cancelTitle":
                        return "Quay về"
                    case "updateTitle":
                        return 'Cập nhật'
                    case "cancelUpdateTitle":
                        return "Huỷ cập nhật"
                    default:
                        return  this.title
                }

            },
        },
        methods: {
            handleClick(){
                if(this.link){
                    this.$router.push(this.link)
                }else if(this.onClick){
                    this.onClick()
                }


            }
        }

    }
</script>


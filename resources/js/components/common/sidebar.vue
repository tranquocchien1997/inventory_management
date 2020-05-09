<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link">
            <img :src="logo" class="brand-image elevation-3"
                 >
            <span class="brand-text font-weight-light">FOCOCEV</span>

        </a>

        <!-- Sidebar -->
        <div class="sidebar">

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column " data-widget="treeview" role="menu" data-accordion="false">

                    <li v-for="(item, key) in menu"
                        :key="key"
                        :class="getClassMenu(item)"
                        v-if="item.status">

                        <a :href="item.path"
                            :class="item.active ? 'nav-link active' : 'nav-link'  ">

                            <i :class="'nav-icon ' + item.icon "></i>

                            <p>
                                {{item.title}}

                                <i v-if="item.child" class="fas fa-angle-left right"></i>

                            </p>
                        </a>

                        <ul v-if="item.child" class="nav nav-treeview">
                            <li v-for="(subMenu, subKey) in item.child" :key="subKey" class="nav-item" v-if="subMenu.status">
                                <a :href="subMenu.path" :class="subMenu.active ? 'nav-link active' : 'nav-link'">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>{{subMenu.title}}</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

</template>

<script>

    import configSidebar from '../configs/sidebar'
    import * as Helper from '../configs/Helper'

    export default {
        name: "sidebar",
        data(){
            return {
                config: configSidebar,
                logo: LOGO,
                helper: Helper
            }
        },
        computed: {
            menu(){

                let menu = this.config.menu;
                for (let i = 0; i < menu.length; i++) {
                    if(menu[i]['path'] != '#'){
                        if(this.$route.path == menu[i]['path']){
                            menu[i]['active'] = true;
                        }else{
                            menu[i]['active'] = false;
                        }

                        menu[i]['status'] = this.helper.hasPermission(menu[i]['id'])

                    }else{
                        for (let j = 0; j < menu[i].child.length; j++) {
                            if(this.$route.path == menu[i].child[j]['path']){
                                menu[i].child[j]['active'] = true;
                                menu[i]['active'] = true;
                            }else{
                                menu[i].child[j]['active'] = false;
                            }

                            menu[i].child[j]['status'] = this.helper.hasPermission(menu[i].child[j]['id']);
                        }

                        menu[i]['status'] = menu[i].child.find(item => item.status) ? true : false
                    }

                }

                return menu
            }
        },
        mounted() {
            // console.log(this.$route)
            // this.$nextTick(() => {
            //     setTimeout(function(){
                    $('body').addClass('sidebar-collapse')
            //     }, 1000);
            // })
        },
        methods: {
            getClassMenu(item){
                let str = 'nav-item ';

                if(item.child){
                    str += ' has-treeview'
                }

                if(item.active){
                    str += ' menu-open'
                }

                // console.log(this.$route)
                // console.log(window.location.host)
                return str
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link toggle-sidebar" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i>                {{$route.meta.title}}
                </a>
            </li>

        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">

            <li class="nav-item">
                <a class="nav-link" href="#" @click="logout">
                    Đăng xuất
                    <i class="fas fa-sign-out-alt"></i>
                </a>
            </li>
        </ul>
    </nav>
    <!-- /.navbar -->
</template>

<script>
    import * as Helper from "../configs/Helper";

    export default {
        name: "navbar",
        data() {
            return {
                token: $('meta[name="csrf-token"]').attr('content'),
            }
        },
        methods: {
            logout(){
                let requestApi = this.$http.post(API.LOGOUT, {_token: this.token });
                return requestApi.then(
                    (success) => {
                        location.reload();
                    },
                    (response) => {

                    }
                ).then(function () {

                })
            }
        }
    }
</script>

<style scoped>

</style>

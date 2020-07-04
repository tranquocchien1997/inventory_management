<template>
    <div class="wrapper">

        <Navbar/>

        <Sidebar/>

        <div class="content-wrapper" style="padding-top:15px">

<!--            <HeaderContent />-->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">

                    <router-view/>

                </div>
            </section>
            <!-- /.content -->
        </div>

        <FooterContent/>

<!--        <ControlSidebar />-->
    </div>
    <!-- ./wrapper -->
</template>

<script>
    import Navbar from "./common/navbar";
    import Sidebar from "./common/sidebar";
    import HeaderContent from "./common/headerContent";
    import FooterContent from "./common/footerContent";
    import ControlSidebar from "./common/controlSidebar";

    export default {
        components: {ControlSidebar, FooterContent, HeaderContent, Sidebar, Navbar},
        mounted() {
            // console.log('Component mounted.')
        }
    }
</script>

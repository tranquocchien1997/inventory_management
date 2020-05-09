
<!-- jQuery -->
<script src="{{assetTemplate('plugins/jquery/jquery.min.js')}}"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{assetTemplate('plugins/jquery-ui/jquery-ui.min.js')}}"></script>
<script>
    $.widget.bridge('uibutton', $.ui.button)
</script>
<script src="{{assetTemplate('plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{assetTemplate('plugins/moment/moment.min.js')}}"></script>
<script src="{{assetTemplate('plugins/daterangepicker/daterangepicker.js')}}"></script>
<script src="{{assetTemplate('dist/js/adminlte.js')}}"></script>
<script src="{{assetTemplate('dist/js/demo.js')}}"></script>
<script src="{{assetTemplate('plugins/toastr/toastr.min.js')}}"></script>

{{--@if(Session::has('status'))--}}
{{--    <script type="text/javascript">--}}
{{--        toastr.info("{{ session("status") }}");--}}
{{--    </script>--}}
{{--@endif--}}


<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-textdirection="ltr" class="loading">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Robust admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, robust admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="PIXINVENT">
    
    <title>{{ config('app.name', 'Laravel') }}</title>
    
    <link rel="apple-touch-icon" sizes="60x60" href=" {{ url('robust/app-assets/images/ico/apple-icon-60.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href=" {{ url('robust/app-assets/images/ico/apple-icon-76.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href=" {{ url('robust/app-assets/images/ico/apple-icon-120.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href=" {{ url('robust/app-assets/images/ico/apple-icon-152.png') }}">
    <link rel="shortcut icon" type="image/x-icon" href=" {{ url('robust/app-assets/images/ico/favicon.ico') }}">
    <link rel="shortcut icon" type="image/png" href=" {{ url('robust/app-assets/images/ico/favicon-32.png') }}">
    
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <!-- BEGIN VENDOR CSS-->
    <link rel="stylesheet" type="text/css" href=" {{ url('robust/app-assets/css/bootstrap.css') }}">
    <!-- font icons-->
    <link rel="stylesheet" type="text/css" href=" {{ url('robust/app-assets/fonts/icomoon.css') }}">
    <link rel="stylesheet" type="text/css" href=" {{ url('robust/app-assets/fonts/flag-icon-css/css/flag-icon.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('robust/app-assets/vendors/css/sliders/slick/slick.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('robust/app-assets/vendors/css/extensions/pace.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('robust/app-assets/vendors/css/forms/icheck/icheck.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('robust/app-assets/vendors/css/forms/icheck/custom.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('robust/app-assets/vendors/css/charts/morris.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('robust/app-assets/vendors/css/extensions/unslider.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('robust/app-assets/vendors/css/extensions/toastr.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('robust/app-assets/vendors/css/weather-icons/climacons.min.css') }}">
    <!-- END VENDOR CSS-->
    <!-- BEGIN ROBUST CSS-->
    <link rel="stylesheet" type="text/css" href=" {{ url('robust/app-assets/css/bootstrap-extended.css') }}">
    <link rel="stylesheet" type="text/css" href=" {{ url('robust/app-assets/css/app.css') }}">
    <!--<link rel="stylesheet" type="text/css" href=" {{ url('robust/app-assets/css/colors.css') }}">-->
    <!-- END ROBUST CSS-->
    <!-- BEGIN Page Level CSS-->
    <link rel="stylesheet" type="text/css" href=" {{ url('robust/app-assets/css/core/menu/menu-types/horizontal-top-icon-menu.css') }}">
    <link rel="stylesheet" type="text/css" href=" {{ url('robust/app-assets/css/core/menu/menu-types/vertical-overlay-menu.css') }}">
    <link rel="stylesheet" type="text/css" href=" {{ url('robust/app-assets/css/core/colors/palette-climacon.css') }}">
    <link rel="stylesheet" type="text/css" href=" {{ url('robust/app-assets/css/pages/users.css') }}">
    <!-- END Page Level CSS-->
    
    <!-- BEGIN Custom CSS-->
    <link href="{{ asset(mix('css/app.css')) }}" type="text/css" rel="stylesheet" />
    
    <meta name="csrf-token" value="{{ csrf_token() }}" />
    <!-- END Custom CSS-->
  </head>
  <body data-open="hover" data-menu="horizontal-top-icon-menu" data-col="2-columns" class="horizontal-layout horizontal-top-icon-menu 2-columns ">

    <!-- navbar-fixed-top-->
    @include('layout.navbar')
    

    <!-- ////////////////////////////////////////////////////////////////////////////-->


    @yield('content-body')
    
    

    
    <!-- ////////////////////////////////////////////////////////////////////////////-->


    @include('layout.footer')

    <!-- BEGIN VENDOR JS-->
    <script src="{{ url('robust/app-assets/js/core/libraries/jquery.min.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/vendors/js/ui/tether.min.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/js/core/libraries/bootstrap.min.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/vendors/js/ui/perfect-scrollbar.jquery.min.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/vendors/js/ui/unison.min.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/vendors/js/ui/blockUI.min.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/vendors/js/ui/jquery.matchHeight-min.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/vendors/js/ui/jquery-sliding-menu.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/vendors/js/sliders/slick/slick.min.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/vendors/js/ui/screenfull.min.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/vendors/js/extensions/pace.min.js') }}" type="text/javascript"></script>
    <!-- BEGIN VENDOR JS-->
    <!-- BEGIN PAGE VENDOR JS-->
    <script type="text/javascript" src="{{ url('robust/app-assets/vendors/js/ui/jquery.sticky.js') }}"></script>
    <script type="text/javascript" src="{{ url('robust/app-assets/vendors/js/charts/jquery.sparkline.min.js') }}"></script>
    <script src="{{ url('robust/app-assets/vendors/js/extensions/toastr.min.js') }}" type="text/javascript"></script>
    <!--<script src="//maps.googleapis.com/maps/api/js?key=AIzaSyBDkKetQwosod2SZ7ZGCpxuJdxY3kxo5Po" type="text/javascript"></script>-->
    <!--<script src="{{ url('robust/app-assets/vendors/js/charts/gmaps.min.js') }}" type="text/javascript"></script>-->
    <!--<script src="{{ url('robust/app-assets/vendors/js/forms/icheck/icheck.min.js') }}" type="text/javascript"></script>-->
    <!--<script src="{{ url('robust/app-assets/vendors/js/extensions/jquery.knob.min.js') }}" type="text/javascript"></script>-->
    <!--<script src="{{ url('robust/app-assets/vendors/js/charts/raphael-min.js') }}" type="text/javascript"></script>-->
    <!--<script src="{{ url('robust/app-assets/vendors/js/charts/morris.min.js') }}" type="text/javascript"></script>-->
    <!--<script src="{{ url('robust/app-assets/vendors/js/extensions/unslider-min.js') }}" type="text/javascript"></script>-->
    <!--<script src="{{ url('robust/app-assets/vendors/js/charts/echarts/echarts.js') }}" type="text/javascript"></script>-->
    <!-- END PAGE VENDOR JS-->
    <!-- BEGIN ROBUST JS-->
    <script src="{{ url('robust/app-assets/js/core/app-menu.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/js/core/app.js') }}" type="text/javascript"></script>
    <script src="{{ url('robust/app-assets/js/scripts/ui/fullscreenSearch.js') }}" type="text/javascript"></script>
    <!-- END ROBUST JS-->
    <!-- BEGIN PAGE LEVEL JS-->
    <script type="text/javascript" src="{{ url('robust/app-assets/js/scripts/ui/breadcrumbs-with-stats.js') }}"></script>
    <!--<script src="{{ url('robust/app-assets/js/scripts/pages/dashboard-fitness.js') }}" type="text/javascript"></script>-->
    <!-- END PAGE LEVEL JS-->
    
    <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
  </body>
</html>
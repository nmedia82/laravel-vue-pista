<template>
    <div role="navigation" data-menu="menu-wrapper" class="header-navbar navbar navbar-horizontal navbar-fixed navbar-light navbar-without-dd-arrow navbar-bordered navbar-shadow">
        <!-- Horizontal menu content-->
        <div data-menu="menu-container" class="navbar-container main-menu-content-zzzzZZZZ">
            <!-- include ../includes/mixins-->
            <ul id="main-menu-navigation" data-menu="menu-navigation" class="nav navbar-nav">
                <li data-menu="dropdown" class="dropdown nav-item">
                    <router-link to="/" class="dropdown-toggle nav-link"><i class="icon-home3"></i>Home</router-link>
                    <!--<a href="index.html" data-toggle="dropdown" class="dropdown-toggle nav-link"><i class="icon-home3"></i><span data-i18n="nav.dash.main">Dashboard</span></a>-->
                </li>
    
                <li data-menu="dropdown" class="dropdown nav-item">
                    <router-link to="/category" class="dropdown-toggle nav-link"><i class="icon-home3"></i>Category</router-link>
                    <ul class="dropdown-menu">
                        <li data-menu="" class="active">
                            <a href="dashboard-fitness.html" data-toggle="dropdown" class="dropdown-item">Add Category</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- /horizontal menu content-->
    </div>
</template>

<script>
    export default {}
</script>

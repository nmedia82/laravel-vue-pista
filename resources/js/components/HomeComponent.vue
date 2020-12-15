// HomeComponent.vue

<template>
  <div class="content-body">
    
    <div class="row">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-body">
                    <div class="card-block">
                        <div class="row">
                            <div class="col-xl-3 col-lg-6 col-md-12 border-right-grey border-right-lighten-3 clearfix">
                                <div class="float-xs-left pl-2">
                                    <span class="grey darken-1 block">Age</span>
                                    <span class="font-large-3 line-height-1 text-bold-300">25</span>
                                </div>
                                <div class="float-xs-left mt-2">
                                    <span class="grey darken-1 block">Years</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-12 border-right-grey border-right-lighten-3 clearfix">
                                <div class="float-xs-left pl-2">
                                    <span class="grey darken-1 block">Height</span>
                                    <span class="font-large-3 line-height-1 text-bold-300">185</span>
                                </div>
                                <div class="float-xs-left mt-2">
                                    <span class="grey darken-1 block">cm</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-12 border-right-grey border-right-lighten-3 clearfix">
                                <div class="float-xs-left pl-2">
                                    <span class="grey darken-1 block">Weight</span>
                                    <span class="font-large-3 line-height-1 text-bold-300">64</span>
                                </div>
                                <div class="float-xs-left mt-2">
                                    <span class="grey darken-1 block">Kg</span>
                                    <span class="block"><i class="icon-arrow-down4 deep-orange accent-3"></i></span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-12 clearfix">
                                <div class="float-xs-left pl-2">
                                    <span class="grey darken-1 block">Body mass index</span>
                                    <span class="font-large-3 line-height-1 text-bold-300">22.3</span>
                                </div>
                                <div class="float-xs-left mt-2">
                                    <span class="grey darken-1 block">Kg/m</span>
                                    <span class="block"><i class="icon-arrow-up4 success"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

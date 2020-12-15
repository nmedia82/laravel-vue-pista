// App.vue

<template>
  
  <fragment>
    
    <Menu />
    
    <div class="app-content content container-fluid">
      <div class="content-wrapper">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </fragment>
  
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>

<script>
  import { Fragment } from 'vue-fragment'
  import Menu from './parts/Menu'

  export default {
    components: {
      Fragment,
      Menu
    }
  }
</script>

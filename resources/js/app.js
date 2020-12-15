require('./bootstrap');

window.Vue = require('vue');
window.pista_base_url = 'http://ec2-18-210-83-9.compute-1.amazonaws.com/saapkdev/laravel/pista/public';
// import Vue from 'vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './components/App.vue';
// import HomeComponent from './components/HomeComponent.vue';
// import CategoryComponent from './components/CategoryComponent.vue';
// Vue.component('home-component', require('./components/HomeComponent.vue'));

// Lozy loading routes
// source: https://programmer.ink/think/5dc2306720c0a.html
const routes = [{
        name: 'home',
        path: '/',
        component: resolve => require(['./components/HomeComponent'], resolve)
    },
    {
        name: 'category',
        path: '/category',
        component: resolve => require(['./components/CategoryComponent'], resolve)
    },
]

const router = new VueRouter({ mode: 'history', routes: routes, base: '/saapkdev/laravel/pista/public/', });
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');

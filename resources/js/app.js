require('./bootstrap');

window.Vue = require('vue');
window.pista_base_url = 'http://ec2-18-210-83-9.compute-1.amazonaws.com/saapkdev/laravel/pista/public';
// import Vue from 'vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
import vSelect from 'vue-select';

// form generator
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
Vue.use(VueFormGenerator);

Vue.component('v-select', vSelect);

Vue.use(VueAxios, axios);

import 'vue-select/dist/vue-select.css';

import App from './components/App.vue';
// import HomeComponent from './components/HomeComponent.vue';
// import CategoryComponent from './components/CategoryComponent.vue';
// Vue.component('home-component', require('./components/HomeComponent.vue'));

// Lazy loading routes
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
    {
        name: 'resource',
        path: '/resource',
        component: resolve => require(['./components/ResourceComponent'], resolve)
    },
]

const router = new VueRouter({ mode: 'history', routes: routes, base: '/saapkdev/laravel/pista/public/', });
// const router = new VueRouter({ mode: 'history' });
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');

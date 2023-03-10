import './bootstrap';

import { createApp } from 'vue';

import app from './layout/app.vue';

import { Quasar } from 'quasar'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import("./layout/form.vue") }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(app).use(router).use(Quasar).mount("#app");

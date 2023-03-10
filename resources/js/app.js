import './bootstrap';

import { createApp } from 'vue';

import app from './layout/app.vue';

import {
    Quasar,
    Notify
} from 'quasar'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import("./layout/form.vue") }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(app).use(router).use(Quasar, {
    plugins: {
        Notify
    },
    config: {
        notify: { /* look at QuasarConfOptions from the API card */ }
    }
}).mount("#app");

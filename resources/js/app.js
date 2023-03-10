import './bootstrap';

import { createApp } from 'vue';

import app from './layout/app.vue';

import {
    Quasar,
    Notify,
    Dialog
} from 'quasar'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import("./layout/form.vue") },
    { path: '/table', component: () => import("./layout/table.vue") }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(app).use(router).use(Quasar, {
    plugins: {
        Notify,
        Dialog
    },
    config: {
        notify: { /* look at QuasarConfOptions from the API card */ }
    }
}).mount("#app");

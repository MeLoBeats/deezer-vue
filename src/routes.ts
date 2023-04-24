import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('./pages/PlaylistListView.vue')
    },
    {
        path: '/playlist/:id',
        component: () => import('./pages/PlaylistView.vue')
    }
]

export default createRouter({
    routes: routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})
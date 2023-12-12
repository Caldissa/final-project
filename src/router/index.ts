import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import dayjs from 'dayjs'

const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: () => import('../views/Profile.vue') },
    { path: '/login', component: () => import('../views/Login.vue') }

    // { path: '/shop', component: () => import('../views/Shop.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

router.beforeEach((to, _from, next) => {
    if (to.path === '/login') {
        return next()
    }
    const email = sessionStorage.getItem('ss_email')
    const timestamp = sessionStorage.getItem('ss_date')
    if (!email || !timestamp) {
        return next('/login')
    }
    console.log('checking timestamp: ', timestamp)
    console.log('diff: ', dayjs().diff(dayjs(timestamp), 'hour'))
    console.log('hi', dayjs().diff(dayjs(timestamp), 'hour') > 1)
    if (dayjs().diff(dayjs(timestamp), 'hour') < -23) {
        console.log('expired')
        sessionStorage.removeItem('ss_email')
        sessionStorage.removeItem('ss_date')
        return next('/login')
    }
    next()
})

export default router

import Home from '../views/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: () => import('../views/Profile.vue') }

    // { path: '/shop', component: () => import('../views/Shop.vue') },
]

export default routes

import VueRouter from 'vue-router'

const routes = [
    {
        path: '/test01',
        component: () => import('@/views/d_test01')
    },
    {
        path: '/test02',
        component: () => import('@/views/d_test02')
    },
    {
        path: '*',
        component: () => import('@/views/d_test01')
    }
];

export const router = new VueRouter({
    routes
});

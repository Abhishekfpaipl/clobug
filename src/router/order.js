const routes = [
    {
        path: '/orders',
        children: [
            {
                path: 'pending',
                name: 'PendingOrdersPage',
                component: () => import('@/views/order/PendingOrdersPage.vue')
            },
            {
                path: 'completed',
                name: 'CompletedOrdersPage',
                component: () => import('@/views/order/CompletedOrdersPage.vue')
            },


        ]
    },
    {
        path: '/common',
        name: 'CommonTopNav',
        component: () => import('@/components/Navbar/CommonTopNav.vue')
    },
]
export default routes



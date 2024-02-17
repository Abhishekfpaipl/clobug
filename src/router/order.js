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
]
export default routes



const routes=[
    {
        path: '/faqs',
        children: [
            {
                path: 'customer-service',
                name: 'CustomerService',
                component: () => import('@/views/faqs/CustomerService.vue')
            },
            {
                path: 'account',
                name: 'Account',
                component: () => import('@/views/faqs/AccountPage.vue')
            },
            {
                path: 'order',
                name: 'Order',
                component: () => import('@/views/faqs/OrderPage.vue')
            },
            {
                path: 'payment',
                name: 'Payment',
                component: () => import('@/views/faqs/PaymentPage.vue')
            },
            {
                path: 'delivery',
                name: 'Delivery',
                component: () => import('@/views/faqs/DeliveryPage.vue')
            },
            {
                path: 'returns',
                name: 'Return',
                component: () => import('@/views/faqs/ReturnPage.vue')
            },
            {
                path: 'stock',
                name: 'Stock',
                component: () => import('@/views/faqs/StockPage.vue')
            },
            {
                path: 'care-instructions',
                name: 'CareInstructions',
                component: () => import('@/views/faqs/CareInstructionsPage.vue')
            },
            {
                path: 'promotions',
                name: 'Promotion',
                component: () => import('@/views/faqs/PromotionPage.vue')
            },
            {
                path: 'membership',
                name: 'Membership',
                component: () => import('@/views/faqs/MembershipPage.vue')
            },
        ]
    },
]
export default routes
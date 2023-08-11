const routes = [
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
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: () => import('@/views/Forms/ContactUs.vue')
    },
    {
        path: "/update-page",
        name: "update-page",
        component: () => import('@/views/notification/UpdatePage.vue')
    },
    {
        path: "/promotion-page",
        name: "promotion-page",
        component: () => import('@/views/notification/PromotionPage.vue')
    },
    {
        path: "/search-page",
        name: "search-page",
        component: () => import('@/views/SearchPage.vue')
    },
    {
        path: "/refund-policy",
        name: "RefundPolicy",
        component: () => import('@/views/Forms/RefundPolicy.vue')
    },
    {
        path: "/return-policy",
        name: "ReturnPolicy",
        component: () => import('@/views/Forms/ReturnPolicy.vue')
    },
    {
        path: "/shipping-policy",
        name: "ShippingPolicy",
        component: () => import('@/views/Forms/ShippingPolicy.vue')
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: () => import('@/views/Forms/PrivacyPolicy.vue')
    },
    {
        path: "/term-&-condition",
        name: "TOSPage",
        component: () => import('@/views/Forms/TOSPage.vue')
    },
]
export default routes
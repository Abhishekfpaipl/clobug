const routes = [
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
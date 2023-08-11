const routes = [
    {
        path:'/cart-page',
        name:'CartPage',
        component:() => import('@/views/cart/CartPage.vue')
    },
    {
        path:'/address-page',
        name:'AddressPage',
        component:() => import('@/views/cart/AddressPage.vue')
    },
    {
        path:'/payment-page',
        name:'PaymentPage',
        component:() => import('@/views/cart/PaymentPage.vue')
    },
]
export default routes
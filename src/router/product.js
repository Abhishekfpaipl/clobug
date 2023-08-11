const routes = [
    {
        path: '/product-page/:productId',
        name: 'ProductPage',
        component: () => import('@/views/ProductPage.vue')
    },
    {
        path: "/wishlist",
        name: "WishList",
        component: () => import('@/views/wishlist/WishList.vue'),
    },
]
export default routes
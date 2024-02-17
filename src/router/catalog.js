const routes = [
    {
        path: "/categories",
        name: "CategoryCatalogPage",
        component: () => import("@/views/categories/CategoryCatalogPage.vue"),
    },
    {
        path: "/catalogs/:categoryId",
        name: "CatalogPage",
        component: () => import('@/views/catalog/CatalogPage.vue')
    },
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
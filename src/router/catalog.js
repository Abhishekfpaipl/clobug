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
]
export default routes
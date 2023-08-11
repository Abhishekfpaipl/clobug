<template>
    <!-- Desktop version -->
    <div class="d-lg-block d-none position-fixed  top-0 z-2 w-100" style="background-color: #F4B700;"
        :style="{ backgroundColor: containerBackgroundColor }">
        <nav class="navbar navbar-expand-lg py-3">
            <div class="container-fluid">
                <router-link to="/">
                    <img :src="`${publicPath}${img}`" style="width: 80px;">
                </router-link>

                <div class="container">
                    <ul class="list-unstyled mb-0">
                        <li v-for="(cat, catIndex) in categories" :key="catIndex"
                            class="category d-inline position-relative" @mouseover="setHoveredCategory(catIndex)"
                            @mouseout="clearHoveredCategory">
                            <a href="#" class="title px-2 text-decoration-none text-dark">{{ cat.title }}</a>
                            <div class="mega-menu " :style="{ backgroundColor: cat.bgColor }">
                                <div class="" style="padding-left: 96px;">
                                    <ul class="d-flex list-unstyled mega-items">
                                        <li v-for="(subCat, index) in cat.subCat" :key="index" class="py-2 px-3 ">
                                            <router-link :to="subCat.route" class="text-decoration-none ">
                                                <a :href="subCat.route" class="fw-bold text-decoration-none text-dark">{{
                                                    subCat.title }}</a>
                                            </router-link>
                                            <div class="text-dark">
                                                <div v-for="(a, key) in subCat.links" :key="key">
                                                    <p class="my-2">
                                                        {{ a.name }}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="d-flex gap-4 px-2">
                    <i class="bi bi-search fs-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"></i>
                    <div class="text-center">
                        <div class="btn-group">
                            <div class="" type="button" data-bs-toggle="dropdown" data-bs-display="static"
                                aria-expanded="false">
                                <i class="bi bi-person-fill fs-4"></i>
                            </div>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                <div class="text-center">
                                    <li>
                                        <p class="dropdown-item fw-bold m-0">Hello User</p>
                                        <small>To access your accountc</small>
                                    </li>
                                    <router-link to="/login-page" class="text-decoration-none text-dark">
                                        <li><button class="btn btn-success mt-3 mb-3" href="#">Sign Up</button></li>
                                    </router-link>
                                    <router-link to="/orders/pending" class="text-decoration-none text-dark">
                                        <li><a class="dropdown-item" href="#"><i class="bi bi-bag"></i> My
                                                orders</a>
                                        </li>
                                    </router-link>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center position-relative">
                        <router-link to="/wishlist" class="text-decoration-none text-dark">
                            <i class="bi bi-heart fs-4"></i><span class="badge count">{{ savedProducts.length }}</span>
                        </router-link>
                    </div>
                    <div class="text-center position-relative">
                        <router-link to="/cart-page" class="text-decoration-none text-dark">
                            <i class="bi bi-cart fs-4"></i><span class="badge count">{{ cart.length }}</span>
                        </router-link>
                    </div>
                </div>

            </div>
        </nav>

        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header border-bottom">
                <div class="input-group input-group-lg m-auto w-50">
                    <span class="input-group-text" id="inputGroup-sizing-lg"><i class="bi bi-search"></i></span>
                    <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Search"
                        aria-describedby="inputGroup-sizing-lg">
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p class="mb-0 fw-bold">Top Search</p>

            </div>
        </div>



    </div>

    <!-- Mobile version -->
    <div class="d-flex justify-content-between d-lg-none p-2 position-fixed top-0  w-100 bg-light"
        style="z-index: 8;">
        <div class="d-flex gap-3">
            <i class="bi bi-list fs-1 text-end" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu"
                aria-controls="mobileMenu"></i>
            <router-link to="search-page" class="text-dark">
                <i class="bi bi-search fs-2"></i>
            </router-link>
            <div></div>
            <div></div>
        </div>
        <div class="mx-2">
            <router-link to="/">
                <img :src="`${publicPath}${img}`" style="height: 40px;">
            </router-link>
        </div>
        <div class="d-flex gap-3 px-2">
            <div class="position-relative">
                <router-link to="/update-page" class="text-dark">
                    <i class="bi bi-bell fs-2"></i><span class="badge count">{{ notifications.length }}</span>
                </router-link>
            </div>
            <div class="text-center position-relative">
                <router-link to="/cart-page" class="text-decoration-none text-dark">
                    <i class="bi bi-cart fs-2"></i><span class="badge count">{{ cart.length }}</span>
                </router-link>
            </div>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileMenu" aria-labelledby="offcanvasExampleLabel"
            style="width: 80vw;">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <router-link to="/login-page" class="text-decoration-none text-dark">
                    <p class="fs-5">Login</p>
                </router-link>
                <router-link to="/registration-page" class="text-decoration-none text-dark">
                    <p class="fs-5">Sign Up</p>
                </router-link>
                <p class="fs-5">Profile</p>
                <router-link to="/contact-us" class="text-decoration-none text-dark">
                    <p class="fs-5">Contact Us</p>
                </router-link>
                <router-link to="/faqs/customer-service">
                    <p class="fs-5">FAQs</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            img: 'img/logo/CloBug.png',
            publicPath: process.env.BASE_URL,
            categories: [
                {
                    id: 1,
                    title: 'Women Ethnic',
                    bgColor: '#FFD0D0',
                    subCat: [
                        {
                            title: 'All Women Ethnic',
                            links: [
                                { name: 'View All', rot: '/product-page/1' }
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Sarees',
                            links: [
                                { name: 'All Sarees' }, { name: 'Silk Sarees' }, { name: 'Cotton Silk Sarees' },
                                { name: 'Cottom Sarees' }, { name: 'Georgette Sarees' }, { name: 'Chiffon Sarees' },
                                { name: 'Satin Sarees' }
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Kurtis',
                            links: [
                                { name: 'All Kurtis' }, { name: 'Anarkali Kurtis' }, { name: 'Rayon Kurtis' },
                                { name: 'Cotton Kurtis' }, { name: 'Embroidered Kurtis' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Kurta Sets',
                            links: [
                                { name: 'All Kurta Sets' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Suit & Dress Material',
                            links: [
                                { name: ' All Suits & Dresses Material' }, { name: ' Cotton Suits' },
                                { name: ' Embroidered Suits' }, { name: 'Chanderi Suits' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Other Ethnic',
                            links: [
                                { name: 'Blouses' }, { name: ' Dupattas' },
                                { name: ' Lehanga' }, { name: 'Gown' },
                            ],
                            route: '/categories'
                        },
                    ],
                },
                {
                    id: 2,
                    title: 'Women Western',
                    bgColor: '#FAEBB1',
                    subCat: [
                        {
                            title: 'Topwear',
                            links: [
                                { name: 'Tops' }, { name: 'Dresses' }, { name: 'Sweaters' },
                                { name: 'Jumpsuits' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Bottomwear',
                            links: [
                                { name: 'Jean' }, { name: 'Jeggings' }, { name: 'Palazzos' },
                                { name: 'Shorts' }, { name: 'Skirts' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Innerwear',
                            links: [
                                { name: 'Bra' }, { name: 'Briefs' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Sleepwear',
                            links: [
                                { name: 'Nightsuits' },
                                { name: 'Babydolls' },
                            ],
                            route: '/categories'
                        },
                    ],
                },
                {
                    id: 3,
                    title: 'Men',
                    bgColor: '#C2DEDC',
                    subCat: [
                        {
                            title: 'Top Wear',
                            links: [
                                { name: 'All Top Wear' },
                                { name: 'T-shirts' },
                                { name: 'Shirts' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Bottom Wear',
                            links: [
                                { name: 'Track Pants' }, { name: 'Jeans' }, { name: 'Trousers' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Men Accessories',
                            links: [
                                { name: 'All Men Accessories' }, { name: 'Watches' }, { name: 'Belts' },
                                { name: 'Wallets' }, { name: 'Jewellary' },
                                { name: 'Sunglasses' }, { name: 'Bags' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Men Footwear',
                            links: [
                                { name: 'Casual Shoes' },
                                { name: 'Formal Shoes' },
                                { name: 'Sports Shoes' },
                                { name: 'Sandals' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Ethnic Wear',
                            links: [
                                { name: ' Men Kurtas' }, { name: ' Ethnic Jackets' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Inner & Sleep Wear',
                            links: [
                                { name: 'All Inner & Sleep Wear' }, { name: ' Vests' },
                            ],
                            route: '/categories'
                        },
                    ],
                    links: 'View All'
                },
                {
                    id: 4,
                    title: 'Kids',
                    bgColor: '#FFDDCC',
                    subCat: [
                        {
                            title: 'Accessories',
                            links: [
                                { name: 'Footwears' },
                                { name: 'Stationery' },
                                { name: 'Watches' },
                                { name: 'Bags & Backpacks' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Boys & Girls 2+ Years',
                            links: [
                                { name: 'Dresses' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Infant 0-2 Years',
                            links: [
                                { name: 'Rompers' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Kurta Sets',
                            links: [
                                { name: 'All Kurta Sets' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Baby Care',
                            links: [
                                { name: ' All Baby Care' },
                            ],
                            route: '/categories'
                        },
                    ],
                },
                {
                    id: 5,
                    title: 'Home & Kitchen',
                    bgColor: '#B3E5BE',
                    subCat: [
                        {
                            title: 'Home Furnishing',
                            links: [
                                { name: 'Bedsheets' },
                                { name: 'Doormats' },
                                { name: 'Curtains & Sheers' },
                                { name: 'Cushions & Covers' },
                                { name: 'Mattress Protectors' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Home Decor',
                            links: [
                                { name: 'All Home Decor' },
                                { name: 'Stickers' },
                                { name: 'Clocks' },
                                { name: 'Showpieces' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Kitchen & Dinning',
                            links: [
                                { name: 'Kitchen Storage' },
                                { name: 'Cookware & Bakeware' },
                            ],
                            route: '/categories'
                        },
                    ],
                },
                {
                    id: 6,
                    title: 'Beauty & Health',
                    bgColor: '#FAEBB0',
                    subCat: [
                        {
                            title: 'Make Up',
                            links: [
                                { name: 'Face' },
                                { name: 'Nails' },
                                { name: 'Eyes' },
                                { name: 'Lips' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Wellness',
                            links: [
                                { name: 'Sanitizers' },
                                { name: 'Oral Care' },
                                { name: 'Feminine Hygiene' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Skincare',
                            links: [
                                { name: 'Deodorants' },
                            ],
                            route: '/categories'
                        },
                    ],
                },
                {
                    id: 7,
                    title: 'Jewellary & Accessories',
                    bgColor: '#FDFFAE',
                    subCat: [
                        {
                            title: 'Jewellery',
                            links: [
                                { name: 'Jewellery Set' },
                                { name: 'Earrings' },
                                { name: 'Mangalsutras' },
                                { name: 'Studs' },
                                { name: 'Bangles' },
                                { name: 'Necklaces' },
                                { name: 'Rings' },
                                { name: 'Anklets' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Women Accessory',
                            links: [
                                { name: 'Bags' },
                                { name: 'Watches' },
                                { name: ' Hair Accessories' },
                                { name: ' Sunglasses' },
                                { name: ' Socks' },
                            ],
                            route: '/categories'
                        },
                    ],
                },
                {
                    id: 8,
                    title: 'Bags & Footwear',
                    bgColor: '#EADBC8',
                    subCat: [
                        {
                            title: 'Women Bags',
                            links: [
                                { name: 'All Women Bags' },
                                { name: 'Handbags' },
                                { name: 'Clutches' },
                                { name: 'Slingbags' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Men Bags',
                            links: [
                                { name: 'All Men Bags' },
                                { name: 'Wallets' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Women Footwear',
                            links: [
                                { name: 'Flats' },
                                { name: 'Bellies' },
                                { name: 'Juttis' },
                            ],
                            route: '/categories'
                        },
                        {
                            title: 'Men Footwear',
                            links: [
                                { name: 'Sports Shoes' },
                                { name: 'Casual Shoes' },
                                { name: 'Formal Shoes' },
                                { name: 'Sandals' },
                            ],
                            route: '/categories'
                        },
                    ],
                },



            ],
            hoveredCategoryIndex: -1,
        };
    },
    computed: {
        savedProducts() {
            return this.$store.getters['catalog/getSavedProducts']
        },
        cart() {
            return this.$store.getters['catalog/getCart']
        },
        notifications() {
            return this.$store.getters['user/getNotifications']
        },
        containerBackgroundColor() {
            if (this.hoveredCategoryIndex !== -1) {
                return this.categories[this.hoveredCategoryIndex].bgColor;
            }
            return '#F4B700'; // Default color when no category is hovered
        },
    },
    methods: {
        setHoveredCategory(index) {
            this.hoveredCategoryIndex = index;
        },
        clearHoveredCategory() {
            this.hoveredCategoryIndex = -1;
        },
    },
}
</script>

<style scoped> .mega-menu {
     display: none;
     position: fixed;
     top: 46px;
     left: 0;
     right: 0;
     background-color: #fff;
     /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
     z-index: 3;
     width: 100vw;
 }
 .category:hover .title {
     color: red !important;
     border-bottom: 2px solid red !important;
 }

 .category:hover .mega-menu {
     display: block;
 }

 .dropdown-menu[data-bs-popper] {
     left: -130px;
 }

 .count {
     position: absolute;
     top: -4px;
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background: #eb3e25;
     right: -8px;
     color: #fff;
     font-size: 10px;
     text-align: center;
     line-height: 14px;
 }
</style>
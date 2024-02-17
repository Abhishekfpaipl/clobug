<template>
    <!-- Desktop version -->
    <div class="d-lg-block d-none position-fixed top-0 w-100" style="z-index: 10; background-color: #F4B700;"
        :style="{ backgroundColor: containerBackgroundColor }">
        <nav class="navbar navbar-expand-lg py-3">
            <div class="container-fluid">
                <router-link to="/">
                    <img :src="`${publicPath}${img}`" style="width: 80px;">
                </router-link>

                <div class="container">
                    <ul class="list-unstyled mb-0">
                        <li v-for="(cat, index) in categories" :key="index" class="category d-inline position-relative"
                            @mouseover="setHoveredCategory(index)" @mouseout="clearHoveredCategory">
                            <a href="#" class="title px-2 text-decoration-none text-dark">{{ cat.title }}</a>
                            <div class="mega-menu " :style="{ backgroundColor: cat.bgColor }">
                                <div class="" style="padding-left: 96px;">
                                    <ul class="d-flex list-unstyled mega-items">
                                        <li v-for="(subCat, index) in cat.subCat" :key="index" class="py-2 px-3 ">
                                            <router-link :to="'/catalogs/' + subCat.title" class="text-decoration-none ">
                                                <a :href="subCat.route" class="fw-bold text-decoration-none text-dark">{{
                                                    subCat.title }}</a>
                                            </router-link>
                                            <div class="text-dark">
                                                <div v-for="(a, key) in subCat.links" :key="key">
                                                    <router-link :to="'/catalogs/' + a.name" class="text-decoration-none text-dark">
                                                        <p class="my-2">
                                                            {{ a.name }}
                                                        </p>
                                                    </router-link>
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
    <div class="d-flex justify-content-between d-lg-none p-2 position-fixed top-0 w-100 bg-light" style="z-index: 8;">
        <div class="d-flex gap-3">
            <i class="bi bi-list fs-1 text-end" @click="toggleMainMenu()"></i>
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
        <div class="offcanvas offcanvas-start show" v-if="mainMenu"
            style="width: 80vw;" :style="{ backgroundColor: containerBackgroundColor }">
            <div class="offcanvas-header border-bottom border-dark">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" :style="{ backgroundColor: containerBackgroundColor }">
                <div class="accordion" id="accordionExample" style="background-color: transparent;">
                    <div class="accordion-item" v-for="(cat, index) in categories" :key="index"
                        style="border:0px; background-color: transparent;" @mouseover="setHoveredCategory(index)"
                        @mouseout="clearHoveredCategory">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#cat' + index" aria-expanded="false" :aria-controls="'cat' + index">
                                {{ cat.title }}
                            </button>
                        </h2>
                        <div :id="'cat' + index" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body p-0" :style="{ backgroundColor: cat.bgColor }">
                                <ul class="list-unstyled ">
                                    <li v-for="(subCat, subIndex) in cat.subCat" :key="subIndex" class="py-2 px-3 ">
                                        <router-link :to="'/catalogs/' + subCat.title" class="text-decoration-none ">
                                            <a href="" class="text-decoration-none text-dark">{{
                                                subCat.title }}</a>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <router-link to="/login-page" class="text-decoration-none text-dark">
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
                </router-link> -->
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
            hoveredCategoryIndex: -1,
        };
    },
    computed: {
        mainMenu() {
            return this.$store.getters.mainMenu
        },
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
            return 'white';
        },
        categories() {
            return this.$store.getters['collection/getMenuCategories']
        }
    },
    methods: {
        toggleMainMenu() {
            this.$store.dispatch('toggleMainMenu');
        },
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

 .accordion-button:focus {
     box-shadow: none !important
 }

 .accordion-button:not(.collapsed) {
     background-color: transparent;
     box-shadow: none;
 }

 .accordion-button::after {
     display: none;
 }

 .accordion-item .accordion-button {
     background-color: transparent;
 }</style>
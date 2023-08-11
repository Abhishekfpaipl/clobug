<template>
    <div class="" style="padding-top:60px;padding-bottom:80px">
        <!-- Mobile version -->
        <div class="d-block d-md-none">
            <div class="d-flex justify-content-center align-items-center">
                <div class="d-flex gap-2">
                    <i v-if="savedProducts.length < 1" class="bi bi-heart"></i>
                    <i v-if="savedProducts.length > 0" class="bi bi-heart-fill text-danger"></i>
                    <p> My Wishlist ({{ savedProducts.length }})</p>
                </div>
            </div>

            <div v-if="savedProducts.length === 0"
                class="bg-light w-100 d-flex flex-column justify-content-center align-items-center my-1"
                style="height: 50%; padding: 90px 0px;">
                <i class="bi bi-search fs-1"></i>
                <h3>Hmm, can't find any items.</h3>
            </div>

            <div class="container">
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-3">
                    <div class="col" v-for="(pro, index) in savedProducts" :key="index">
                        <div class="card show-on-hover rounded-0">
                            <router-link :to="'/product-page/' + ProductById(pro).id"
                                class="text-decoration-none text-dark">
                                <div :id="'productImages' + index" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                            :class="{ active: imgIndex === 0 }"
                                            v-for="(image, imgIndex) in  ProductById(pro).images" :key="imgIndex">
                                            <img :src="image" class="card-img-top rounded-0" alt=""
                                                style="min-height:100px;">
                                        </div>
                                    </div>
                                    <div class="d-flex mt-1" id="scroll" style="overflow-x: scroll;">
                                        <button type="button" class="rounded-circle p-0 border me-1"
                                            :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                            :class="{ active: imgIndex === 0 }"
                                            :aria-current="imgIndex === 0 ? true : false"
                                            v-for="(image, imgIndex) in  ProductById(pro).images" :key="imgIndex">
                                            <img :src="image" class="rounded-circle" alt=""
                                                style="width: 35px; height: 35px; object-fit: fill;">
                                        </button>
                                    </div>
                                </div>
                            </router-link>
                            <div class=" position-absolute w-100 soh-div">
                                <div class="d-flex justify-content-end align-items-start p-2">
                                    <p class="m-0" @click="unSaveProduct(productIndex)"><i class="bi bi-x-lg"></i>
                                    </p>
                                </div>
                            </div>

                            <div class="card-body" style="padding:3px">
                                <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                                    <p class="m-0 fw-bold" style="font-size:13px;">₹{{ ProductById(pro).price }} / pc</p>
                                    <p class="m-0 fw-bold" style="font-size:13px;">{{ ProductById(pro).type }}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Deskrop version -->
        <div class="container d-md-block d-none my-4">
            <div class="row">

                <div class="col-8">
                    <p class="p-2 bg-light">
                        Hooray! You're just ₹990 away from unlocking free shipping! Shipping charges on the below order is
                        ₹99.
                    </p>

                    <div class="d-flex align-items-center">
                        <div class="d-flex gap-2">
                            <i v-if="savedProducts.length < 1" class="bi bi-heart"></i>
                            <i v-if="savedProducts.length > 0" class="bi bi-heart-fill text-danger"></i>
                            <p> My Wishlist ({{ savedProducts.length }})</p>
                        </div>
                    </div>
                    <div v-if="savedProducts.length === 0"
                        class="bg-light w-100 d-flex flex-column justify-content-center align-items-center my-1"
                        style="height: 50%; padding: 90px 0px;">
                        <i class="bi bi-search fs-1"></i>
                        <h3>Hmm, can't find any items.</h3>
                    </div>

                    <div class="container">
                        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-3">
                            <div class="col" v-for="(pro, index) in savedProducts" :key="index">
                                <div class="card show-on-hover rounded-0">
                                    <router-link :to="'/product-page/' + ProductById(pro).id"
                                        class="text-decoration-none text-dark">
                                        <div :id="'productImages' + index" class="carousel slide">
                                            <div class="carousel-inner">
                                                <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                                    :class="{ active: imgIndex === 0 }"
                                                    v-for="(image, imgIndex) in  ProductById(pro).images" :key="imgIndex">
                                                    <img :src="image" class="card-img-top rounded-0" alt=""
                                                        style="min-height:100px;">
                                                </div>
                                            </div>
                                            <div class="d-flex mt-1" id="scroll" style="overflow-x: scroll;">
                                                <button type="button" class="rounded-circle p-0 border me-1"
                                                    :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                                    :class="{ active: imgIndex === 0 }"
                                                    :aria-current="imgIndex === 0 ? true : false"
                                                    v-for="(image, imgIndex) in  ProductById(pro).images" :key="imgIndex">
                                                    <img :src="image" class="rounded-circle" alt=""
                                                        style="width: 35px; height: 35px; object-fit: fill;">
                                                </button>
                                            </div>
                                        </div>
                                    </router-link>
                                    <div class=" position-absolute w-100 soh-div">
                                        <div class="d-flex justify-content-end align-items-start p-2">
                                            <p class="m-0" @click="unSaveProduct(productIndex)"><i class="bi bi-x-lg"></i>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card-body" style="padding:3px">
                                        <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                                            <p class="m-0 fw-bold" style="font-size:13px;">₹{{ ProductById(pro).price }} /
                                                pc</p>
                                            <p class="m-0 fw-bold" style="font-size:13px;">{{ ProductById(pro).type }}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-4 bg-light position-sticky" style="height: calc(100% - 100px); top:62px">
                    <div class="d-flex gap-2">
                        <i class="bi bi-truck"></i>
                        <p>Free Shipping for orders 990</p>
                    </div>
                    <div class="d-flex gap-2">
                        <i class="bi bi-cash"></i>
                        <p>Secure Payment & Checkout</p>
                    </div>
                    <div class="d-flex gap-2">
                        <i class="bi bi-arrow-repeat"></i>
                        <p>Easy Return, Free Pick Up</p>
                    </div>
                </div>

            </div>
        </div>
        <HomePageCard></HomePageCard>
       
    </div>
</template>
<script>
import HomePageCard from '@/components/Collections/HomePageCard.vue'
export default {
    name: "SavedProudct",
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    components: {
        HomePageCard
    },
    computed: {
        savedProducts() {
            return this.$store.getters['catalog/getSavedProducts']
        }
    },
    methods: {
        ProductById(productId) {
            return this.$store.getters['catalog/getProduct'](productId)
        },
        unSaveProduct(productIndex) {
            this.$store.dispatch('catalog/unSaveProduct', productIndex)
        },

    }

}
</script>

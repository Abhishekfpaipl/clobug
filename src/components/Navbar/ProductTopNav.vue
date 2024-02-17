<template>
    <div class="d-md-none">
        <div class="d-flex justify-content-between bg-light position-fixed px-2 w-100 align-items-center "
            style="z-index:11;height:59px ;top:0px;">
            <div class="d-flex gap-3">
                <div class=""><i class="bi bi-arrow-left fs-1" @click="goBack()"></i></div>
                <router-link to="/search-page" class="text-decoration-none text-dark">
                    <div class=""><i class="bi bi-search fs-1"></i></div>
                </router-link>
            </div>
            <router-link to="/">
                <img :src="`${publicPath}${logo}`" style="width: 100px;">
            </router-link>

            <div class="d-flex gap-3 pe-2">
                <router-link to="/wishlist" class="text-dark">
                    <div class="position-relative">
                        <i class="bi bi-heart fs-1"></i>
                        <span class="badge count">{{ savedProducts.length }}</span>
                    </div>
                </router-link>
                <router-link to="/cart-page" class="text-dark">
                    <div class="position-relative">
                        <i class="bi bi-cart fs-1"></i>
                        <span class="badge count">{{ cart.length }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logo: 'img/logo/CloBug.png',
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        savedProducts() {
            return this.$store.getters['catalog/getSavedProducts']
        },
        cart() {
            return this.$store.getters['catalog/getCart']
        },
    },
    methods:{
        goBack(){
            window.history.back()
        }
    }
}
</script>

<style scoped>.count {
    position: absolute;
    top: -4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #eb3e25;
    right: -8px;
    color: #fff;
    font-size: 11px;
    text-align: center;
    line-height: 12px;
}
</style>
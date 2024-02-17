<template>
    <div class="contianer">
        <div class="d-md-none d-flex overflow-x-scroll gap-3 px-2" id="scroll">
            <div v-for="(collection, index) in collections" :key="index">
                <router-link :to="'/product-page/' + collection.id" class="text-decoration-none text-dark">
                    <div class="w-100">
                        <img :src="`${publicPath}${collection.img}`" style="width:180px;">
                    </div>
                    <p class="truncate mb-1" style="font-size: 12px;">{{ collection.name }}</p>
                    <p class="mb-2 " style="font-size: 12px;">₹{{ collection.price }}</p>
                </router-link>
            </div>
            <div class="d-flex align-items-center justify-content-center" style="width: 300px;">
                <router-link to="/catalogs/category1" class="text-decoration-none text-dark">
                    <p class="fs-1" style="width:300px;">View All <i class="bi bi-chevron-right"></i></p>
                </router-link>
            </div>
        </div>
        <div class="position-relative">

            <div class="d-none d-md-flex overflow-x-scroll gap-3 px-2" id="scroll" ref="gallery">
                <div v-for="(collection, index) in collections" :key="index">
                    <div class="w-100">
                        <img :src="`${publicPath}${collection.img}`" style="width:300px;">
                    </div>
                    <p class="truncate mb-1" style="font-size: 12px;">{{ collection.name }}</p>
                    <p class="mb-2 " style="font-size: 12px;">₹{{ collection.price }}</p>
                </div>
                <div class="d-flex align-items-center justify-content-center" style="width: 300px;">
                    <router-link to="/catalogs/category1" class="text-decoration-none text-dark">
                        <p class="fs-1" style="width:300px;">View All <i class="bi bi-chevron-right"></i></p>
                    </router-link>
                </div>
            </div>
            <a class="d-none d-md-block prev-icon" @click="scrollGallery(-1)">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="d-none d-md-block next-icon" @click="scrollGallery(1)">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>

        <HomeCategory></HomeCategory>

        <div class="my-3" style="background-color: cornflowerblue;">
            <div class="d-flex flex-column align-items-start overflow-hidden">
                <p class="moving-text fs-2 mb-0">Everyone is welcome to our app</p>
                <p class="ps-2">Download the App</p>
            </div>
        </div>

        <div class="px-2">
            <div class="d-flex justify-content-between">
                <p class="mb-0 fs-1 fw-bold">Best Seller</p>
                <p class="mb-0 fs-5">Shop Now</p>
            </div>
            <!-- <div class="d-md-none d-flex overflow-x-scroll gap-3 px-2" id="scroll"> -->
            <div class="d-md-none row row-cols-2 px-2" id="scroll">
                <div v-for="(best, index) in bestSeller" :key="index" class="col">
                    <div class="">
                        <img :src="`${publicPath}${best.img}`" style="width:180px;">
                    </div>
                    <p class="truncate mb-1" style="font-size: 12px;">{{ best.name }}</p>
                    <p class="mb-2 " style="font-size: 12px;">₹{{ best.price }}</p>
                </div>
            </div>
            <div class="d-none d-md-flex justify-content-between overflow-x-scroll gap-3 px-2">
                <div v-for="(best, index) in bestSeller" :key="index">
                    <div class="w-100">
                        <img :src="`${publicPath}${best.img}`" style="width:250px;">
                    </div>
                    <p class="truncate mb-1" style="font-size: 12px;">{{ best.name }}</p>
                    <p class="mb-2 " style="font-size: 12px;">₹{{ best.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HomeCategory from './HomeCategory.vue'
export default {
    name: 'HomeCollection',
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    components: {
        HomeCategory
    },
    computed: {
        collections() {
            return this.$store.getters['collection/getCollections']
        },
        categories() {
            return this.$store.getters['collection/getCategories']
        },
        bestSeller() {
            return this.$store.getters['collection/getBestSeller']
        },
        showPrevious() {
            const gallery = this.$refs.gallery;
            return gallery.scrollLeft > 0;
        },
        showNext() {
            const gallery = this.$refs.gallery;
            return gallery.scrollLeft + gallery.offsetWidth < gallery.scrollWidth;
        },
    },
    methods: {
        scrollGallery(direction) {
            const gallery = this.$refs.gallery;
            const scrollAmount = direction * 400;
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behavior: "smooth", // Adding smooth scroll behavior
            });
        },
    },

}
</script>
<style>
#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

.moving-text {
    animation: moveLeft 10s linear infinite;
}

@keyframes moveLeft {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.prev-icon {
    position: absolute;
    top: 40%;
    left: 0px;
    background-color: #F4B700;
    padding: 8px;
    display: flex;
}

.next-icon {
    position: absolute;
    top: 40%;
    right: 0px;
    background-color: #F4B700;
    padding: 8px;
    display: flex;
}
</style>
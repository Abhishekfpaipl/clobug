<template>
    <div class="mt-4">
        <div class="d-md-none d-flex px-2" v-for="(cat, index) in categories" :key="index">
            <router-link :to="'/catalogs/category' + cat.id" class="d-flex text-decoration-none text-dark">
                <div class="w-50 d-flex flex-column align-items-center justify-content-center"
                    :style="'background-color:' + cat.bgColor" :class="'order-' + cat.order">
                    <p class="mb-0 fs-3 text-uppercase">{{ cat.name }}</p>
                    <p class="mb-0 text-uppercase">{{ cat.title }}</p>
                </div>
                <div class="w-50">
                    <img :src="`${publicPath}${cat.img}`" style="width: 100%;">
                </div>
            </router-link>
        </div>
    </div>
    <div class="position-relative">
        <div class="overflow-container">
            <div class="d-none d-md-flex px-2 gap-2 overflow-scroll" id="scroll" ref="gallery">
                <div v-for="(cat, index) in categories" :key="index">
                    <router-link :to="'/catalogs/category' + cat.id" class="text-decoration-none text-dark">
                        <div style="width: 400px;">
                            <img :src="`${publicPath}${cat.img}`" style="width: 100%; object-fit: cover;">
                            <p class="text-center fs-2" :style="'background-color:' + cat.bgColor">{{ cat.name }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <a class="d-none d-md-block prev-icon" @click="scrollGallery(-1)">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="d-none d-md-block next-icon" @click="scrollGallery(1)">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        categories() {
            return this.$store.getters['collection/getCategories']
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

<style lang="scss" scoped>
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
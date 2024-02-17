<template>
    <div class="" style="padding-top: 60px;">
        <div v-for="(category, index) in categories" :key="index" class="mt-2">
            <router-link :to="'/catalogs/' + category.name" class="text-decoration-none text-dark">
                <div class="d-flex justify-content-between container align-items-center mb-2">
                    <div class="d-flex align-items-center w-100  border-bottom p-2" style="padding-top: 0 !important;">
                        <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center me-3"
                            style="height:80px; width:80px; ">
                            <img :src="category.img" class="rounded-circle"
                                style="width: 100%; height: 100%; object-fit: fill;">
                        </div>
                        <div class="w-75">
                            <h3>{{ category.name }}</h3>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            search: '',
            count: 5,
            isPaused: false,
        }
    },
    computed: {
        categories() {
            return this.$store.getters["catalog/getCategories"];
        },
        categoriesD() {
            return this.$store.getters.getCategoriesD.filter(category => {
                return category.name.toLowerCase().includes(this.search.toLowerCase());
            });
        },
        ...mapState(['num1']),
        updatedNum1() {
            return this.num1;
        },
    },
    methods: {
        showmore() {
            this.count = Object.keys(this.categoriesD).length
        },
        showless() {
            this.count = 5
        },
        stopAnimation() {
            this.isPaused = true;
        },
        startAnimation() {
            this.isPaused = false;
        },
    }
}
</script>

<style scoped>
.list-group-item.active {
    background-color: pink !important;
    color: black !important;
    border-color: pink !important;

}
</style>
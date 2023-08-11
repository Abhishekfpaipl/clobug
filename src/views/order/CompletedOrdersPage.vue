<template>
    <div style="padding-top:80px">
        <!-- <div class="d-flex justify-content-between align-items-center container py-2">
            <i class="bi bi-chevron-left fs-4" @click="goBack()"></i>
            <b>MY ORDERS</b>
            <i class="bi bi-cart fs-4"></i>
        </div> -->
        <div class=" d-md-flex d-block container mb-4 w-100">
            <div class="d-md-block d-none  w-25 me-3">
                <div class="d-flex flex-column p-3 bg-light">
                    <b>cloBug</b>
                    <small>cloBug@gmail.com</small>
                    <small class="text-danger">Get Membership Now</small>
                </div>

                <div class="d-flex flex-column  mb-3">
                    <select class="form-select w-100 my-2" aria-label="Default select example" v-model="filterProperty">
                        <option value="name">Name</option>
                        <option value="oid">ID</option>
                        <option value="color">Color</option>
                        <option value="price">Price</option>
                    </select>
                    <input type="search" class="form-control w-100" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" v-model="searchQuery" @input="searchOrders"
                        :placeholder="'search by ' + filterProperty">
                </div>

                <div class="">
                    <p class="my-2" @click="sortHighPrice">Sort by High Price</p>
                    <p class="my-2" @click="sortLowPrice">Sort by Low Price</p>
                    <p class="my-2" @click="sortAscendingDate">Sort by Oldest Date</p>
                    <p class="my-2" @click="sortDescendingDate">Sort by Latest Date</p>
                </div>

                <button class="btn btn-outline-danger w-100">Logout</button>
            </div>

            <div class="d-block d-md-none">
                <div class="d-flex justify-content-between mb-3">
                    <div class="input-group ">
                        <input type="search" class="form-control-sm" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default" v-model="searchQuery" @input="searchOrders"
                            :placeholder="'search by ' + filterProperty">
                        <span class="input-group-text" id="inputGroup-sizing-default"><i class="bi bi-search"></i></span>
                    </div>
                    <div class="d-flex gap-2 px-2">
                        <button class="btn btn-outline-warning">
                            <i class="bi bi-funnel fs-2" data-bs-toggle="offcanvas" data-bs-target="#Filter"
                                aria-controls="Filter"></i>
                        </button>
                        <button class="btn btn-outline-warning">
                            <i class="bi bi-arrow-down-up fs-2" data-bs-toggle="offcanvas" data-bs-target="#Sort"
                                aria-controls="Sort"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Sort -->
            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="Sort" aria-labelledby="SortLabel" style="height:50vh">
                <div class="offcanvas-header border bottom">
                    <h5 class="offcanvas-title" id="SortLabel">Sort</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="">
                        <p class="my-2" @click="sortHighPrice">Sort by High Price</p>
                        <p class="my-2" @click="sortLowPrice">Sort by Low Price</p>
                        <p class="my-2" @click="sortAscendingDate">Sort by Ascending Date</p>
                        <p class="my-2" @click="sortDescendingDate">Sort by Descending Date</p>
                    </div>

                </div>
            </div>
            <!-- Filter -->
            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="Filter" aria-labelledby="FilterLabel"
                style="height: 40vh;">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="FilterLabel">Filter</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <select class="form-select w-100 my-2" aria-label="Default select example" v-model="filterProperty">
                        <option value="name">Name</option>
                        <option value="oid">ID</option>
                        <option value="color">Color</option>
                        <option value="price">Price</option>
                    </select>
                </div>
            </div>
            <div class="w-100">
                <div v-for="(product, index) in searchedAndSortedOrders" :key="index" class="border p-2 mb-2">
                    <div class="bg-light d-flex  justify-content-between p-2 border ">
                        <b>Order ID: {{ product.oid }}</b>
                        <div class="d-flex gap-2">
                            <p class="mb-0">{{ product.date }}</p>
                            <a href="#" class="text-decoration-none text-success">Invoice</a>
                        </div>
                    </div>
                    <div class="d-flex mt-2 ">
                        <img :src="product.img" class="" style="height:155px; width: 125px;object-fit: fill;">

                        <div class="d-flex flex-column justify-content-between w-100">
                            <div class="ms-2 ">
                                <b class="">{{ product.name }}</b>
                                <div class="d-flex justify-content-between w-100" @click="showOrderDetail(product)">
                                    <div class="d-flex flex-column">
                                        <b class="text-muted py-2">
                                            <i v-if="product.status !== 'Delivered'"
                                                class="bi bi-record-circle-fill text-success"></i>
                                            <i v-if="product.status === 'Delivered'"
                                                class="bi bi-circle-fill text-success"></i>
                                            {{ product.status }}
                                        </b>
                                        <b class="text-muted">Estimated delivery By{{ product.estimate }}</b>
                                        <div v-if="product.status === 'Delivered'" class="my-2 ">
                                            <p class="mb-0 text-success border-bottom" @click="showActiveOrder(product)">
                                                Track
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="product.status === 'Delivered'">
                                    <p class="mb-0">Product Rating</p>
                                    <StarRating :maxStars="5" :initialRating="productRating" @rated="updateProductRating" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="bi bi-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div v-if="Object.keys(activeOrderDetail).length !== 0">
            <div class="offcanvas offcanvas-end show " data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel">
                <div class="d-flex justify-content-between bg-light px-2 border-bottom align-items-center">
                    <i class="bi bi-arrow-left"></i>
                    <p class="mb-0">Order Details</p>
                    <p class="mb-0" @click="hideOrderDetail()"><i class="bi bi-x fs-1"></i></p>
                </div>
                <div class="offcanvas-body p-2">
                    <div class="d-flex justify-content-between border-bottom bg-light p-3">
                        <p class="mb-0">{{ activeOrderDetail.oid }}</p>
                        <p class="mb-0">{{ activeOrderDetail.date }}</p>
                    </div>
                    <div class="d-flex border-bottom py-2">
                        <img :src="activeOrderDetail.img" class="" style="height:155px; width: 125px;object-fit: fill;">

                        <div class="d-flex flex-column ms-2 ">
                            <b class="">{{ activeOrderDetail.name }}</b>
                            <div class="">
                                <span>Size : {{ activeOrderDetail.size }}</span><span class="mx-2">|</span><span>Qty : {{
                                    activeOrderDetail.qty
                                }}</span>
                            </div>
                            <b>₹ {{ activeOrderDetail.price }}</b>
                            <small class="text-muted">Order can't be cancelled once it is shipped.</small>

                        </div>

                    </div>
                    <div class="container mt-2">
                        <h1>Order Status</h1>
                        <OrderStepper :activeIndex="activeStep" />
                        <button class="btn btn-primary mt-3" @click="nextStep">Next Step</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StarRating from './StarRating.vue';
import OrderStepper from './OrderStepper.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'RunningOrders',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            activeStep: 0,
            searchQuery: '',
            filterProperty: 'name',
            sortDirection: 'descending',
            sortProperty: 'price',
            colorSearchQuery: '',
        }
    },
    computed: {
        ...mapGetters('order', ['completedOrders']),
        searchedAndSortedOrders() {
            const searchKeywords = this.searchQuery.toLowerCase().split(' ');
            const filteredOrders = this.completedOrders.filter(order => {
                const propertyValue = order[this.filterProperty];
                if (propertyValue === undefined) {
                    return false; // Filter out orders without the selected property
                }
                const stringValue = propertyValue.toString().toLowerCase();
                // Check if any of the search keywords match the order's property value
                return searchKeywords.some(keyword => stringValue.includes(keyword));
            });
            // Apply color search if colorSearchQuery is provided
            let filteredAndColoredOrders = filteredOrders;
            if (this.colorSearchQuery) {
                const colorSearchKeywords = this.colorSearchQuery.toLowerCase().split(' ');
                filteredAndColoredOrders = filteredOrders.filter(order => {
                    const colorValue = order.color.toLowerCase();
                    return colorSearchKeywords.some(keyword => colorValue.includes(keyword));
                });
            }
            // Sorting based on price and date
            const sortedOrders = [...filteredAndColoredOrders].sort((a, b) => {
                const priceA = parseFloat(a.price);
                const priceB = parseFloat(b.price);

                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();

                if (this.sortProperty === 'price') {
                    if (this.sortDirection === 'ascending') {
                        return priceA - priceB;
                    } else {
                        return priceB - priceA;
                    }
                } else if (this.sortProperty === 'date') {
                    if (this.sortDirection === 'ascending') {
                        return dateA - dateB;
                    } else {
                        return dateB - dateA;
                    }
                }
            });

            return sortedOrders;
        },
        // completed() {
        //     return this.$store.getters['order/getOrders']
        // },
        activeOrderDetail() {
            return this.$store.getters['order/getActiveOrderDetail']
        },


    },
    components: {
        StarRating,
        OrderStepper
    },
    methods: {
        updateProductRating(rating) {
            this.productRating = rating;
        },
        showOrderDetail(product) {
            this.$store.dispatch('order/selectOrderDetail', product)
        },
        hideOrderDetail() {
            this.$store.dispatch('order/hideOrderDetail')
        },
        nextStep() {
            this.activeStep = Math.min(this.activeStep + 1, 4);
        },
        goBack() {
            window.history.back()
        },
        sortHighPrice() {
            this.sortProperty = 'price';
            this.sortDirection = 'descending';
            this.$store.commit('order/setSortingMethod', this.sortDirection);
        },
        sortLowPrice() {
            this.sortProperty = 'price';
            this.sortDirection = 'ascending';
            this.$store.commit('order/setSortingMethod', this.sortDirection);
        },
        sortAscendingDate() {
            this.sortProperty = 'date';
            this.sortDirection = 'ascending';
            this.$store.commit('order/setSortingMethod', this.sortDirection);
        },
        sortDescendingDate() {
            this.sortProperty = 'date';
            this.sortDirection = 'descending';
            this.$store.commit('order/setSortingMethod', this.sortDirection);
        },
    },
}
</script>
<style></style>
<template>
    <h1 class="text-center mt-4">You May Also Like</h1>
    <div class="container" style="padding-top:20px;padding-bottom:80px">
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
            <div class="col" v-for="(product, index) in products" :key="index">
                <div class="card show-on-hover rounded-0">
                    <router-link :to="'/product-page/' + product.id" class="text-decoration-none text-dark">
                        <div :id="'productImages' + index" class="carousel slide">
                            <div class="carousel-inner">
                                <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                    :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in product.images"
                                    :key="imgIndex">
                                    <img :src="image" class="card-img-top rounded-0" alt="" style="min-height:100px;">
                                </div>
                            </div>
                            <div class="d-flex mt-1" id="scroll" style="overflow-x: scroll;">
                                <button type="button" class="rounded-circle p-0 border me-1"
                                    :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                    :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                                    v-for="(image, imgIndex) in product.images" :key="imgIndex">
                                    <img :src="image" class="rounded-circle" alt=""
                                        style="width: 35px; height: 35px; object-fit: fill;">
                                </button>
                            </div>
                        </div>
                    </router-link>
                    <div class=" position-absolute w-100 soh-div">
                        <div class="d-flex justify-content-end align-items-start p-2">
                            <p class="m-0" @click="saveProduct(product.id)"><i class="bi bi-heart"></i></p>
                        </div>
                    </div>

                    <div class="card-body" style="padding:3px">
                        <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                            <p class="m-0 fw-bold" style="font-size:13px;">₹{{ product.price }} / pc</p>
                            <p class="m-0 fw-bold" style="font-size:13px;">{{ product.type }}</p>
                        </div>
                    </div>

                    <div class="card-footer p-0">
                        <div class="btn-group w-100 rounded-bottom overflow-hidden" style="opacity: .85;">
                            <button class="btn bg-outline-dark rounded-0" @click="showActive(product)">
                                <i class="bi bi-plus-square"></i> <span>Quick Add</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


    <div v-if="Object.keys(activeProduct).length !== 0">
        <div class="offcanvas offcanvas-bottom show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel" style="height: calc(70% - 100px);">
            <div class="d-flex justify-content-center align-items-center border-bottom">
                <div class=" w-100 d-flex justify-content-center align-items-center">
                    <p class="fw-bold text-center m-0">Product Performance</p>
                </div>
                <div class="d-flex justify-content-end w-100">

                    <button type="button" class="btn" @click="hideActive()"><i class="bi bi-x fs-3"></i></button>
                </div>
            </div>
            <div class="offcanvas-body ">
                <div class="border-bottom pb-3">
                    <div class="d-flex gap-3 align-item-center">
                        <p class="mb-1">Color : </p>
                        <div v-if="selectedColor">
                            <img :src="selectedColor" class="rounded-circle"
                                style="width:40px;height:40px; object-fit: fill;">
                        </div>
                    </div>
                    <div class=" d-flex mt-2">
                        <div class="me-2" v-for="(color, index) in activeProduct.colors" :key="index">
                            <input type="radio" name="product-color" class="btn-check" :id="'selectProductColor' + index"
                                autocomplete="off" :value="color" v-model="selectedColor" checked>
                            <label class="btn btn-outline-dark border-light rounded-circle p-0"
                                :for="'selectProductColor' + index">
                                <img class="rounded-circle" :src="color"
                                    style="width:40px;height:40px; object-fit: fill; margin: 0.05rem;" />
                            </label>
                        </div>
                    </div>
                </div>

                <div class="py-3 border-bottom">
                    <div class="d-flex  gap-3">
                        <p class="mb-1">Size :</p>
                        <div v-if="selectedSize">
                            {{ selectedSize }}
                        </div>
                    </div>
                    <div class="d-flex">
                        <div v-for="(size, index) in activeProduct.sizes" :key="index" class="">
                            <input type="radio" class="btn-check" name="option" :id="'option' + size.id" autocomplete="off"
                                :value="size.name" v-model="selectedSize" checked>
                            <label class="btn btn-outline-success m-2" :for="'option' + size.id">{{
                                size.name }}</label>
                        </div>
                    </div>
                </div>
                <div class="my-3">
                    <button class="btn btn-dark w-100" @click="addToCart(activeProduct.id)">Add To
                        Cart</button>
                </div>
            </div>
        </div>
    </div>

    <div v-if="showPopup" class="popup d-flex justify-content-center align-items-center">
        <div class="text-center ">
            Item added to wishlist!
        </div>
    </div>
    <div v-if="showPopupCart" class="popup d-flex justify-content-center align-items-center">
        <div class="text-center ">
            Item added to cart!
        </div>
    </div>
</template>
<script>
export default {
    name: "CardCatelog",
    data() {
        return {
            publicPath: process.env.BASE_URL,
            showPopup: false,
            selectedColor: null,
            selectedSize: null,
            showPopupCart: false,
        }
    },
    computed: {
        products() {
            return this.$store.getters['catalog/getProducts']
        },
        activeProduct() {
            return this.$store.getters['catalog/getActiveProduct']
        }
    },
    methods: {
        saveProduct(productId) {
            this.$store.dispatch('catalog/saveProduct', productId)
            this.showPopup = true;
            setTimeout(() => {
                this.showPopup = false;
            }, 2000);
        },
        addToCart() {
            const test = {
                productId: this.activeProduct.id,
                color: this.selectedColor,
                size: this.selectedSize,
            }
            this.$store.dispatch('catalog/AddToCart', test);
            this.showPopupCart = true;
            setTimeout(() => {
                this.showPopupCart = false
            }, 2000);
            this.selectedColor = null;
            this.selectedSize = null;
        },
        showActive(product) {
            this.$store.dispatch('catalog/selectActiveProduct', product)
        },
        hideActive() {
            this.$store.dispatch('catalog/hideActiveProduct')
            this.selectedColor = null
            this.selectedSize = null
        }
    },
}
</script>
<style scoped>
.show-on-hover .soh-div {
    opacity: .75;
}

.show-on-hover:hover .soh-div {
    opacity: 1;
}

#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: greenyellow;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    z-index: 1000;
}
</style>

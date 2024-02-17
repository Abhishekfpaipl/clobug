<template>
    <ProductTopNav></ProductTopNav>
    <div class="prod container bg-light mt-3" style="padding-top: 60px;">
        <div class="row">
            <div class="col-12 d-md-none d-flex prod-img">
                <div class="d-flex flex-column prod-thumb" id="scroll">
                    <img class="" :src="`${publicPath}${image}`" style="width: 60px" v-for="(image, index) in product.images" :key="index"
                        v-on:click="selectImage(image)" />
                </div>
                <div class="ms-2 main-img">
                    <img :src="`${publicPath}${selectedImage}`" class="flex-fill" style="width: 100%;" />
                </div>
            </div>


            <div class="col-md-8 col-12 d-none d-md-flex flex-wrap">
                <div class="row p-0" style="height: fit-content;">
                    <div v-for="(image, index) in product.images" :key="index" class="col-6 p-0">
                        <div v-if="index < imgCount">
                            <img :src="`${publicPath}${image}`" class="flex-fill" style="width: 100%;height: 100%;"
                                data-bs-toggle="modal" data-bs-target="#imageGalleryModal" />
                        </div>
                        <div v-if="index === imgCount - 1" class="">
                            <p class="text-center mb-0" data-bs-toggle="modal" data-bs-target="#imageGalleryModal">View More
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="col-lg-5 d-flex prod-img">
                <div class="d-flex flex-column prod-thumb" id="scroll">
                    <img class="prod-thumb-img" :src="image" style="width: 60px;" v-for="(image, index) in product.images"
                        :key="index" v-on:click="openImageGallery(index); selectImage(image)" />
                </div>
                <div class="ms-2 main-img">
                    <img :src="selectedImage" class="flex-fill" style="width: 100%;" data-bs-toggle="modal"
                        data-bs-target="#imageGalleryModal" />
                </div>


            </div> -->
            <div class="modal fade" id="imageGalleryModal" tabindex="-1" aria-labelledby="imageGalleryModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-fullscreen-sm-down">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="imageGalleryModalLabel">Image Gallery</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item" v-for="(image, index) in product.images" :key="index"
                                        :class="{ active: index === selectedImageIndex }">
                                        <img :src="`${publicPath}${image}`" class="d-block w-100" alt="Image">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 prod-details">
                <div class="d-flex justify-content-between align-items-center bg-white p-2 mb-2">
                    <div class="">
                        <p class="mb-0 fw-bold fs-4">{{ product.name }}</p>
                        <small class="text-muted">{{ product.type }}</small>
                        <p class="mb-0 fs-4 fw-bold">₹ {{ product.price }}</p>
                    </div>
                    <div class="d-flex gap-2 fs-5">
                        <div class="d-flex gap-2" @click="saveProduct(product.id)">
                            <i class="bi bi-heart"></i>
                        </div>
                        <div class="d-flex gap-2 fs-5">
                            <i class="bi bi-share"></i>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-2 my-2">
                    <p class="fw-bold">Color</p>
                    <div class="d-flex flex-wrap ">
                        <div class="me-2" v-for="(color, index) in product.colors" :key="index">
                            <input type="radio" name="product-color" class="btn-check" :id="'selectProductColor' + index"
                                autocomplete="off" :value="color" v-model="selectedColor" checked>
                            <label class="btn btn-outline-dark border-light rounded-circle p-0"
                                :for="'selectProductColor' + index">
                                <img class="rounded-circle" :src="`${publicPath}${color.img}`"
                                    style="width:40px;height:40px; object-fit: cover; margin: 0.05rem;" />
                            </label>
                        </div>
                    </div>
                </div>

                <div class="bg-white my-2 p-2">
                    <div class="d-flex justify-content-between">
                        <p class="fw-bold ">Size</p>
                        <p class="mb-0 text-success" data-bs-toggle="offcanvas" data-bs-target="#sizeChart"
                            aria-controls="sizeChart">Size Chart</p>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="d-flex">
                            <div v-for="(size, index) in product.sizes" :key="index" class="">
                                <input type="radio" class="btn-check" name="option" :id="'option' + size.id"
                                    autocomplete="off" :value="size.name" v-model="selectedSize" checked />
                                <label class="btn btn-outline-success m-2" :for="'option' + size.id">
                                    {{ size.name }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <ProductSize :product="product"></ProductSize>


                <div class="bg-white my-2 p-2 d-md-block d-none">
                    <button v-if="product.stock" @click="addToCart"
                        class="btn w-100 d-flex justify-content-center  align-items-center text-center"
                        style="background-color: #FEBF00;">
                        <i class="bi bi-cart fs-5"></i>
                        <p class="text-center m-0 ms-2">Add to cart</p>
                    </button>
                    <button v-else @click="notifyMe"
                        class="btn btn-dark w-100 d-flex justify-content-center  align-items-center text-center">
                        <i class="bi bi-cart fs-5"></i>
                        <p class="text-center m-0 ms-2">Notify Me</p>
                    </button>
                </div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="sizeChart" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header border-bottom">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Size Chart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body px-2">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#SizeChart-tab-pane" type="button" role="tab"
                                    aria-controls="SizeChart-tab-pane" aria-selected="true">SizeChart</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Fit-tab" data-bs-toggle="tab" data-bs-target="#Fit-tab-pane"
                                    type="button" role="tab" aria-controls="Fit-tab-pane" aria-selected="false">Fit
                                    Guide</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Measure-tab" data-bs-toggle="tab"
                                    data-bs-target="#Measure-tab-pane" type="button" role="tab"
                                    aria-controls="Measure-tab-pane" aria-selected="false">How To Measure</button>
                            </li>

                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="SizeChart-tab-pane" role="tabpanel"
                                aria-labelledby="SizeChart-tab" tabindex="0">
                                <SizeChart class="py-2 mt-2"></SizeChart>
                            </div>
                            <div class="tab-pane fade" id="Fit-tab-pane" role="tabpanel" aria-labelledby="Fit-tab"
                                tabindex="0">
                                <div class="mt-2">
                                    <img :src="img" style="width: 100%;">
                                </div>
                            </div>
                            <div class="tab-pane fade" id="Measure-tab-pane" role="tabpanel" aria-labelledby="Measure-tab"
                                tabindex="0">
                                <div class="mt-2">
                                    <img :src="measureImg" style="width: 100%;">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="bg-white p-2 my-2">
                    <div class="d-flex justify-content-between">
                        <p class="fw-bold fs-5">Delivery Info</p>
                        <i class="bi bi-question-circle"></i>
                    </div>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" placeholder="Enter a pincode"
                            aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn bg-dark text-white" type="button" id="button-addon2">Check</button>
                    </div>
                    <p class="m-0">Delivery date: Enter pincode to check</p>
                    <p class="m-0">Fast Delivery might be available on this product!</p>
                </div>

                <ProductDetails :product="product"></ProductDetails>



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
    </div>

    <div class="d-md-none   ">
        <div class="w-100 d-flex align-items-center position-fixed "
            style="height: 63px; z-index: 10; bottom: 0; background: #f6f6f6;">
            <div class="d-flex justify-content-around" style="width: 30%;">
                <div class="items">
                    <routerLink to="/" class="text-dark text-decoration-none">
                        <div class="inner-items">
                            <i class="bi bi-shop-window fs-5"></i>
                        </div>
                    </routerLink>
                </div>
                <div class="items">
                    <router-link to="" class="text-dark text-decoration-none">
                        <div class="inner-items">
                            <button class="btn bg-outline-dark p-0" @click="saveProduct(product.id)">
                                <i class="bi bi-heart fs-5"></i>
                            </button>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="me-3" style="width: 70%;">
                <div class="items">
                    <button @click="addToCart(product.id)"
                        class="btn w-100 d-flex justify-content-center align-items-center text-center"
                        style="background-color: #F4B700;">
                        <i class="bi bi-cart fs-5"></i>
                        <p class="text-center m-0 ms-2">Add to cart</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductTopNav from '@/components/Navbar/ProductTopNav.vue';
import ProductDetails from '@/components/Product/ProductDetails.vue';
import ProductSize from '@/components/Product/ProductSize.vue';
import SizeChart from '@/components/Product/SizeChart.vue';

export default {
    data() {
        return {
            selectedImage: {},
            selectedColor: null,
            selectedSize: 'F',
            quantity: 1,
            publicPath: process.env.BASE_URL,
            img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/sizechart-images/Solids-Rusty-Red-Women-Cropped-Top_FG_WEB_mcnBLsO.jpg?format=webp&w=400&dpr=1.3',
            measureImg: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/sizechart-images/Solids-Rusty-Red-Women-Cropped-Top_FG_WEB_MEASURE_M02UEvv.jpg?format=webp&w=400&dpr=1.3',
            showPopup: false,
            showPopupCart: false,
            imgCount: 4,
            selectedImageIndex: 0,
        };
    },
    components: {
        SizeChart,
        ProductDetails,
        ProductSize,
        ProductTopNav
    },
    mounted() {
        this.selectedImage = this.product.images[0];
    },
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters['catalog/getProduct'](productId);
        },
    },
    methods: {
        openImageGallery(index) {
            this.selectedImageIndex = index;
        },
        selectImage(image) {
            this.selectedImage = image;
        },
        addToCart() {
            const test = {
                productId: this.product.id,
                color: this.selectedColor,
                size: this.selectedSize,
            }
            this.$store.dispatch('catalog/AddToCart', test);
            this.showPopupCart = true;
            setTimeout(() => {
                this.showPopupCart = false;
            }, 500);
        },
        saveProduct(productId) {
            this.$store.dispatch('catalog/saveProduct', productId);
            this.showPopup = true;
            setTimeout(() => {
                this.showPopup = false;
            }, 1000);
        },
    },
}
</script>

<style scoped>
@media (max-width:999px) {
    .prod {
        padding-top: 45px !important;
    }

    .prod-img {
        display: flex;
        flex-direction: column-reverse;
        padding: 0px !important;
    }

    .prod-thumb {
        flex-direction: row !important;
        gap: 1rem;
        margin: 1rem 2rem 1rem 2rem;
        overflow: scroll;
    }

    .main-img {
        width: 100%;
        margin-left: 0px !important;
    }

    .prod-details {
        padding: 16px 0;
    }
}

@media (min-width:1000px) {
    .main-img img {
        position: sticky;
        top: 70px;
    }
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

.count {
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

<template>
    <div class="bg-light mt-4" style="padding-bottom: 65px;">
        <div class="d-md-flex flex-column-sm px-2">
            <div class="d-flex align-items-center justify-content-center">
                <img :src="`${publicPath}${img}`" style="width: 300px;object-fit: contain;">
            </div>
            <div :key="currentIndex" class="my-2 border p-2 w-100">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="mb-0 ">{{ currentReview.name }}</p>
                    <p class="mb-0 bg-light p-2"><i class="bi bi-patch-check-fill text-dark"></i> Verified Customers</p>
                </div>
                <div class="">
                    <p class="mb-0">{{ currentReview.text }}</p>
                    <p class="mb-0"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                            class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                </div>
            </div>
        </div>

        <div class="d-md-flex flex-column-sm justify-content-between px-3 mt-5">
            <div class="mb-3">
                <p class="mb-2 fw-bold">Welcome to cloBug</p>
                <p class="mb-2">Social Responsibility</p>
                <p class="mb-2">Sustainability</p>
                <p class="mb-2">Our Factory</p>
            </div>
            <div class="mb-3">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Support: support@clobug.com</p>
                <p class="mb-2">Legal: legal.india@clobug.com</p>
                <p class="mb-2">Press: press.india@clobug.com</p>
            </div>
            <div class="mb-3">
                <p class="mb-2 fw-bold">Help</p>
                <p class="mb-2">Payment Methods</p>
                <p class="mb-2">Shipping & Delivery</p>
                <p class="mb-2">Return Policy</p>
            </div>
            <div class="mb-3">
                <p class="mb-2 fw-bold">Policies</p>
                <p class="mb-2">Terms & Conditions</p>
                <p class="mb-2">Privacy Policy</p>
            </div>
        </div>
        <div class="d-flex flex-column align-items-start-sm align-items-center justify-content-center px-3">
            <div class="d-flex gap-3">
                <i class="bi bi-instagram fs-1"></i>
                <i class="bi bi-twitter fs-1"></i>
                <i class="bi bi-facebook fs-1"></i>
            </div>
            <p class="fs-1">cloBug</p>
            <p>cloBug India, Okhla Phase II, New Delhi, India. Copyright © CLOBUG (INDIA) LIMITED. All rights reserved</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/footer/gplay.png",
            currentIndex: 0,
            customerReviews: [
                {
                    id: 1,
                    name: 'Rashmi Chainani',
                    text: "Great product, exceeded my expectations!",
                    star: ""
                },
                {
                    id: 2,
                    name: 'Ritika jamwal',
                    text: "Excellent customer service. Highly recommended.",
                    star: ""
                },
                {
                    id: 1,
                    name: 'Arpitha Kannan',
                    text: "Love the quality and pricing. Will buy again.",
                    star: ""
                },
            ]
        }
    },
    computed: {
        currentReview() {
            return this.customerReviews[this.currentIndex];
        }
    },
    mounted() {
        this.startSlider();
    },

    methods: {
        startSlider() {
            this.sliderInterval = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.customerReviews.length;
            }, 3000); // 5000 milliseconds = 5 seconds
        }
    },
    beforeUnmount() {
        clearInterval(this.sliderInterval);
    }



}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}
</style>

<template>
    <div style="padding-top: 60px;">
        <FaqTopBar>Customer</FaqTopBar>
        <div class="container bg-light my-3 py-3">
            <p class="mb-0">We're Here To Help !</p>
            <div class="row justify-content-around mt-2">
                <div v-for="(f, index) in faq" :key="index" class="col-6 text-center bg-white border rounded">
                    <router-link :to="'/' + f.link" class="text-decoration-none text-dark">
                        <div class="">
                            <i :class="f.icon"></i>
                            <p>{{ f.text }}</p>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FaqTopBar from '@/components/Navbar/FaqTopBar.vue';
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            faq: [
                {
                    id: 1,
                    icon: 'bi bi-person fs-1',
                    text: 'Account',
                    link: 'faqs/account'
                },
                {
                    id: 2,
                    icon: 'bi bi-journal-richtext fs-1',
                    text: 'Orders',
                    link: 'faqs/order',
                },
                {
                    id: 3,
                    icon: 'bi bi-wallet fs-1',
                    text: 'Payments',
                    link: 'faqs/payment',
                },
                {
                    id: 4,
                    icon: 'bi bi-truck fs-1',
                    text: 'Delivery',
                    link: 'faqs/delivery',
                },
                {
                    id: 5,
                    icon: 'bi bi-arrow-repeat fs-1',
                    text: 'Returns',
                    link: 'faqs/returns',
                },
                {
                    id: 6,
                    icon: 'bi bi-box fs-1',
                    text: 'Product & Stock',
                    link: 'faqs/stock',
                },
                {
                    id: 7,
                    icon: 'bi bi-person fs-1',
                    text: 'Care Instructions',
                    link: 'faqs/care-instructions',
                },
                {
                    id: 8,
                    icon: 'bi bi-ticket fs-1',
                    text: 'Promotions',
                    link: 'faqs/promotions',
                },
                {
                    id: 9,
                    icon: 'bi bi-pentagon fs-1',
                    text: 'Membership',
                    link: 'faqs/membership',
                },

            ]
        }
    },
    components: {
        FaqTopBar
    }
}
</script>
<template>
    <div class="">
        <FaqTopBar>Promotion</FaqTopBar>
        <div class="accordion" id="accordionExample">
            <div v-for="(pro, index) in promotionFaq" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#pro' + index" aria-expanded="true" :aria-controls="'pro' + index">
                        {{ pro.id }}. {{ pro.question }}
                    </button>
                </h2>
                <div :id="'pro' + index" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>{{ pro.answer }}</p>
                    </div>
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
            promotionFaq: [
                {
                    id: 1,
                    question: 'Are there any discounts avaiable?',
                    answer: "We keep on running different offers and promotional activities from time to time. Please keep a check on our app and website to know about current offers and promotions and shop accordingly.",
                },
                {
                    id: 2,
                    question: 'I have a discount code avaiable; how can I use it?',
                    answer: "You can apply the discount at the checkout page before selecting the payment method. Please contact our Customer Experience team in case you face any issues."
                },
                {
                    id: 3,
                    question: 'Can I use more than one discount code in an order?',
                    answer: "You can apply only one coupon code to an order at a time. If you have more than one coupon code, you may use them in your next purchase."
                },
                {
                    id: 4,
                    question:"Why am I not able to apply for the coupon that I have received?",
                    answer: "There could be multiple reasons for this. The coupon code is expired. You have not met the conditions to apply code. You have already applied this code in your previous order."
                },
                {
                    id: 5,
                    question: "Can I use the same coupon code if my order was cancelled by you?",
                    answer: "If your complete order has been cancelled by us due to out-of-stock or any other reason for which you had applied for a coupon, then you would be able to use the same coupon code again in your next purchase. If you face any issues using the same coupon code please reach out to the Customer Experience team via mail at support@clobug.com or chat option on the Urbanic app/website."
                },
            ]
        }
    },
    components: { FaqTopBar }
}
</script>

<style lang="scss" scoped></style>
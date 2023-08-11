<template>
    <div class="">
        <FaqTopBar>Care Instructions</FaqTopBar>
        <div class="accordion" id="accordionExample">
            <div v-for="(care, index) in careFaq" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#care' + index" aria-expanded="true" :aria-controls="'care' + index">
                        {{ care.id }}. {{ care.question }}
                    </button>
                </h2>
                <div :id="'care' + index" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>{{ care.answer }}</p>
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
            careFaq: [
                {
                    id: 1,
                    question: "My product has a colour variation in terms of appearance as compared to what I saw while placing the order. Why?",
                    answer:"There may be some deviation between product color and picture color due to lighting problems - The product shoot happens in a very bright light which might give a darker appearance to the product",
                },
                {
                    id: 2,
                    question: "How do I avoid damage while washing my product?",
                    answer: "Keep the product clean and toss it into your machine - Never EVER dry-clean our products, tumble-dry or bleach them."
                },
                {
                    id: 3,
                    question: "How do I avoid fading on my product?",
                    answer: "Wash cold - With some laundry detergents, you get just as great results even if you wash at lower temperatures – better for the environment and better for your clothes."
                },
                {
                    id: 4,
                    question: "How do I avoid colour bleeding on my product?",
                    answer: "Products spliced with multiple colours will have a slight bleeding phenomenon, showing individuality, which is why wash care is important. Please pay attention to washing separately from other dark products."
                },
                {
                    id: 5,
                    question: "The pattern of the print looks a little different from whtat I saw when I placed the order. Why?",
                    answer: "The whole piece of fabric is printed with patterns - There could be a slight colour and pattern distribution that cannot be the same as the website images. Each piece is unique but the chances of that are close to none"
                },
            ]
        }
    },
    components: { FaqTopBar }
}
</script>

<style lang="scss" scoped></style>
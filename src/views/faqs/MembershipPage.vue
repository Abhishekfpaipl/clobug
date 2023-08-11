<template>
    <div class="">
        <FaqTopBar>Membership</FaqTopBar>
        <div class="accordion" id="accordionExample">
            <div v-for="(mem, index) in membershipFaq" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#mem' + index" aria-expanded="true" :aria-controls="'mem' + index">
                        {{ mem.id }}. {{ mem.question }}
                    </button>
                </h2>
                <div :id="'mem' + index" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>{{ mem.answer }}</p>
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
            membershipFaq: [
                {
                    id: 1,
                    question: "What is the Clobug Membership Program?",
                    answer: "Clobug membership program is Clobug's Loyalty program which is open to its registered users on Clobug. A user has to opt-in to join the program by registering on the membership homepage",
                },
                {
                    id: 2,
                    question: "What are Clobug Points?",
                    answer: "Clobug Points is a first-of-its-kind reward system that can be used to redeem exciting rewards. You can earn and spend Clobug Points on Clobug"
                },
                {
                    id: 3,
                    question: "What do I get for being a member of Clobug Membership Program?",
                    answer: "Clobug membership members get loads of exciting benefits throughout the year that go beyond the ordinary. You earn Clobug Points for buying on the Clobug app or website, which can then be redeemed for a world of benefits including exciting offers, early access to sales, and free shipping."
                },
                {
                    id: 4,
                    question: "Is there a membership fee for the Clobug Membership Program?",
                    answer: "No. There is no membership fee to participate in the Urbanic membership program. All you need to do is visit Urbanic membership and join the program."
                },
                {
                    id: 5,
                    question: "Is there a criterion to join the Clobug Membership Program?",
                    answer: "At present, you only need to bind your mobile phone number to join the Clobug Membership Program."
                },
            ]
        }
    },
    components: { FaqTopBar }
}
</script>

<style lang="scss" scoped></style>
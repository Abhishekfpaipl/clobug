<template>
    <div class="price-input-range border-bottom mb-3 pb-3">
        <label for="price" class="fs-4">Price: {{ calculatedPrice }}</label>
        <input type="range" class="form-range" v-model="sliderValue" min="0" max="100" @input="updatePrice" />
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            sliderValue: 0,
            minPrice: 100, // Minimum price value
            maxPrice: 10000, // Maximum price value
        };
    },
    computed: {
        calculatedPrice() {
            const range = this.maxPrice - this.minPrice;
            const price = this.minPrice + (range * this.sliderValue) / 100;
            return price.toFixed(2); // Display the price with two decimal places
        },
    },
    methods: {
        updatePrice() {
            // You can emit an event or perform any other action with the updated price
            this.$emit("price-updated", this.calculatedPrice);
        },
    },
};
</script>
  
<style scoped>
.price-input-range {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
  
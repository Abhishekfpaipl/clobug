<template>
    <div>

        <!-- <table class="table">
            <thead>
                <tr>
                    <th scope="col">Sizes</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Set(s)</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(size, index) in product.sizes" :key="index">
                    <th scope="row">{{ size.name }}</th>
                    <td>₹{{ product.price }}</td>
                    <td>
                        <button @click="decrement(size)" class="btn btn-light btn-sm border border-1"
                            :disabled="size.quantity <= 1">
                            <i class="bi bi-dash"></i>
                        </button>
                        <input type="number" class="fw-bold form-control-sm px-2 text-center" v-model="size.quantity"
                            :disabled="size.quantity <= 0" style="width: 20%;" />
                        <button @click="increment(size)" class="btn btn-light btn-sm border border-1">
                            <i class="bi bi-plus"></i>
                        </button>
                    </td>
                    <td>₹{{ product.price * size.quantity }}</td>
                </tr>
            </tbody>
            <caption>MOQ 3 Sets each set has 5 colors</caption>
        </table> -->


    </div>
</template>
  
<script>
export default {
    props: ['product'],
    methods: {
        increment(size) {
            size.quantity++;
        },
        decrement(size) {
            size.quantity--;
        },

    },
};
</script>
  
<style lang="scss" scoped></style>
  
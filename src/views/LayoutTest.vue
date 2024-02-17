
<template>
    <div class="masonry-container">
        <div v-for="(product, index) in products" :key="index" class="row" style="padding-top: 80px;">
            <div v-for="(image, imgIndex) in product.images" :key="imgIndex">
                <img :src="image" class="border rounded-0" style="height: 400px;width: 250px;object-fit:contain;">
            </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          // Your data goes here
        ],
      };
    },
    computed: {
        products() {
            return this.$store.getters['catalog/getProducts']
        }
    }
  };
  </script>
  
<style scoped>
.masonry-container {
    display: flex;
    flex-wrap: wrap;
}

.masonry-item {
    width: calc(33.33% - 15px);
    /* Adjust as needed */
    margin: 0 10px 15px;
    box-sizing: border-box;
}
</style>
  
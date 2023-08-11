<template lang="">
  <div class="d-md-none d-block" >
    <div class=" nav-bottom justify-content-evenly border bg-light" style="height: 63px; padding: 0 18px;">
     <div class="items">
        <routerLink to="/"  :class="{'text-dark' : currentRoute ==='HomePage' }" style="text-decoration:none;color:rgb(139, 139, 163);">
          <div class="inner-items py-1 d-flex flex-column">
            <i class="bi bi-shop-window fs-5"></i>
            <p class="m-0" style="font-size:12px">Home</p>
          </div>
        </routerLink>
      </div>

      <div class="items">
        <router-link to="/categories" :class="{'text-dark' : currentRoute ==='CategoryCatalogPage' }" style="text-decoration:none;color:rgb(139, 139, 163);">
          <div class="inner-items py-1 d-flex flex-column">
            <i class="bi bi-grid-1x2 fs-5"></i>
            <p class="m-0" style="font-size:12px">Category</p>
          </div>
        </router-link>
      </div>
      
      <div class="items">
        <div class="inner-items py-1 d-flex flex-column">
            <router-link to="/wishlist" :class="{'text-dark' : currentRoute ==='WishList' }" style="text-decoration:none;color:rgb(139, 139, 163);">
              <i class="bi bi-hearts fs-5"></i>
              <p class="m-0" style="font-size:12px">Wishlist</p>
            </router-link>
        </div>
      </div>
      
      
      <!-- <div class="items">
        <router-link to="SimpleStepper1" :class="{'text-danger' : currentRoute ==='' }" style="text-decoration:none;color:black;">
          <div class="inner-items py-1 d-flex flex-column">
            <i class="bi bi-archive fs-5"></i>
            <p class="m-0" style="font-size:12px">Cart</p>
          </div>
        </router-link>
      </div> -->

      <div class="items">
        <router-link to="/orders/pending" :class="{'text-dark' : currentRoute ==='PendingOrdersPage' }" style="text-decoration:none;color:rgb(139, 139, 163);">
          <div class="inner-items py-1 d-flex flex-column">
            <i class="bi bi-archive fs-5"></i>
            <p class="m-0" style="font-size:12px">Orders</p>
          </div>
        </router-link>
      </div>

      <div class="items">
        <router-link to="/contact-us" :class="{'text-dark' : currentRoute ==='ContactUs' }" style="text-decoration:none;color:rgb(139, 139, 163);">
          <div class="inner-items py-1 d-flex flex-column">
            <i class="bi bi-chat-dots fs-5"></i>
            <p class="m-0" style="font-size:12px">Support</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomNav',
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
};
</script>
<style>
.items {
  display: flex;
  text-align: center;
}

.nav-bottom {
  height: 20%;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  background: #F6F6F6;
}
</style>

<template>
  <!-- Mobile version starts -->
  <div class="" style="padding-top: 60px;">
    <video controls loop style="width: 100%;height: 80vh;">
      <source src="https://buyer-video-in.urbanic.com/eva/2e1b72cbf30d4586ab188ba6dce31734.mp4">
      <source src="https://buyer-video-in.urbanic.com/eva/6b3cc46ede954740865b2e887403f9c7.mp4" type="video/ogg">
      <source src="https://buyer-video-in.urbanic.com/eva/6b3cc46ede954740865b2e887403f9c7.mp4" type="video/avi">
    </video>
    <HomeCollection></HomeCollection>
    <HomePageCard></HomePageCard>
    <!-- <FooterNav/> -->
  </div>
</template>

<script>
// import FooterNav from '@/components/Footer/FooterNav.vue';
import HomeCollection from '@/components/Collections/HomeCollection.vue';
import HomePageCard from '@/components/Collections/HomePageCard.vue';
export default {
  name: "HomePage",
  components: {
    // FooterNav,
    HomeCollection,
    HomePageCard
  },
};
</script>
<style scoped>
@media (min-width:998px) {

  .dropstart .dropdown-menu[data-bs-popper] {
    top: 50px !important;
  }
}
</style>
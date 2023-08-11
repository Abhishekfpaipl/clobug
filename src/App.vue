<template>
  <common-top-nav v-if="!hide" class=""></common-top-nav>
  <router-view class="" />
  <footer-nav v-if="!dont"></footer-nav>
  <bottom-nav v-if="!dont" class=" position-fixed w-100 bg-white" style="bottom: 0; z-index:1;"></bottom-nav>
</template>
<script>
import FooterNav from './components/Footer/FooterNav.vue';
import BottomNav from './components/Navbar/BottomNav.vue';
import CommonTopNav from './components/Navbar/CommonTopNav.vue';
export default {
  components: {
    BottomNav,
    CommonTopNav,
    FooterNav
},
  computed: {
    hide() {
      const hiddenPages = ['CollectionList', 'CartPage', 'AddressPage', 'PaymentPage', 'LoginPage', 'RegistrationPage', 'ForgotPasswordPage', 'EmailVerificationPage']
      return hiddenPages.includes(this.$route.name)
    },
    dont() {
      const hiddenPages = ['LoginPage', 'RegistrationPage', 'ForgotPasswordPage', 'EmailVerificationPage', 'CartPage', 'AddressPage', 'PaymentPage']
      return hiddenPages.includes(this.$route.name)
    }
  }
}

</script>

<style>
.truncate {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>

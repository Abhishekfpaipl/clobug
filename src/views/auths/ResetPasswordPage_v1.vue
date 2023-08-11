<template>
    <HomeTopnav></HomeTopnav>
    <div class="container">
        <div class="d-flex flex-column align-items-center text-center">
            <i class="bi bi-person-lock text-info" style="font-size:100px;"></i>
            <h1>Reset Password</h1>
        </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="resetPassword">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="form-group">
              <label for="newPassword">New Password</label>
              <input type="password" class="form-control" id="newPassword" v-model="newPassword" required>
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
            </div>
            <div class="d-flex justify-content-center mt-4">
                <button type="submit" class="btn btn-primary">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HomeTopnav from '@/components/NavBar/HomeTopnav.vue'
  export default {
    data() {
      return {
        email: '',
        newPassword: '',
        confirmPassword: ''
      };
    },
    components: {
        HomeTopnav
    },
    methods: {
      resetPassword() {
        alert('Password reset successful!');
        this.email = '';
        this.newPassword = '';
        this.confirmPassword = '';
      }
    }
  };
  </script>
  
  
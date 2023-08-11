<template>
    <div style="min-height: 100vh;background-color:#F4B700;">
        <ClobugLogo></ClobugLogo>
        <div class="px-4 pb-5">
            <div class="text text-center">
                <p class="fs-5 mt-4">Register</p>
            </div>
            <div class="inputss ">

                <div class="w-100 p-2 form-floating container">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="name">
                    <label for="floatingInput" class="text-muted">Enter your Name</label>
                </div>
                <div class="w-100 p-2 form-floating container">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="email">
                    <label for="floatingInput" class="text-muted">Enter your Email</label>
                </div>
                <div class="w-100 p-2 form-floating container">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Email" v-model="password">
                    <label for="floatingInput" class="text-muted">Password</label>
                </div>
                <div class="w-100 p-2 form-floating container">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Email"
                        v-model="confirmPassword">
                    <label for="floatingInput" class="text-muted">Confirm Password</label>
                </div>

                <div class="mt-4 text-center">
                    <router-link to="/email-verification-page">
                        <button class="w-75 btn btn-warning border rounded-pill">Submit</button>
                    </router-link>
                </div>
            </div>
            <div class="text-center container my-3">
                <p>By proceeding, you agree to <RouterLink :to="{ name: 'TOSPage' }">Terms & Conditions</RouterLink> &
                    <RouterLink :to="{ name: 'PrivacyPolicy' }">Privacy policy</RouterLink>
                </p>
            </div>
            <router-link to="/login-page">
                <p class="text-center">Already have an account ? Login</p>
            </router-link>
           

        </div>
    </div>
</template>

<script>
import ClobugLogo from './ClobugLogo.vue';
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    },
    mounted() {
        console.log(this.name);
    },
    components: { ClobugLogo }
}
</script>
<style scoped>
p,
a {
    color: black;
}

.btn-brand {
    font-weight: 700;
    color: #4C2E30;
    background-color: #ECA1A6;
    border-color: hsl(356, 74%, 70%) !important;
}
</style>
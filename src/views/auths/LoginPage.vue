<template>
    <div style="background-color:#F4B700; min-height: 100vh;">
        <ClobugLogo></ClobugLogo>
        <div class="px-4 pb-5">
            <div class="">
                <div class="mt-4 ">
                    <p class="fs-5 text-dark">Account Login</p>
                    <div class="form-floating mb-2 ">
                        <input type="email" class="form-control " id="floatingInput" placeholder="Email" v-model="Email">
                        <label for="floatingInput" class="text-muted">Enter your Email</label>
                    </div>
                    <div class="form-floating mb-2 ">
                        <input type="password" class="form-control" id="floatingInput" placeholder="Password"
                            v-model="Password">
                        <label for="floatingInput" class="text-muted">Password</label>
                    </div>
                    <RouterLink class="d-flex justify-content-end my-2 text-dark" to="/forgot-password-page">Forgot Password?</RouterLink>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="w-75 btn btn-warning border rounded-pill">Submit</button>
                </div>


                <div class="text-center container my-3">
                    <p>By proceeding, you agree to <RouterLink :to="{ name: 'TOSPage' }">Terms & Conditions</RouterLink> &
                        <RouterLink :to="{ name: 'PrivacyPolicy' }">Privacy policy</RouterLink>
                    </p>
                </div>

                <router-link to="/registration-page" class="text-dark ">
                    <p class="text-center text-dark ">Don't have an account ? Register</p>
                </router-link>

                <div class="text-center mt-2">
                    <p class="login text-dark">Or login with</p>
                    <div class="d-flex justify-content-center gap-5">
                        <div class="d-flex flex-column">
                            <i class="bi bi-envelope-fill fs-1 text-dark"></i>
                            <p class="text-dark">Gmail</p>
                        </div>
                        <div class="d-flex flex-column ">
                            <i class="bi bi-facebook fs-1 text-dark"></i>
                            <p class="text-dark">Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClobugLogo from './ClobugLogo.vue';
// import { RouterLink } from 'vue-router';
export default {
    components: { 
    //     RouterLink,
         ClobugLogo 
        },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            phoneNumber: "",
            Email: "",
            Password: "",
            disableButton: true,
            design: 1,
        };
    },
    methods: {
        goBack() {
            window.history.back();
        },
    },
}
</script>

<style scoped>
p,
a {
    color: black;
}

.btn-brand {
    font-weight: 700;
    background-color: #ECA1A6;
    color: rgb(73, 44, 46);
}

/* .login {
    font-family: sans-serif;
    color: #ECA1A6;
    text-align: center;
    position: relative;
}

.login:before {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #ECA1A6;
    left: 0;
    top: 50%;
    position: absolute;
}

.login:after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #ECA1A6;
    right: 0;
    top: 50%;
    position: absolute;
} */
</style>
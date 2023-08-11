<template>
    <div class="d-flex justify-content-center align-items-center bg-light position-fixed w-100 top-0 z-3 p-2">
        <router-link to="/">
            <img :src="`${publicPath}${img}`" style="height: 50px;">
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: 'img/logo/CloBug.png'
        }
    },
    methods: {
        goBack() {
            window.history.back()
        }
    }
}
</script>
<template>
    <div class="d-flex flex-column align-items-center justify-content-center pt-4">
        <img :src="logo" style="height:150px;width: 330px; object-fit: contain;" class="">
    </div>
</template>

<script>
export default {
    name: 'DeshiGirlLogo',
    data() {
        return {
            // logo: 'img/logo/DeshiGirl.png',
            logo: 'img/logo/CloBug.png',
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style lang="scss" scoped>
.colorRed {
    filter: hue-rotate(0deg);
}

.colorBlue {
    filter: hue-rotate(200deg) brightness(0.75);
}

.colorGreen {
    filter: hue-rotate(100deg);
}
</style>
<template>
    <div class="bg-light py-2">
        <div class="d-flex px-2 align-items-center">
            <i class="bi bi-arrow-left fs-3" @click="goBack"></i>
            <p class="mb-0 fs-4 text-center flex-grow-1"><slot></slot></p>
        </div>
        <div class="input-group input-group-sm mb-3 w-75 m-auto mt-2">
            <span class="input-group-text" id="inputGroup-sizing-sm"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm">
        </div>
    </div>
</template>

<script>
export default {
methods:{
    goBack(){
        window.history.back()
    }
}
}
</script>

<style lang="scss" scoped></style>
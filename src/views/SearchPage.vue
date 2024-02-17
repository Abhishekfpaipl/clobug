<template>
    <div class="d-flex px-2" >
        <i class="bi bi-arrow-left fs-4 mt-2" @click="goBack()"></i>
        <div class="d-flex mt-2 w-100">
            <div class="input-group d-flex justify-content-center">
                <div class="form-outline" style="width: calc(100% - 60px);">
                    <input type="search" id="form1" class="form-control" placeholder="Search" />
                </div>
                <button type="button" class="btn btn-primary">
                    <i class="bi bi-search"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchPage',
    methods: {
        goBack() {
            window.history.back()
        }
    }
}
</script>

<style lang="scss" scoped></style>
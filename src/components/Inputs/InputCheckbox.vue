<template lang="">
    <div>
        <div class="form-check d-flex pt-2">
                <input class="form-check-input" type="checkbox" :name="name" :id="name" />
                <label class="form-check-label" :for="name">
                    {{name}}<small style="color: grey;">{{num}}</small>
                    <!-- <div :style="border-radius:50% ;height: 25px;width: 25px; background: black;"></div> -->
                </label>
        </div>
    </div>
</template>
<script>
export default {
    props: ['name', 'num', 'style']
}
</script>
<style lang="">
    
</style>
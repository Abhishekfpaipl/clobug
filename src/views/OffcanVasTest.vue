<template>
    <div style="padding: 100px 0px;">
        <button @click="toggleOffcanvas">Toggle Offcanvas</button>
        <div class="off" :class="{ 'active': offcanvasOpen }">
            <div style="padding-top: 60px;">
                <button @click="toggleOffcanvas">Close</button>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            offcanvasOpen: false,
        };
    },
    methods: {
        toggleOffcanvas() {
            this.offcanvasOpen = !this.offcanvasOpen;
        },
    },
};
</script>
  
<style scoped>
.off {
    position: fixed;
    top: 0;
    left: -300px;
    /* Initial position off the screen */
    width: 300px;
    height: 100%;
    background-color: #fff;
    transition: left 0.3s ease-in-out;
}

.off.active {
    left: 0;
}

</style>
  
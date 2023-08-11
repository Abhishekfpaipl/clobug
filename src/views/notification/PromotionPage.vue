<template>
    <div style="padding: 60px 0px;">
        <div class="d-flex p-2 bg-dark text-white">
            <router-link to="/" class="text-decoration-none text-white">
                <i class="bi bi-chevron-left"></i>
            </router-link>
            <p class="ms-3 mb-0">Notifications</p>
        </div>
        <NotificationLinks></NotificationLinks>

        <div class="container">
            <div class="mt-2 border-warning rounded p-2 broder-start-4 shadow"
                style="border-left: 4px solid pink; !important">
                <div class="d-flex justify-content-between">
                    <b class="m-0">Levi's</b>
                    <span style="font-size: 10px;">7jul, 12:12AM</span>
                </div>
                <p class="m-0">MRP:Rs794</p>
                <p class="m-0">Offer Price:Rs794</p>
                <button class="mt-3 btn btn-outline-dark border border-2 rounded w-100">Shop Now</button>
            </div>
        </div>
        <div class="container mt-2">
            <div class="mt-2 border-warning rounded p-2 broder-start-4 shadow"
                style="border-left: 4px solid pink; !important">
                <div class="d-flex justify-content-between">
                    <b class="m-0">Levi's</b>
                    <span style="font-size: 10px;">7jul, 12:12AM</span>
                </div>
                <p class="m-0">MRP:Rs794</p>
                <p class="m-0">Offer Price:Rs794</p>

            </div>
        </div>
        <div class="container mt-2">
            <div class="card">
                <img src="https://images.meesho.com/images/products/45514523/hdecd_512.webp" class="card-img-top"
                    style="height: 150px; width: auto; object-fit: cover; object-position: center;">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <button class="btn btn-primary w-100">Shop Now</button>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script>
import NotificationLinks from './NotificationLinks.vue';
export default {
    components: { NotificationLinks },
    methods: {
        // goback(){
        //     window.history.back()
        // }
    }


}
</script>



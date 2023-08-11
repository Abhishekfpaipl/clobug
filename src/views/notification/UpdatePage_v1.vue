<template>
    <div>
        <div class="d-flex p-2 bg-dark text-white">
            <router-link to="/" class="text-decoration-none text-white">
                <i class="bi bi-chevron-left"></i>
            </router-link>
            <p class="ms-3 mb-0">Notifications</p>
        </div>
        <NotificationLinks></NotificationLinks>
        <div class="">
            <div v-for="(noti, index) in notifications" :key="index" :class="{ 'selected ': selectedIndex === index }"
                class="border-bottom py-2 container" @click="select(index)">
                <div class="d-flex align-items-center w-100">
                    <div class="">
                        <div class="rounded-circle d-flex justify-content-center align-items-center "
                            style="  width: 80px; height: 80px; object-fit:cover; object-position: top;"
                            :style="{ backgroundColor: noti.bg1 }"><i style="font-size: 40px;" :style="{ color: noti.bg }"
                                class="d-flex justify-content-center align-items-center" :class="noti.icon"></i></div>
                        <div class=" text-center">

                        </div>
                    </div>
                    <div class="ms-2">
                        <b class="ss">{{ noti.title }}</b>
                        <p class="mb-0 vv">{{ noti.description }}</p>
                        <div class="d-flex justify-content-between align-items-end">
                            <div style="font-size: 15px;" class="text-muted d-flex"><i class="bi bi-check-all "></i>
                                <div v-if="selectedIndex === index"
                                    class="text-muted d-flex justify-content-center align-items-center"
                                    style="font-size: 10px;">Read</div>
                            </div>
                            <p class="text-muted mb-0" style="font-size: 10px;">{{ noti.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import NotificationLinks from './NotificationLinks.vue';
export default {
    components: { NotificationLinks },
    data() {
        return {
            selectedIndex: -1,
            notifications: [
                {
                    bg1: '#e2f5ea',
                    bg: '#6fcf97',
                    icon: 'bi bi-check-circle-fill',
                    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, hic.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#d5e6fb',
                    bg: '#2f80ed',
                    icon: 'bi bi-info-circle-fill',
                    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, hic.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fbdddd',
                    bg: '#eb5757',
                    icon: 'bi bi-x-circle-fill',
                    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, hic.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fcf4db',
                    bg: '#f2c94c',
                    icon: 'bi bi-exclamation-circle-fill',
                    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, hic.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                }
            ]
        }
    },
    methods: {
        select(index) {
            if (this.selectedIndex === index) {
                // If the same div is clicked again, deselect it
                this.selectedIndex = -1;
                return;
            }

            // Move the selected div to the bottom
            const selectedNoti = this.notifications.splice(index, 1)[0];
            this.notifications.push(selectedNoti);

            // Update the selected index
            this.selectedIndex = this.notifications.length - 1;
        },
        // goback(){
        //     window.history.back();
        // }
    }

}
</script>

<style lang="scss" scoped>
.vv {
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

}

.ss {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

}

.selected {
    opacity: 0.55;
}
</style>

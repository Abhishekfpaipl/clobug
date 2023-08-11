<template>
    <div>
        <div class="d-flex p-2 bg-dark text-white">
            <router-link to="/" class="text-decoration-none text-white">
                <i class="bi bi-chevron-left"></i>
            </router-link>
            <p class="ms-3 mb-0">Notifications</p>
        </div>
        <NotificationLinks></NotificationLinks>
        <div v-for="(offer, index) in offers" :key="index" :class="{ selected: selectedIndex === index }"
            class="border-bottom py-2 container" @click="select(index)">
            <div class="d-flex align-items-center w-100">
                <div class="">
                    <img :src="offer.img" class="rounded-circle"
                        style="width: 80px; height: 80px; object-fit:cover; object-position: top;" alt="" />
                </div>
                <div class="ms-2" :style="{ opacity: selectedIndex === index ? '0.5' : '1' }">
                    <b class="ss">{{ offer.title }}</b>
                    <p class="mb-0 vv">{{ offer.description }}</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <div style="font-size: 15px;" class="text-muted d-flex">
                            <i class="bi bi-check-all "></i>
                            <div v-if="selectedIndex === index"
                                class="text-muted d-flex justify-content-center align-items-center"
                                style="font-size: 10px;">
                                Read
                            </div>
                        </div>
                        <p class="text-muted mb-0 " style="font-size: 10px;">
                            {{ offer.date }}
                        </p>
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
            offers: [
                {
                    img: 'https://img101.urbanic.com/v1/goods-pic/20b2fe613cf54326bcbc9a40d39cc316UR_w1000_q90.webp',
                    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, hic.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    img: 'https://img101.urbanic.com/v1/goods-pic/63f5574a5b5f440fb29f4b441141c113UR_w750_q85.webp',
                    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, hic.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    img: 'https://img101.urbanic.com/v1/goods-pic/d8ab6a6606404e7ba5587b90a9f01e13UR_w540_h720_q85.webp',
                    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, hic.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    img: 'https://img101.urbanic.com/v1/goods-pic/d30ae897e5e04a948cad58ada2f03f21UR_w750_q85.webp',
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
            const selectedOffer = this.offers.splice(index, 1)[0];
            this.offers.push(selectedOffer);

            // Update the selected index
            this.selectedIndex = this.offers.length - 1;
        },
        // goback(){
        //     window.history.back()
        // }
    }

}
</script>

<style scoped>
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
    opacity: 0.5;
}
</style>


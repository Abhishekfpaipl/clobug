<template>
    <nav>
        <div class="nav nav-tabs py-2 d-flex overflow-x-scroll flex-nowrap ws-nowarp align-items-center w-100 "
            style="font-size: 13px; font-weight: 500;" id="nav-tab" role="tablist" ref="navTabs">
            <RouterLink v-for="(link, index) in links" :key="index" class="nav-link ws-nowarp w-100 text-center"
                :class="currentRouteName === link.route ? 'active' : ''" :to="{ name: link.route }">
                {{ link.label }}
            </RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active'],
    data() {
        return {
            links: [
                { route: 'update-page', label: 'Update' },
                { route: 'promotion-page', label: 'Promotions' },

            ]
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        }

    },


}
</script>

<style >
.ws-nowarp {
    white-space: nowrap;
}

.nav-link {
    color: rgb(136, 132, 132);
}

.nav-tabs {
    --bs-nav-tabs-link-active-color: #000;
}
</style>

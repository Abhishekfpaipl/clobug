<template>
    <div class="">
        <div class="d-flex justify-content-between">
            <p class="fs-4 mb-0 text-start">Brand</p>
            <div class="input-group mb-3 d-flex justify-content-end">
                <input type="search" v-model="search" class="form-control-sm w-50" placeholder="Categories"
                    aria-label="Search" aria-describedby="basic-addon1" />
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
            </div>
        </div>

        <!-- Display the filter tags -->
        <div class="filter-tags d-flex gap-1 mb-2 flex-wrap">
            <span v-for="(activeFilter, index) in activeFilters" :key="index"
                class="filter-tag badge bg-warning d-flex align-items-center" style="padding: 4px 8px; border-radius: 8px;">
                {{ activeFilter }}
                <i class="bi bi-x" @click="removeFilter(index)"></i>
            </span>
        </div>

        <div class="d-flex flex-wrap">
            <div v-for="(brand, index) in filteredBrands" :key="index" class="">
                <div v-if="index < count">
                    <input type="checkbox" class="btn-check p-0" :name="brand.name" :id="brand.name" v-model="brand.checked"
                        @change="toggleFilter(brand)" autocomplete="off">
                    <label class="btn btn-outline-dark rounded-0 m-2" :for="brand.name"> {{ brand.name }}</label>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <button v-if="count < 6" class="btn btn-warning m-2" @click="showmore()">More</button>
            <button v-if="count > 5" class="btn btn-warning m-2" @click="showless()">Less</button>
        </div>
    </div>
    <hr />
</template>
<script>
export default {
    name: "BrandFilter",
    data() {
        return {
            isChecked: true,
            labelValue: "Friskers",
            count: 5,
            search: '',
            brad: [
                {
                    name: 'Friskers',
                    num: '80324'
                },
                {
                    name: 'Roadster',
                    num: '8622'
                },
                {
                    name: 'Alvaro',
                    num: '2389'
                },
                {
                    name: 'Adidas',
                    num: '2372'
                },
                {
                    name: 'Anouk',
                    num: '1594'
                },
                {
                    name: 'Nakabh',
                    num: '99'
                },
                {
                    name: 'Nusyl',
                    num: '93'
                },
                {
                    name: 'Noise',
                    num: '83'
                },
                {
                    name: 'Nivia',
                    num: '188'
                },


            ],
            activeFilters: [],
        };
    },
    computed: {
        // brands() {
        //     return this.brad.filter(brand => {
        //         return brand.name.toLowerCase().includes(this.search.toLowerCase())
        //     })
        // },
        filteredBrands() {
            return this.brad.filter((brand) => {
                return brand.name.toLowerCase().includes(this.search.toLowerCase());
            });
        },

    },
    methods: {
        updateParagraph() {
            if (this.isChecked) {
                this.labelValue = "Friskers";
            } else {
                this.labelValue = "";
            }
        },
        showmore() {
            this.count = Object.keys(this.filteredBrands).length;
        },
        showless() {
            this.count = 5;
        },
        toggleFilter(brand) {
            if (brand.checked) {
                this.activeFilters.push(brand.name); // Add filter tag when checkbox is selected
            } else {
                const index = this.activeFilters.indexOf(brand.name);
                if (index !== -1) {
                    this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
                }
            }
        },
        removeFilter(index) {
            this.activeFilters.splice(index, 1); // Remove the filter tag
        },
    },
    watch: {
        filteredBrands() {
            this.activeFilters = []; // Reset active filters when the search changes
        },
    },
}
</script>
<style>
/* .filter-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 8px;
}

.filter-tag {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 8px;
} */

/* .filter-tag i {
    cursor: pointer;
    margin-left: 4px;
} */
</style> 
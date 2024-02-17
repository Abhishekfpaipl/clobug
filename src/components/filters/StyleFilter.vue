<template>
    <div class="">
        <div class="d-flex justify-content-between">
            <p class="fs-4 mb-0 text-start">Style</p>
            <div class="input-group mb-3 d-flex justify-content-end">
                <input type="search" v-model="search" class="form-control-sm w-50" placeholder="Style"
                    aria-label="Username" aria-describedby="basic-addon1" />
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
            </div>
        </div>

        <!-- Display the filter tags -->
        <div class="filter-tags">
            <span v-for="(activeFilter, index) in activeFilters" :key="index" class="filter-tag badge bg-warning mx-1">
                {{ activeFilter }}
                <i class="bi bi-x" @click="removeFilter(index)"></i>
            </span>
        </div>

        <div class="d-flex flex-wrap">
            <div v-for="(Filterstyle, index) in Filterstyles" :key="index">
                <div v-if="index < count">
                    <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" class="btn-check" :id="'style' + index" :autocomplete="Filterstyle.name"
                            v-model="Filterstyle.checked" @change="toggleFilter(Filterstyle)" />
                        <label class="btn btn-outline-dark rounded-0" :for="'style' + index">
                            {{ Filterstyle.name }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between m-2">
            <button v-if="count < 6" class="btn btn-warning" @click="showmore()">More</button>
            <button v-if="count > 5" class="btn btn-warning" @click="showless()">Less</button>
        </div>
    </div>
    <hr />
</template>
    
<script>
export default {
    name: "StyleFilter",
    data() {
        return {
            count: 5,
            search: "",
            Filterstyle: [
                { name: "Casual ", checked: false },
                { name: "Sexy", checked: false },
                { name: "Elegant", checked: false },
                { name: "Vaccation", checked: false },
                { name: "Minimalist", checked: false },
                { name: "Sporty", checked: false },
                { name: "Girl", checked: false },
                { name: "Glamorous", checked: false },
            ],
            activeFilters: [], // To store active filters
        };
    },
    computed: {
        Filterstyles() {
            return this.Filterstyle.filter((Filterstyle) => {
                return Filterstyle.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
            });
        },
    },
    methods: {
        showmore() {
            this.count = Object.keys(this.Filterstyle).length;
        },
        showless() {
            this.count = 5;
        },
        toggleFilter(Filterstyle) {
            if (Filterstyle.checked) {
                this.activeFilters.push(Filterstyle.name); // Add filter tag when checkbox is selected
            } else {
                const index = this.activeFilters.indexOf(Filterstyle.name);
                if (index !== -1) {
                    this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
                }
            }
        },
        removeFilter(index) {
            const removedStyle = this.activeFilters[index];
            this.activeFilters.splice(index, 1); // Remove the filter tag

            // Find the corresponding Filterstyle object
            const styleObject = this.Filterstyle.find((style) => style.name === removedStyle);
            if (styleObject) {
                styleObject.checked = false; // Uncheck the corresponding checkbox
            }
        },
    },
};
</script>
   
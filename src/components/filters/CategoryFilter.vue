<template>
    <div class="mt-3">
      <div class="d-flex justify-content-between">
        <p class="fs-4 mb-0 text-start">Category</p>
        <div class="input-group mb-3 d-flex justify-content-end">
          <input type="search" v-model="search" class="form-control-sm w-50" placeholder="Category" aria-label="Username"
            aria-describedby="basic-addon1" />
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
        <div v-for="(Filtercat, index) in Filtercats" :key="index">
          <div v-if="index < count">
            <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
              <input type="checkbox" class="btn-check" :id="'category' + index" :autocomplete="Filtercat.name"
                v-model="Filtercat.checked" @change="toggleFilter(Filtercat)" />
              <label class="btn btn-outline-dark rounded-0" :for="'category' + index">
                {{ Filtercat.name }}
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
    name: "categoryFilter",
    data() {
      return {
        count: 5,
        search: "",
        Filtercat: [
          { name: "Dresses", checked: false },
          { name: "Skirts", checked: false },
          { name: "Tops", checked: false },
          { name: "T-Shirts", checked: false },
          { name: "Shirts", checked: false },
          { name: "Jumpsuits", checked: false },
          { name: "Co-ords", checked: false },
          { name: "Bottoms", checked: false },
          { name: "Suits", checked: false },
          { name: "Jackets", checked: false },
          { name: "Shapewear", checked: false },
        ],
        activeFilters: [], // To store active filters
      };
    },
    computed: {
      Filtercats() {
        return this.Filtercat.filter((Filtercat) => {
          return Filtercat.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
        });
      },
    },
    methods: {
      showmore() {
        this.count = Object.keys(this.Filtercat).length;
      },
      showless() {
        this.count = 5;
      },
      toggleFilter(Filtercat) {
        if (Filtercat.checked) {
          this.activeFilters.push(Filtercat.name); // Add filter tag when checkbox is selected
        } else {
          const index = this.activeFilters.indexOf(Filtercat.name);
          if (index !== -1) {
            this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
          }
        }
      },
      removeFilter(index) {
        const removedCategory = this.activeFilters[index];
        this.activeFilters.splice(index, 1); // Remove the filter tag
  
        // Find the corresponding Filtercat object
        const categoryObject = this.Filtercat.find((category) => category.name === removedCategory);
        if (categoryObject) {
          categoryObject.checked = false; // Uncheck the corresponding checkbox
        }
      },
    },
  };
  </script>
   
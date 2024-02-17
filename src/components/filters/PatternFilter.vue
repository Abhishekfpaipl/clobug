<template>
    <div class="">
      <div class="d-flex justify-content-between">
        <p class="fs-4 mb-0 text-start">Pattern</p>
        <div class="input-group mb-3 d-flex justify-content-end">
          <input type="search" v-model="search" class="form-control-sm w-50" placeholder="Pattern" aria-label="Username"
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
        <div v-for="(Filterpattern, index) in Filterpatterns" :key="index">
          <div v-if="index < count">
            <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
              <input type="checkbox" class="btn-check" :id="'pattern' + index" :autocomplete="Filterpattern.name"
                v-model="Filterpattern.checked" @change="toggleFilter(Filterpattern)" />
              <label class="btn btn-outline-dark rounded-0" :for="'pattern' + index">
                {{ Filterpattern.name }}
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
    name: "PatternFilter",
    data() {
      return {
        count: 5,
        search: "",
        Filterpattern: [
          { name: "Solid", checked: false },
          { name: "Striped", checked: false },
          { name: "Floral", checked: false },
          { name: "Geometric", checked: false },
          { name: "Logo", checked: false },
          { name: "Printed", checked: false },
          { name: "Ditsy", checked: false },
          { name: "Alphabet", checked: false },
          { name: "Plaid", checked: false },
          { name: "Ombre", checked: false },
          { name: "Dots", checked: false },
          { name: "Zebra Print", checked: false },
        ],
        activeFilters: [], // To store active filters
      };
    },
    computed: {
      Filterpatterns() {
        return this.Filterpattern.filter((Filterpattern) => {
          return Filterpattern.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
        });
      },
    },
    methods: {
      showmore() {
        this.count = Object.keys(this.Filterpattern).length;
      },
      showless() {
        this.count = 5;
      },
      toggleFilter(Filterpattern) {
        if (Filterpattern.checked) {
          this.activeFilters.push(Filterpattern.name); // Add filter tag when checkbox is selected
        } else {
          const index = this.activeFilters.indexOf(Filterpattern.name);
          if (index !== -1) {
            this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
          }
        }
      },
      removeFilter(index) {
        const removedPattern = this.activeFilters[index];
        this.activeFilters.splice(index, 1); // Remove the filter tag
  
        // Find the corresponding Filterpattern object
        const patternObject = this.Filterpattern.find((pattern) => pattern.name === removedPattern);
        if (patternObject) {
          patternObject.checked = false; // Uncheck the corresponding checkbox
        }
      },
    },
  };
  </script>
   
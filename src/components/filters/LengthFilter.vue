<template>
    <div class="">
      <div class="d-flex justify-content-between">
        <p class="fs-4 mb-0 text-start">Length</p>
        <div class="input-group mb-3 d-flex justify-content-end">
          <input type="search" v-model="search" class="form-control-sm w-50" placeholder="Length" aria-label="Username"
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
        <div v-for="(Filterlength, index) in Filterlengths" :key="index">
          <div v-if="index < count">
            <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
              <input type="checkbox" class="btn-check" :id="'length' + index" :autocomplete="Filterlength.name"
                v-model="Filterlength.checked" @change="toggleFilter(Filterlength)" />
              <label class="btn btn-outline-dark rounded-0" :for="'length' + index">
                {{ Filterlength.name }}
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
    name: "LengthFilter",
    data() {
      return {
        count: 5,
        search: "",
        Filterlength: [
          { name: "Crop", checked: false },
          { name: "Regular", checked: false },
          { name: "Hip", checked: false },
          { name: "Short", checked: false },
          { name: "Knee Length", checked: false },
          { name: "CApris", checked: false },
          { name: "Midi", checked: false },
          { name: "Above Ankle", checked: false },
          { name: "Long", checked: false },
          { name: "Maxi", checked: false },
        ],
        activeFilters: [], // To store active filters
      };
    },
    computed: {
      Filterlengths() {
        return this.Filterlength.filter((Filterlength) => {
          return Filterlength.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
        });
      },
    },
    methods: {
      showmore() {
        this.count = Object.keys(this.Filterlength).length;
      },
      showless() {
        this.count = 5;
      },
      toggleFilter(Filterlength) {
        if (Filterlength.checked) {
          this.activeFilters.push(Filterlength.name); // Add filter tag when checkbox is selected
        } else {
          const index = this.activeFilters.indexOf(Filterlength.name);
          if (index !== -1) {
            this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
          }
        }
      },
      removeFilter(index) {
        const removedLength = this.activeFilters[index];
        this.activeFilters.splice(index, 1); // Remove the filter tag
  
        // Find the corresponding Filterlength object
        const lengthObject = this.Filterlength.find((length) => length.name === removedLength);
        if (lengthObject) {
          lengthObject.checked = false; // Uncheck the corresponding checkbox
        }
      },
    },
  };
  </script>
   
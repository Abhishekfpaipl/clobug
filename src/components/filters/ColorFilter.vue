<template>
  <div class="">
    <div class="d-flex justify-content-between">
      <p class="fs-4 mb-0 text-start">Color</p>
      <div class="input-group mb-3 d-flex justify-content-end">
        <input type="search" v-model="search" class="form-control-sm w-50" placeholder="Color" aria-label="Username"
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
      <div v-for="(Filtercolor, index) in Filtercolors" :key="index">
        <div v-if="index < count">
          <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" :id="Filtercolor.name" :autocomplete="Filtercolor.name"
              v-model="Filtercolor.checked" @change="toggleFilter(Filtercolor)" />
            <label class="btn btn-outline-dark rounded-0" :for="Filtercolor.name">
              {{ Filtercolor.name }}
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
  name: "ColorFilter",
  data() {
    return {
      count: 5,
      search: "",
      Filtercolor: [
        { name: "Purple", checked: false },
        { name: "Red", checked: false },
        { name: "Yellow", checked: false },
        { name: "Black", checked: false },
        { name: "White", checked: false },
        { name: "Green", checked: false },
        { name: "Blue", checked: false },
        { name: "pink", checked: false },
        { name: "Orange", checked: false },
      ],
      activeFilters: [], // To store active filters
    };
  },
  computed: {
    Filtercolors() {
      return this.Filtercolor.filter((Filtercolor) => {
        return Filtercolor.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
      });
    },
  },
  methods: {
    showmore() {
      this.count = Object.keys(this.Filtercolor).length;
    },
    showless() {
      this.count = 5;
    },
    toggleFilter(Filtercolor) {
      if (Filtercolor.checked) {
        this.activeFilters.push(Filtercolor.name); // Add filter tag when checkbox is selected
      } else {
        const index = this.activeFilters.indexOf(Filtercolor.name);
        if (index !== -1) {
          this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
        }
      }
    },
    removeFilter(index) {
      const removedColor = this.activeFilters[index];
      this.activeFilters.splice(index, 1); // Remove the filter tag

      // Find the corresponding Filtercolor object
      const colorObject = this.Filtercolor.find((color) => color.name === removedColor);
      if (colorObject) {
        colorObject.checked = false; // Uncheck the corresponding checkbox
      }
    },
  },
};
</script>
 
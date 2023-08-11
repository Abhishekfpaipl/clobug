<template>
    <div class="">
        <div class="d-flex w-100 justify-content-between bg-light align-items-center position-fixed px-2 border-bottom"
            style="z-index:10;top:0px;height:66px">
            <div class="d-flex">
                <i class="bi bi-arrow-left fs-4 brand-text" @click="goBack()"></i>
                <p class="m-0 ms-2 fs-5  brand-text">Page Name</p>
            </div>

            <div class="d-flex gap-4">
                <router-link to="/search" class="text-dark">
                    <i class="bi bi-search fs-4 brand-text"></i>
                </router-link>
                <i class="bi bi-arrow-down-up fs-4 brand-text" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExampleOne" aria-controls="offcanvasExampleOne"></i>
                <i class="bi bi-funnel fs-4 brand-text" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                    role="button" aria-expanded="false"></i>
            </div>
        </div>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExampleOne"
            aria-labelledby="offcanvasExampleLabel" style="height: 60vh;">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sort</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <div class="w-100">
                        <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
                            <div class="d-flex justify-content-between" v-for="(sort, index) in sorts" :key="index">
                                <p :style="{ color: sortColor(sort) }" @click="changeColorAndCheck(sort)">
                                    {{ sort.text }}
                                </p>
                                <p v-if="sort.selected" class="tick-mark"><i class="bi bi-check2"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="">
            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                aria-labelledby="offcanvasBottomLabel" style="height:100vh">
                <div class="offcanvas-header border-bottom">
                    <h5 class="offcanvas-title fw-bold" id="offcanvasBottomLabel">Filters </h5>

                    <div class=" bg-white w-100" style="bottom:0px;">
                        <div class="d-flex justify-content-evenly gap-1">
                            <button class="btn btn-outline-dark rounded-0 w-25" data-bs-dismiss="offcanvas">Clear</button>
                            <button class="btn btn-outline-dark  rounded-0 w-25" data-bs-dismiss="offcanvas">Apply</button>
                        </div>
                    </div>

                </div>

                <div class="offcanvas-body p-0">
                    <div class="accordion accordion-flush" id="accordionFlushExample" style="padding-bottom: 60px;">

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button  fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Category
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex flex-wrap">

                                    <div v-for="(cat, index) in category" :key="index" class="">
                                        <input :type="cat.type" class="btn-check" :id="cat.name" autocomplete="off">
                                        <label class="btn btn-outline-dark rounded-0 m-2" 
                                            :for="cat.name">{{
                                                cat.label }}</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button  fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Price Range
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div class="d-flex w-100">
                                        <input type="number" placeholder="Min" class="form-control-sm w-50">--
                                        <input type="number" placeholder="Max" class="form-control-sm w-50">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button  fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Color
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body ">
                                    <div class="d-flex gap-2">
                                        <div v-for="(color, index) in colors" :key="index" @click="selectColor(index)"
                                            :style="{ backgroundColor: color }" style="height: 30px; width: 30px;"
                                            :class="{ 'selected-color': selectedIndex === index }"
                                            class="d-flex color-option rounded-circle">
                                        </div>
                                    </div>
                                    <p class="selected-color-name mt-2">{{ selectedColorName }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Size
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex flex-wrap">
                                    <div class="btn-group d-flex flex-wrap " role="group"
                                        aria-label="Basic checkbox toggle button group">

                                        <div class="" v-for="(s, index) in size" :key="index">
                                            <input class="btn-check" :type="s.type" name="flexRadioDefault"
                                                :id="'flexRadioDefault1' + index">
                                            <label class="btn btn-outline-dark rounded-0 m-2" 
                                                :for="'flexRadioDefault1' + index">
                                                {{ s.label }}
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Pattern
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex flex-wrap">

                                    <div v-for="(pat, index) in pattern" :key="index" class="">
                                        <input :type="pat.type" class="btn-check" name="pattern" :id="pat.name" autocomplete="off">
                                        <label class="btn btn-outline-dark rounded-0 m-2" 
                                            :for="pat.name">{{
                                                pat.label }}</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSix" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Length
                                </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex flex-wrap">

                                    <div v-for="(len, index) in length" :key="index" class="">
                                        <input :type="len.type" class="btn-check" name="length" :id="len.name" autocomplete="off">
                                        <label class="btn btn-outline-dark rounded-0 m-2"
                                            :for="len.name">{{
                                                len.label }}</label>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSeven" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Style
                                </button>
                            </h2>
                            <div id="flush-collapseSeven" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex flex-wrap">

                                    <div v-for="(style, index) in styles" :key="index" class="">
                                        <input :type="style.type" class="btn-check" name="style" :id="style.name" autocomplete="off">
                                        <label class="btn btn-outline-dark rounded-0 m-2" 
                                            :for="style.name">{{
                                                style.label }}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatelogFilter',
    data() {
        return {
            category: [
                { name: 'Tank Tops', type: 'radio', label: 'Tank Tops' },
                { name: 'Dresses', type: 'radio', label: 'Dresses' },
                { name: 'Pants', type: 'radio', label: 'Pants' },
                { name: 'Blouses', type: 'radio', label: 'Blouses' },
                { name: 'Panties', type: 'radio', label: 'Panties' },
                { name: 'Tshirts', type: 'radio', label: 'Tshirts' },
                { name: 'Sweaters', type: 'radio', label: 'Sweaters' },
            ],
            size: [
                { name: 'One', type: 'radio', label: 'One Size' },
                { name: 'XS', type: 'radio', label: 'XS' },
                { name: 'S', type: 'radio', label: 'S' },
                { name: 'M', type: 'radio', label: 'M' },
                { name: 'L', type: 'radio', label: 'L' },
                { name: 'XL', type: 'radio', label: 'XL' },
                { name: '2XL', type: 'radio', label: '2XL' },
                { name: '3XL', type: 'radio', label: '3XL' },
            ],
            pattern: [
                { name: 'colorful', type: 'radio', label: 'Colorful' },
                { name: 'Solid', type: 'radio', label: 'Solid' },
                { name: 'Floral', type: 'radio', label: 'Floral' },
                { name: 'Leopard Print', type: 'radio', label: 'Leopard Print' },
                { name: 'Geometric', type: 'radio', label: 'Geometric' },
                { name: 'Art', type: 'radio', label: 'Art' },
                { name: 'Alphabet', type: 'radio', label: 'Alphabet' },
                { name: 'Cartoon', type: 'radio', label: 'Cartoon' },
            ],
            length: [
                { name: 'Crop', type: 'radio', label: 'Crop' },
                { name: 'Long', type: 'radio', label: 'Long' },
                { name: 'Short', type: 'radio', label: 'Short' },
                { name: 'Above Ankle Length', type: 'radio', label: 'Above Ankle Length' },
                { name: 'Regular', type: 'radio', label: 'Regular' },
                { name: 'Hip', type: 'radio', label: 'Hip' },
                { name: 'Capris', type: 'radio', label: 'Capris' },
                { name: 'Maxi', type: 'radio', label: 'Maxi' },
            ],
            styles: [
                { name: 'Causal', type: 'radio', label: 'Causal' },
                { name: 'Sexy', type: 'radio', label: 'Sexy' },
                { name: 'Elegant', type: 'radio', label: 'Elegant' },
                { name: 'Vacation', type: 'radio', label: 'Vacation' },
                { name: 'Minimalist', type: 'radio', label: 'Minimalist' },
                { name: 'Sporty', type: 'radio', label: 'Sporty' },
                { name: 'Girl', type: 'radio', label: 'Girl' },
                { name: 'Glamorous', type: 'radio', label: 'Glamorous' },
            ],
            colors: ["red", "blue", "green", "yellow", "orange", "black"],
            selectedIndex: null,
            sorts: [
                { text: 'By Latest Date', selected: false },
                { text: 'By Oldest Date', selected: false },
                { text: 'By Lowest Amount', selected: false },
                { text: 'By Highest Amount', selected: false }
            ],
        }
    },
    methods: {
        selectColor(index) {
            this.selectedIndex = index;
        },
        sortColor(sort) {
            return sort.selected ? 'black' : 'gray';
        },
        changeColorAndCheck(clickedsort) {
            for (const sort of this.sorts) {
                if (sort === clickedsort) {
                    sort.selected = true;
                } else {
                    sort.selected = false;
                }
            }
        },
        goBack() {
            window.history.back()
        }
    },
    computed: {
        selectedColorName() {
            if (this.selectedIndex !== null) {
                return this.colors[this.selectedIndex];
            } else {
                return "No color selected";
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.selected-color {
    border: 2px solid black;
}
</style>
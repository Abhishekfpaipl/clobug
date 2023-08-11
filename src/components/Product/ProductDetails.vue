<template>
  <div class="">
      <ul class="nav nav-tabs d-flex justify-content-between">
        <h6 class="fw-bold">Product Measurements</h6>
      <li class="nav-item">
        <a class="nav-link active" id="tab1" data-bs-toggle="tab" href="#content1">CM</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="tab2" data-bs-toggle="tab" href="#content2">IN</a>
      </li>
    </ul>
    
    <div class="tab-content mt-2">
      <div class="tab-pane fade show active" id="content1">
        <table class="table border border-1">
            <thead>
                <tr>
                <th scope="row" style="background-color: #F8F6F3;">Size</th>
                <td>XS</td>
                <td>S</td>
                <td>M</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" style="background-color: #F8F6F3;">Hips</th>
                <td>78</td>
                <td>82</td>
                <td>86</td>
                </tr>
                <tr>
                <th scope="row" style="background-color: #F8F6F3;">Bust</th>
                <td>84</td>
                <td>88</td>
                <td>92</td>
                </tr>
                <tr>
                <th scope="row" style="background-color: #F8F6F3;">Length</th>
                <td>122.5</td>
                <td>124</td>
                <td>125.5</td>
                </tr>
                <tr>
                <th scope="row" style="background-color: #F8F6F3;">Waist</th>
                <td>58</td>
                <td>62</td>
                <td>66</td>
                </tr>
            </tbody>
        </table>
      </div>
      
      <div class="tab-pane fade" id="content2">
        <table class="table border border-1">
            <thead>
                <tr>
                <th scope="row" style="background-color: #F8F6F3;">Size</th>
                <td>XS</td>
                <td>S</td>
                <td>M</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" style="background-color: #F8F6F3;">Hips</th>
                <td>30.7</td>
                <td>32.3</td>
                <td>33.9</td>
                </tr>
                <tr>
                <th scope="row" style="background-color: #F8F6F3;">Bust</th>
                <td>33.1</td>
                <td>34.6</td>
                <td>36.2</td>
                </tr>
                <tr>
                <th scope="row" style="background-color: #F8F6F3;">Length</th>
                <td>48.2</td>
                <td>48.8</td>
                <td>49.4</td>
                </tr>
                <tr>
                <th scope="row" style="background-color: #F8F6F3;">Waist</th>
                <td>22.8</td>
                <td>24.4</td>
                <td>26</td>
                </tr>
            </tbody>
        </table>
      </div>
      
    </div>
  </div>
  




</template>
<script>
export default {
    name: 'ProductDetails',
}
</script>
<style scoped>
.nav{
    flex-wrap: nowrap !important;
}
</style> 




  
  
  
  




   <!-- <template>
    <div>
      <input type="text" v-model="firstName" placeholder="First Name" />
      <input type="text" v-model="lastName" placeholder="Last Name" />
  
      <div>
        <input type="radio" id="male" value="male" v-model="gender" />
        <label for="male">Male</label>
      </div>
  
      <div>
        <input type="radio" id="female" value="female" v-model="gender" />
        <label for="female">Female</label>
      </div>
  
      <button @click="submit">Submit</button>
  
      <p>Submitted Data:</p>
      <p v-if="submittedData">{{ submittedData }}</p>
  
      <p>Previous Data:</p>
      <p v-for="(data,index) in previousData" :key="index">{{ data }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        gender: '',
        submittedData: '',
        previousData: []
      };
    },
    methods: {
      submit() {
        const fullName = this.firstName + ' ' + this.lastName;
        this.submittedData = `Full Name: ${fullName}, Gender: ${this.gender}`;
        this.previousData.push(this.submittedData);
  
        // Clear input values
        this.firstName = '';
        this.lastName = '';
        this.gender = '';
      }
    }
  };
  </script> -->
  
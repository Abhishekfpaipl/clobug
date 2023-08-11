<template lang="">
  
<!-- Desktoop version starts -->
<div class="d-md-block d-none">
    <nav class="d-lg-block d-none  navbar navbar-expand-lg bg-body-tertiary position-fixed w-100" style="top:0px;z-index:11;padding: 10px 20px;">
      <div class="container-fluid">
        <router-link to="/" class="text-decoration-none">
          <p class="navbar-brand m-0">DeshiGirl</p>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
          <ul class="navbar-nav me-4 mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="text-decoration-none">
                <p class="nav-link active m-0" aria-current="page" >Home</p>
              </router-link>
            </li>
            <div class="d-flex align-items-center dropdown">
              <button class="btn btn-outline-dark rounded-0"  type="button" data-bs-toggle="dropdown" aria-expanded="false">Download App</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Download From</a></li>
                <a class="dropdown-item" href="#"><img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" alt="" style="width:100%"></a>
                <a class="dropdown-item" href="#"><img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" alt="" style="width:100%"></a>
              </ul> 
              <router-link to="/SupplierForm">
                <button class="mx-2 btn btn-outline-dark rounded-0">Become a Supplier</button>
              </router-link>
            </div>
          </ul>
          <form class="d-flex  w-50" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div class="d-flex gap-1">
            <div class="text-center">
              <div class="btn-group ">
                  <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-fill"></i>
                    <p class="m-0">Profile</p>
                  </div>
                <ul class="dropdown-menu">
                  <div class="text-center">
                    <li>
                      <p class="dropdown-item fw-bold m-0">Hello User</p>
                      <small>To access your account</small>
                    </li>
                    <router-link to="/SupplierForm" class="text-decoration-none text-dark">
                      <li><button class="btn btn-success mt-3 mb-3" href="#">Sign Up</button></li>
                    </router-link>
                    <router-link to="/orders/pending" class="text-decoration-none text-dark">
                      <li><a class="dropdown-item" href="#"><i class="bi bi-bag"></i> My orders</a></li>
                    </router-link>
                  </div>
                </ul>
              </div>
            </div>
            <div class=" ms-4 text-center">
              <i class="bi bi-cart"></i>
              <router-link to="/cart-page" class="text-decoration-none text-dark">
                <p class="m-0">Cart</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <hr class="m-0" />

    <CollectionList></CollectionList>
    <hr class="m-0" />
</div>
<!-- Desktop version ends -->
   
</template>
<script>
import CollectionList from '@/components/CollectionList.vue'
export default {
  name: 'DesktopNav',
  components:{
    CollectionList
  }
}
</script>
<style>
.dropdown-item.active,
.dropdown-item:active {
  background-color: white !important;
  color: black;
}

.dropdown-menu[data-bs-popper] {
  left: -50px;
}
</style>
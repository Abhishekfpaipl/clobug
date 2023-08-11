<template>
    <div style="padding-top: 60px;">

    <div class="card d-flex align-items-center">
        <div class="card-body">
            <div class="">
                <form>
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" />
                        <label class="form-label" for="form2Example1">Email address</label>
                    </div>
    
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" />
                        <label class="form-label" for="form2Example2">Password</label>
                    </div>
    
                    <!-- 2 column grid layout for inline styling -->
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            <!-- Checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <label class="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>
    
                        <div class="col">
                            <!-- Simple link -->
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
    
                    <!-- Submit button -->
                    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
    
                    <!-- Register buttons -->
                    <div class="text-center">
                        <p>Not a member? <a href="#!"></a></p>
    
                         <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Register
                        </button>
                        <p>or sign up with:</p>
                        <button type="button" class="btn btn-link btn-floating mx-1">
                           <a href="https://www.facebook.com/"> <i class="bi bi-facebook"></i></a>
                        </button>
    
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <a href="https://www.google.com/"><i class="bi bi-google"></i></a>
                        </button>
    
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <a href="https://twitter.com/i/flow/login"> <i class="bi bi-twitter"></i></a>
                        </button>
    
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <a href="https://github.com/"><i class="bi bi-github"></i></a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Register</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="heading d-flex justify-content-center w-100">
                            <img src="" width="180" alt="">
                        </div>
                        <div class="text text-center">
                            <!-- <p>Want to create your eRetail Shop</p> -->
                            <h2>Create Account</h2>
                        </div>
                        <div class="inputss ">
                            <input name="Your Name" type="text" class="form-control mb-2" placeholder="First & Last Name " aria-label="Username" aria-describedby="addon-wrapping" required>
                            <input name="Mobile Number" type="text" class="form-control mb-2" placeholder="Mobile Number" aria-label="Username" aria-describedby="addon-wrapping" required>
                            <input name="Password" type="password" class="form-control mb-2" placeholder="Password atleast 6 characters" aria-label="Username" aria-describedby="addon-wrapping" required>
                            
                            <button v-on:click="signUp"
                                class="btn btn-primary rouded-pill d-flex justify-content-center w-100">Login</button>
                        </div>
                        <div class="text my-4">
                            <span>Be enrolling your mobile phone number, you consent to receive automated security
                                notification via text message from DeshiGirl. Message and data rates may apply.</span>
                        </div>
                        <div class="btn btn-warning w-100 mt-1">Continue</div>
                        <div class="txt mt-2">
                            <span>Already have an account? <a style="cursor: pointer;" class="text-primary"
                                    data-bs-target="#exampleModalToggle" data-bs-dismiss="modal">Sign in</a></span>
                            <br><span>Buying for work? <a style="cursor: pointer;" class="text-primary">Crate a free
                                    business account</a></span> <br>
                            <br><span>By creating an account or logging in, you agree to Retailpur <a
                                    style="cursor: pointer;" class="text-primary">Conditions of Use</a> and <a
                                    style="cursor: pointer;" class="text-primary">Privacy policy</a> </span>
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-dismiss="modal">Back to Login</button>
                        </div>



                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>



export default {
    name: "SupplierForm",
}
</script>
<style></style>
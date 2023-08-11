<template lang="">
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="validationCustom01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationCustom01" value="" placeholder="First Name" required>
            </div>
            <div class="mb-3">
                <label for="validationCustom02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationCustom02" value="" placeholder="Last Name" required>
            </div>
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            <!-- <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> -->
            <label for="comment">Comments:</label>
            <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
            <button type="submit" class="btn btn-primary mt-2 ">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    name:'ContactUs',
}
</script>
<style lang="">
    
</style>
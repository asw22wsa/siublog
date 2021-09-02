<template>
  <div>
    <div class="card mx-auto mt-5 mb-5" style="width: 18rem;">
      <div class="card-body">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" @keydown="checkEmail">
          <div v-if="emailCheck" class="ps-2 text-danger" style="font-size:0.75rem;"><i class="bi bi-patch-exclamation"></i> please check email</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleFormControlInput1" >
          <div v-if="passCheck" class="ps-2 text-danger" style="font-size:0.75rem;"><i class="bi bi-patch-exclamation"></i> please check password</div>
        </div>
        <div class="d-grid mt-3">
          <button class="btn btn-primary" type="button">login</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'',
  components : {},
  data(){
    return {
      emailCheck: false,
      passCheck: false,
      email:'',
      password:''
    };
  },
  setup(){},
  created(){},
  mounted(){},
  methods: {
    checkEmail(){
       let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
       if(!reg_email.test(this.email)){
        this.emailCheck = true
       }else{
        this.emailCheck = false
       }
    }
  },
}
</script>
<style scoped>

</style>
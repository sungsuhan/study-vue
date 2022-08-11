<template>
 <div>
   <form>
     <div style="font-size: 40px">T아이디 로그인</div>
     <div class="form-floating mb-3">
       <label for="exampleInputEmail1" class="form-label" style="color: lightgrey">T아이디(핸드폰, 이메일) 또는 Tworld 아이디</label>
       <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp">
       <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Password</label>
       <input type="password" class="form-control" id="exampleInputPassword1">
     </div>
     <div class="mb-3 form-check">
       <input type="checkbox" class="form-check-input" id="exampleCheck1">
       <label class="form-check-label" for="exampleCheck1">Check me out</label>
     </div>
     <button type="submit" class="btn btn-primary">Submit</button>
   </form>
 </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style>
</style>

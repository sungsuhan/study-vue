<template>
 <div>
   <form>
     <br /><br /><br /><br /><br />
     <div style="font-size: 40px; font-weight: bold; margin-left: -230px">T아이디 로그인</div><br />
     <span style="font-size: 25px; margin-left: -48px">T아이디로 </span>
     <span style="font-size: 25px; color: red; font-weight: bold;">T world</span>
     <span style="font-size: 25px;">을(를) 이용해 보세요.</span><br /><br /><br />
     <div style="font-size: 18px; font-weight: bold; margin-left: -440px; color: black">아이디</div><br/>
     <div class="form-floating mb-3" style="width: 500px; margin-left: 710px">
       <label for="exampleInputEmail1" class="form-label-sm" style="color: lightgrey">T아이디(핸드폰, 이메일) 또는 Tworld 아이디</label>
       <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"><br /><br />
       <div id="emailHelp" class="form-text" style="font-size: 18px; font-weight: bold; margin-left: -430px; color: black">비밀번호</div>
     </div>
     <div class="form-floating mb-3" style="width: 500px; margin-left: 710px">
       <label for="exampleInputPassword1" class="form-label" style="color: lightgrey">비밀번호</label>
       <input type="password" class="form-control" id="exampleInputPassword1">
     </div><br />
     <div class="mb-3 form-check">
       <input type="checkbox" class="form-check-input" id="exampleCheck1" style="margin-left: 690px">
       <label class="form-check-label" for="exampleCheck1" style="margin-left: -1050px">로그인 유지</label>
     </div><br />
     <button type="submit" class="btn btn-primary" style="width: 500px; margin-left: 25px">로그인</button>
   </form>
   <br /><br /><br />
   <div style="font-size: 12px">
     아이디 찾기 | 비밀번호 찾기 | T아이디 가입하기
   </div>
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

<template>
  <div>
    <form>
      <br /><br /><br /><br /><br />
      <div style="font-size: 40px; font-weight: bold; margin-left: -230px">가입 정보 입력</div><br />
      <span style="font-size: 25px; margin-left: 30px">T아이디 하나로 다양한 서비스를 이용해보세요. </span><br /><br /><br />
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style="width: 500px; margin-left: 710px">
        <option value="1">휴대폰 본인 인증</option>
        <option value="2">I-PIN 인증</option>
      </select><br />
      <div style="font-size: 18px; margin-left: -440px; color: black">이름</div>
      <div class="form-floating mb-3" style="width: 500px; margin-left: 710px">
        <label for="exampleInputEmail1" class="form-label-sm" style="color: lightgrey">한글 2자 이상 입력</label>
        <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"><br />
      </div>
      <div id="emailHelp" class="form-text" style="font-size: 18px; margin-left: -410px; color: black">생년월일</div>
      <div class="form-floating mb-3" style="width: 500px; margin-left: 710px">
        <label for="exampleInputPassword1" class="form-label" style="color: lightgrey">생년월일 6자리 - 뒤1자리@@@@@@</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div><br />
      <div style="font-size: 18px; margin-left: -410px; color: black">보안문자</div>
      <img src="https://auth.skt-id.co.kr/common/captcha/captchaImg.do">
      <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 40px" width="120" height="20" fill="currentColor" class="bi bi-megaphone" viewBox="0 0 16 16">
        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" style="font-size: 800px; margin-left: 20px" width="20" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
      </svg><br /><br/>
      <div class="form-floating mb-3" style="width: 500px; margin-left: 710px">
        <label for="exampleInputEmail1" class="form-label-sm" style="color: lightgrey">위 보안문자 이미지에 보이는 문자 입력</label>
        <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"><br />
      </div>
      <div style="font-size: 18px; margin-left: -390px; color: black">휴대폰 번호</div>
      <button style="margin-left: 1px" class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        SKT
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">SKT</a></li>
        <li><a class="dropdown-item" href="#">KT</a></li>
        <li><a class="dropdown-item" href="#">LGU+</a></li>
      </ul>
      <div class="form-floating mb-3" style="width: 500px; margin-left: 710px;">
        <label for="exampleInputEmail1" class="form-label-sm" style="color: lightgrey">숫자만 입력</label>
        <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"><br />
        <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">인증</a>
      </div>
      <div style="font-size: 18px; margin-left: -410px; color: black">인증번호</div>
      <div class="form-floating mb-3" style="width: 500px; margin-left: 710px">
        <label for="exampleInputEmail1" class="form-label-sm" style="color: lightgrey">숫자 6자리 입력</label>
        <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"><br />
        <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">확인</a>
      </div><br /><br />
      <button type="submit" class="btn btn-primary" style="width: 500px; margin-left: 25px">회원가입</button>
    </form>
    <br /><br /><br />
    <div style="font-size: 12px">
      고객님의 본인확인정보(CI)를 선택동의에 대한 동의이력 확인을 위해 이용하는 것에 동의합니다. 미 가입 시 본인확인정보는 삭제됩니다.
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

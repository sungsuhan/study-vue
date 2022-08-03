<template>
  <header>
    <h1><router-link to="/"><img alt="Vue logo" src="https://cdnm.tworld.co.kr/img/subscribe/logo_spacepass.png" width="100"></router-link></h1>
    <div class="menuWrap">
      <ul class="menu">
        <li><a href="javascript:;">헤택/이벤트</a></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li><a href="javascript:;">고객지원</a></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li><a href="javascript:;">검색</a></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li><router-link to="/myPage">마이페이지</router-link></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:75px; border-bottom:1px solid #35495e}
header h1{position:absolute; top:0; left:50px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:0px; right:100px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}
a{text-decoration:none; color:#333;}
</style>

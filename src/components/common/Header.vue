<template>
  <header>
    <h1><router-link to="/"><img alt="SKT logo" src="https://img.etnews.com/photonews/0804/200804180153_18050505_1914353948_l.jpg" width="50"></router-link></h1>
    <div class="menuWrap">
      <ul class="menu">
        <li><router-link to="/board/list">상품서비스</router-link></li>
        <li><a href="javascript:;">T다이렉트샵</a></li>
        <li><a href="javascript:;">T우주</a></li>
        <li><a href="javascript:;">T멤버십</a></li>
        <li><a href="javascript:;">T로밍</a></li>
        <li><a href="javascript:;">혜택/이벤트</a></li>
        <li><a href="javascript:;">고객지원</a></li>
        <li><a href="javascript:;">검색</a></li>
        <li><a href="javascript:;">myT</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:115px; border-bottom:1px solid #35495e}
header h1{position:absolute; top:10px; left:250px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:300px;}
header ul.menu li{float:left; padding:10px 40px; list-style:none;}

a{text-decoration:none; color:#333;}
</style>

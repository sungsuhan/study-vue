<template>
  <div class="home">
    <img alt="Vue logo" src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6BgY/image/Ih6O-LkDt6xonJc22cWDMPx3KvY.JPG">
    <HelloWorld msg="우주패스 all, 이 모든 혜택이 첫달 1,000원! (이후 월 9,900원)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

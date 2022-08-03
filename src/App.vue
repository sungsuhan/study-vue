<template>
  <div>
    <HeaderView />
    <HomeView />
    <FooterView />
    <MyPageView />
    <router-view />
  </div>
</template>

<script>
import HeaderView from '@/views/common/HeaderView'
import FooterView from '@/views/common/FooterView'
import HomeView from '@/views/HomeView'
import MyPageView from '@/views/myPage/MyPageView'

export default {
  name: 'App',
  components: {
    HomeView,
    // eslint-disable-next-line vue/no-unused-components
    HeaderView,
    // eslint-disable-next-line vue/no-unused-components
    FooterView,
    // eslint-disable-next-line vue/no-unused-components
    MyPageView
  }
}
</script>

<style>
html,body{padding:0; margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0; padding:0;
}
</style>

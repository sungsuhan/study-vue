<template>
  <div id="app">
    <Header />

    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/common/Footer'

export default {
  name: 'App',
  components: {
    Header,
    HelloWorld,
    Footer
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

<template>
  <div class="menu">
    <a v-for="메뉴 in menu" :key="메뉴">{{메뉴}}</a>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menu: ['Home', 'T우주', '해택/이벤트', '고객지원', '검색', 'myT']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>

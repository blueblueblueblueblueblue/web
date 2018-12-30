<style lang="stylus" rel="stylesheet/stylus">
  .mainApp
    position absolute
    height 100%
    width 100%
</style>

<template>
  <div id="app" class="mainApp">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
}
</script>

<style>
body{
  padding:0px;
  margin:0px auto;
}
a{
  text-decoration:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>

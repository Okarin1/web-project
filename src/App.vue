<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './assets/js/prism.js'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
@import "assets/css/base.css";
@import "assets/css/okarin.less";
@import "assets/css/prism.css";
</style>

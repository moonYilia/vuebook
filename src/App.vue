<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
   </div>
</template>

<script>
//引入
import Tab from "./base/Tab.vue";
export default {
  name: 'App',
  components:{ //注册
    Tab
  }
}
</script>

<style>
  * {
    padding:0;
    margin:0;
  }
  a {
    text-decoration:none;
  }
  ul,li {
    list-style:none;
  }
  input,button {
    -webkit-appearance:none;
  }
  .mainContent {
        position:fixed;
        top:40px;
        bottom: 50px;
        width:100%;
        overflow:auto;
    }



</style>

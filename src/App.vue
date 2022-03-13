<template>
  <div class="okarin">
    <div class="content-box">
      <poem />
      <web-set :webSet="webSetArr"/>
      <back-to-top/>
      
      <div class="footer">
        MIT Licensed | Copyright © 2022-present
        <a href="https://github.com/Okarin1/web-project" target="_blank"
          >@Okarin</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Poem from "./components/Poem.vue";
import WebSet from "./components/WebSet.vue";
import BackToTop from "./components/BackToTop.vue"

import data from "@/common/web.json";
import { getWebSet } from "@/common/webSet.js";
export default {
  name: "App",
  components: {
    WebSet,
    Poem,
    BackToTop
   
  },
  created() {
    data.forEach((opt) => {
      this.webSetArr.push(getWebSet(opt));
    });
  },
  data() {
    return {
      webSetArr: [],
    };
  },
 
};
</script>

<style lang="less">
@import "assets/css/base.css";
@import "assets/css/okarin.less";
</style>

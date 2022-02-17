<template>
  <div class="okarin">
    <poem />
    <div class="content-box">
      <div v-for="(item, index) in titleArray" ref="webBar" :key="index">
        <h2 :id="item">
          {{ item }}
          <span class="badge badge-theme" style="vertical-align: top">{{
            webCount[index]
          }}</span>
        </h2>
        <web-links ref="child" :navbars="item" />
      </div>
      <div class="footer">
        MIT Licensed | Copyright © 2022-present
        <a href="https://github.com/Okarin1/web-project" target="_blank"
          >@Okarin</a
        >
      </div>
    </div>
    <side-bar
      :sideArray="titleArray"
      :topIndex="topIndex"
    />
  </div>
</template>

<script>
import Poem from "./Poem.vue";
import SideBar from "./SideBar.vue";
import WebLinks from "./WebLinks.vue";
export default {
  components: { WebLinks, Poem, SideBar },
  name: "HelloWorld",
  data() {
    return {
      titleArray: [
        "实用网站",
        "奇趣网站",
        "剪辑设计",
        "工具合集",
        "前端相关",
        "JavaScript相关",
        "CSS相关",
        "Vue轮子",
        "冷门网站",
      ],
      webCount: [],
      barTop: [],
      topIndex: 0,
    };
  },
  created() {
    this.$nextTick(() => {
      for (let i in this.titleArray) {
        this.webCount.push(this.$refs.child[i].webCount(this.titleArray[i]));
      }
      this.$nextTick(() => {
        this.barTop = this.$refs.webBar.map((res) => {
          return res.offsetTop;
        });
      });
    });
    window.addEventListener("scroll", () => {
      for (let s of this.barTop) {
        if (window.scrollY > s) {
          this.topIndex = this.barTop.indexOf(s);
        }
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>

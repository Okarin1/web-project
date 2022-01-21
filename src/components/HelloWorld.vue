<template>
  <div class="okarin">
    <div class="content-box">
      <div v-for="(item, index) in titleArray" :key="index">
        <h2>
          {{ item }} <span class="badge badge-theme" style="vertical-align: top">{{ webCount[index] }}</span>
        </h2>
        <web-links ref="child" :navbars="item" />
      </div>
      <div class="footer">
        MIT Licensed | Copyright © 2022-present <a href="https://weibo.com/u/6331216566" target="_blank">@Okarin</a>
      </div>
    </div>
  </div>
</template>

<script>
import WebLinks from "./WebLinks.vue"
export default {
  components: { WebLinks},
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
    }
  },
  mounted() {
    this.$nextTick(() => {
      for (let i in this.titleArray) {
        this.webCount.push(this.$refs.child[i].webCount(this.titleArray[i]))
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

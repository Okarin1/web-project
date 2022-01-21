<template>
  <div class="okarin">
    <div class="content-box">
      <h2>实用网站</h2>
      <web-links navbars="实用网站" />
      <h2>趣味网站</h2>
      <web-links navbars="趣味网站" />
      <h2>剪辑设计</h2>
      <web-links navbars="剪辑设计" />
      <h2>工具合集</h2>
      <web-links navbars="工具合集" />
      <h2>前端相关</h2>
      <web-links navbars="前端相关" />
      <h2>JavaScript相关</h2>
      <web-links navbars="JavaScript相关" />
      <h2>CSS相关</h2>
      <web-links navbars="CSS相关" />
      <h2>Vue轮子</h2>
      <web-links navbars="Vue轮子" />
      <h2>冷门网站</h2>
      <web-links navbars="冷门网站" />
      <div class="footer">
        MIT Licensed | Copyright © 2022-present <a href="https://weibo.com/u/6331216566" target="_blank">@Okarin</a>
      </div>
    </div>
  </div>
</template>

<script>
import WebLinks from "./WebLinks.vue"
export default {
  components: { WebLinks },
  name: "HelloWorld",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>

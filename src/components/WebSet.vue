<template>
  <div>
    <div v-for="(item, index) in webSet" :key="index">
      <h2 :id="item.name" ref="webBar">
        {{ item.name
        }}<span
          class="badge badge-theme"
          style="vertical-align: top"
          v-text="webCount(item)"
        ></span>
      </h2>
      <web-links :webLink="item" />
    </div>
    <side-bar :sideArray="sideArray" :topIndex="topIndex" />
  </div>
</template>

<script>
import WebLinks from "./WebLinks.vue";
import SideBar from "./SideBar.vue";
export default {
  components: { WebLinks, SideBar },
  name: "Webset",
  props: {
    webSet: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      barTop: [],
      topIndex: 0,
    };
  },
  created() {
    this.$nextTick(() => {
      for (let i in this.webSet) {
        this.barTop.push(this.$refs.webBar[i].offsetTop);
      }
    });
    window.addEventListener("scroll", this.throttle(this.handleScroll, 100));
  },
  methods: {
    handleScroll() {
      for (let s of this.barTop) {
        if (window.scrollY > s) {
          this.topIndex = this.barTop.indexOf(s);
        }
      }
    },
    throttle(func, delay) {
      let timer = null;
      let startTime = Date.now();
      return function () {
        const curTime = Date.now();
        const remaining = delay - (curTime - startTime);
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        if (remaining <= 0) {
          func.apply(context, args);
          startTime = Date.now();
        } else {
          timer = setTimeout(func, remaining);
        }
      };
    },
    webCount(webLink) {
      return webLink.getWebNum();
    },
  },
  computed: {
    sideArray() {
      return this.webSet.map((res) => {
        return res.name;
      });
    },
  },
};
</script>


<style scoped lang="less">
</style>

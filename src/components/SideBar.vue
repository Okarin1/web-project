<template>
  <div>
    <ul class="side-bar">
      <li
        v-for="(item, index) in sideArray"
        :key="item"
        @click="sideClick(item, index)"
        :class="{ active: index == afterIndex}"
      >
        <a class="side-link" :href="`#${item}`" :class="{ active: index == afterIndex}">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sideArray: {
      type: Array,
      default: () => {
        return [];
      },
    },
    topIndex: 0,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    sideClick(item, index) {
      this.currentIndex = index;
      document.getElementById(item).scrollIntoView();
    },
  },
  computed:{
    afterIndex(){
      return Math.max(this.topIndex,this.currentIndex)
    }
  }
};
</script>

<style lang="less" scoped>
.side-bar {
  width: 12rem;
  transition: transform 0.25s ease-in-out 0s, opacity 0.25s ease-in-out 0s;
  transform: translateY(0px);
  opacity: 1;
  position: fixed;
  top: 20rem;
  bottom: 10rem;
  right: 2rem;
  overflow-y: scroll;
  padding-left: 0;
  list-style: none;
  font-size: 12px;
  li {
    padding: 0.2rem 0;
    display: list-item;
    text-align: -webkit-match-parent;
    cursor: pointer;
    border-left: 1px solid @code-color;
    .side-link {
      font-size: 1em;
      font-weight: 400;
      display: block !important;
      padding: 0.35rem 1rem 0.35rem 1.25rem;
      line-height: 1;
    }
    a {
      color: #000;
      text-decoration: none;
      &:hover {
        
        color: @theme-color;
      }
    }
  }
}
.side-bar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.active {
  color: @theme-color !important;
  border-left-color: @theme-color !important;
}

@media screen and (max-width: 1024px) {
  .side-bar {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  .side-bar {
    display: none;
  }
}
</style>

<template>
  <div class="nav">
    <ul class="links" >
      <li v-for="(items, index) of webLink" :key="index">
        <a :href="items.url" :title="items.desc" target="_blank" rel="noopener noreferrer">
          <img v-lazy="showIcon(items)" :key="items.url" />
          {{ items.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "WebLinks",
  props: {
    webLink: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  
  methods: {
    showIcon(item) {
      return item.icon ? item.icon : `https://favicons.fuzqing.workers.dev/api/getFavicon?url=${item.url}&size=32`
      // return `https://api.uomg.com/api/get.favicon?url=${item.url}`
    },
    
  },
}
</script>

<style lang="less" scoped>
html,
html.dark {
  .links {
    display: flex;
    align-content: flex-start;
    flex-flow: row wrap;
    list-style: none;
    li {
      flex: 0 0 28%;
      margin: 8px !important;
      position: relative;
      justify-content: space-between;
      color: #1f2f3e;
      transition-timing-function: cubic-bezier(0.88, 0.13, 0.25, 1);
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.06);
      transition: all 0.4s;
      border-radius: 2em;
      &:last-child {
        border-right: none;
      }
      &:hover {
        box-shadow: 0 10px 20px -10px #999;
        transform: translateY(-5px);
        z-index: 1;
        a {
          text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.15);
        }
      }
      a {
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 15px;
        text-decoration: none;
        border-radius: 20px;
        color: #242424;
        background: #fffffc;
        img {
          width: 16px;
          height: 16px;
          vertical-align: middle;
          margin: 0 5px 0 1em;
        }
        &:hover {
          color: @theme-color;
        }
      }
    }
  }
}
html.dark {
  .links {
    li {
      a {
        color: #e0eeff;
        background: #5b6b82;
        &:hover {
          color: @theme-color + #111;
          text-decoration: none;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  html,
  html.dark {
    .links {
      li {
        flex: 0 46%;
        margin: 8px;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  html,
  html.dark {
    .links {
      li {
        flex: 0 100%;
        margin: 8px 0;
      }
    }
  }
}
</style>

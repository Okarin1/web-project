import Vue from "vue"
import App from "./App.vue"
import VueLazyload from "vue-lazyload"

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("@/assets/favicon/placeholder.png"),
  loading: require("@/assets/favicon/placeholder.png"),
  attempt: 1,
})

new Vue({
  render: (h) => h(App),
}).$mount("#app")
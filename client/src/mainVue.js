import Vue from "vue";
import App from "./App.vue";
import store from "./store";

export default function skeletonApplication(divId) {
  Vue.config.productionTip = false;
  new Vue({
    store,
    render: h => h(App)
  }).$mount(divId);
}

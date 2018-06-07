// import stuPoc from "./mainVue";

// stuPoc("#app");

import Vue from "vue";
import App from "./App.vue";
import store from "./store";

var inter = divId => {
  Vue.config.productionTip = false;
  return new Vue({
    store,
    render: h => h(App)
  }).$mount(divId);
};

export { inter };

// export var a = "jibrish daled";

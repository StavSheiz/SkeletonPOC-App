// import stuPoc from "./mainVue";

// stuPoc("#app");

import Vue from "vue";
import App from "./App.vue";
import store from "./store";

var skeletonApplication = divId => {
  Vue.config.productionTip = false;
  return new Vue({
    store,
    render: h => h(App)
  }).$mount(divId);
};

export { skeletonApplication };

// export var a = "jibrish daled";

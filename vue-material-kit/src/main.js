// =========================================================
// * Vue Material Kit PRO - v1.2.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

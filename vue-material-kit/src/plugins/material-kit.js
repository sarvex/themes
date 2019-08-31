import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "@/assets/scss/material-kit.scss";
import "@/assets/demo.css";
import globalDirectives from "./globalDirectives";
import globalMixins from "./globalMixins";
import basicMixins from "./basicMixins";
import globalComponents from "./globalComponents";
import VueLazyload from "vue-lazyload";
import VueGitHubButtons from "vue-github-buttons";
import "vue-github-buttons/dist/vue-github-buttons.css";

export default {
  install(Vue) {
    Vue.use(VueMaterial);
    Vue.use(globalDirectives);
    Vue.use(globalMixins);
    Vue.use(basicMixins);
    Vue.use(globalComponents);
    Vue.use(VueLazyload, {
      observer: true,
      // optional
      observerOptions: {
        rootMargin: "0px",
        threshold: 0.1
      }
    });
    Vue.use(VueGitHubButtons, { useCache: false });
  }
};

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 全局使用编辑器
import TinymceEditor from "./components/editor.vue";
Vue.component("tinymce-editor", TinymceEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

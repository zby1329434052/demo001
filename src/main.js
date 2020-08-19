import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Vuex from 'vuex'

// 导入全局样式表
import './assets/css/global.css'
import '../src/plugins/element'
// 导入组件样式表
import 'element-ui/lib/theme-chalk/index.css'

import BaiduMap from 'vue-baidu-map'

// import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// vue.prototype.$http = axios

// Vue.use(Vuex)

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥  */
  ak: 'Vmat35Vngur0Ro4IeyyvhiLTrmLVCluv'
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


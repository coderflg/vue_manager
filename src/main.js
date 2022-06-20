import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {$post} from "@/network/fetch";
/* 导入字体图标 */
import './assets/fonts/iconfont.css'
/* 导入全局样式表 */
import './assets/css/base.css'
Vue.prototype.$post = $post

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


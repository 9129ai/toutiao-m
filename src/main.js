import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import 'amfe-flexible'
// 引入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入自定义公共样式表
import './styles/index.less'
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

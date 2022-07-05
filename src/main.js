import Vue from 'vue'
import App from './App.vue'
// 引入css文件
import "./assets/style/base.css"
import "./assets/style/index.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

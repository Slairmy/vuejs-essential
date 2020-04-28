// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 阻止Vue在启动的时候生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建一个Vue实例
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import FastClick from 'fastclick';
import 'lib-flexible';
import App from './App.vue'
import router from './router'
import store from './store/index'
import filters from './filters/index'
import 'normalize.css';
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
// import wechat from '@/common/wechat/index'
// Vue.use(wechat);

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  }, false);
}

// 注入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})
// const wx = Vue.wechat;
// wx.config({
//     appId: '',
//     nonceStr: '',
//     signature: '',
//     timestamp: '',
//     jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
// })
Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

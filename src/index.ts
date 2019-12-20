import '!style-loader!css-loader!normalize.css'
import Vue from 'vue'
import Router from 'vue-router'
import App from './App/App.vue'
import router from './App/RouterRoot/router'

Vue.config.productionTip = false
Vue.use(Router)

new Vue({
  router,
  render: (createElement) => createElement(App),
}).$mount('#root')

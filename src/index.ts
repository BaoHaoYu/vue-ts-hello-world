import '!style-loader!css-loader!normalize.css'
import Vue from 'vue'
import App from './App/App.vue'

Vue.config.productionTip = false

new Vue({
  render: (createElement) => createElement(App),
}).$mount('#root')

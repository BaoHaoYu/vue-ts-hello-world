import '!style-loader!css-loader!normalize.css'
import Vue from 'vue'
// @ts-ignore
import App from './App/App.vue'

Vue.config.productionTip = false

function renderApp() {
  new Vue({
    render: (h) => h(App),
  }).$mount('#root')
}

renderApp()

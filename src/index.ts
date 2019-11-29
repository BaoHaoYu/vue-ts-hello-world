import '!style-loader!css-loader!normalize.css'
import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import App from './App/App.vue'
import router from './App/RouterRoot/router'

Vue.config.productionTip = false
Vue.use(Router)

function renderApp() {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#root')
}

renderApp()

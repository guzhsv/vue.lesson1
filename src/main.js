import Vue from 'vue'
import App from './App.vue'
import devtools from '@vue/devtools'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

if (process.env.NODE_ENV === 'development') {
  devtools.connect(/* host, port */)
}

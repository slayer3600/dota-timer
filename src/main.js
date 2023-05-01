import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
document.title = "Dota 2 Timer";
// document.title = process.env.VUE_APP_TITLE;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

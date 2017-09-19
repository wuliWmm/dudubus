// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$ajax = axios

Vue.config.productionTip = false
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		count:0,
		start:"开始",
		end:"结束",
		minuteval:false
	},mutations:{
		tihuan(state,a) {
			state.start = a;

		},
		tihuant(state,b) {
			state.end = b;

		},
		fu(state,aaa) {
			state.count = aaa

		},
		min(state,bb){
			state.minuteval = bb
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

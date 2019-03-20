// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios'
import util from './utils'
import 'iview/dist/styles/iview.css'

import VueLazyload from 'vue-lazyload'
import './assets/style/reset.css';
import qs from 'qs'
Vue.config.productionTip = false
Vue.use(VueLazyload);
Vue.prototype.$http = axios
Vue.prototype.$util = util

axios.config.defaults.baseURL = 'http://api.yellgame.com'
axios.config.interceptors.request.use((config) => {
	// config.headers.Authorization = AUTH_TOKEN;
	if(config.method == 'post') {
		config.data = qs.stringify(config.data);
	}
	return config;
})
axios.config.interceptors.response.use((res) => {
	return res;
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

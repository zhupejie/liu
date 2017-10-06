// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import {store} from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.use(MuseUI)
Vue.use(vueg, router,{
	tabs:[{                             
		name:'shi1'
	},{
		name:'shi2'
	},{
		name:'shi3'
	}]
})
Vue.use(VueTouch, { name: 'v-touch' })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  
  template: '<App/>',
  components: { App }
})

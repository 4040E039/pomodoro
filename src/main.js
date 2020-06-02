import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style/style.stylus'
import VuePageTransition from 'vue-page-transition'
import 'vue-loaders/dist/vue-loaders.css'
import VueLoaders from 'vue-loaders'

// 必要引用
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// vuedraggable引用
import draggable from 'vuedraggable'

// 根據 icon 的種類引用
import { faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faPlus, faHome, faList, faCog, faHistory, faTrash, faBell, faBellSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faPlus, faHome, faList, faCog, faHistory, faTrash, faBell, faBellSlash)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('draggable', draggable)
Vue.use(VueLoaders)
Vue.use(VuePageTransition)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

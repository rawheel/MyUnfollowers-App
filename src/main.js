import Vue from 'vue'
import App from './App.vue'
import './index.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faUser} from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUser)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuesax, {
  // options here
})

Vue.config.productionTip = false

// api
import * as services from "./services";
Vue.prototype.$api = services.default;


new Vue({
  render: h => h(App),
}).$mount('#app')

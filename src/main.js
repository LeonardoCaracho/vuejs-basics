import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store/store'
import 'nprogress/nprogress.css'

import BaseIcon from '@/components/BaseIcon'
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'
import BaseButton from '@/components/BaseButton'

import '@/assets/styles/global.css'

Vue.use(Vuelidate)

Vue.component('BaseIcon', BaseIcon) //global component
Vue.component('BaseInput', BaseInput) //global component
Vue.component('BaseSelect', BaseSelect) //global component
Vue.component('BaseButton', BaseButton) //global component

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

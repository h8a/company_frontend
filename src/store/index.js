import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/pages/auth/store/auth'
import employees from '@/pages/employees/store/employees'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    employees
  }
})

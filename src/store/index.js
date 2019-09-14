import Vue from 'vue'
import Vuex from 'vuex'

import inhabitants from './modules/inhabitants'

Vue.use(Vuex)
export default new Vuex.Store({
    // namespace: true,
    modules: {
      inhabitants,
    }
})
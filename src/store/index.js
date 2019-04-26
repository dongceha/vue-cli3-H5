import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import movie from './modules/movie';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    login,
    movie
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})

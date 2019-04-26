import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import movie from './modules/movie';
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    login,
    movie
  }
})

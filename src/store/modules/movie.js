import * as type from '../types'
import {
  getItemByType
} from 'api/index'
export default {
  namespaced: true,
  state: {
    movieList: [],
    isDone: false,
  },
  mutations: {
    [type.SET_ITEM_BY_TYPE](state, subjects) {
      subjects.length === 0 ? state.isDone = true : '';
      state.movieList = [...state.movieList, ...subjects];
    }
  },
  actions: {
    async getItemByType(state, param) {
      try {
        let {
          subjects
        } = await getItemByType(param)
        state.commit(type.SET_ITEM_BY_TYPE, subjects);
      } catch (error) {
      }
    }
  }
}

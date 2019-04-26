import * as type from '../types'
import {
  getItemByType,
  getMovieById
} from 'api/index'
export default {
  namespaced: true,
  state: {
    movieList: [],
    movieDetail: {},
    isDone: false
  },
  mutations: {
    [type.SET_ITEM_BY_TYPE](state, subjects) {
      if (subjects.length === 0) {
        state.isDone = true;
      }
      state.movieList = [...state.movieList, ...subjects];
    },
    [type.SET_MOVIE_BY_ID](state, detail) {
      state.movieDetail = { ...detail };
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
    },
    async getMovieById(state, param) {
      try {
        let movieDetail = await getMovieById(param)
        state.commit(type.SET_MOVIE_BY_ID, movieDetail);
      } catch (error) {
      }
    }
  }
}

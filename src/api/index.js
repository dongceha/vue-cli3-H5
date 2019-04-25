import qs from 'qs';
import http from './http';

export const login = params => http.post('/mock/5cb48c7ed491cd741c54456f/base/login', qs.stringify(params));
export const getIndex = params => http.get('/mock/5cb48c7ed491cd741c54456f/base/login', params);

export const getItemByType = ({
  type,
  start = 0,
  count = 20
}) => http.get(`/movie/${type}?start=${start}&count=${count}`);
export const getItemById = ({
  type,
  start = 0,
  count = 20
}) => http.get(`/movie/${type}?start=${start}&count=${count}`);
export const getMovieById = id => http.get(`/movie/subject/${id}`);
export const getSearchMovies = ({
  query,
  start = 0
}) => http.get(encodeURI(`/movie/search?q=${query}&start=${start}`));

// import { get, post } from '@/axios/http.js'
// function getIndex (params) {
//     return get('/mock/5cb48c7ed491cd741c54456f/base/index', params)
// }
// function login(params) {
//     return post('/mock/5cb48c7ed491cd741c54456f/base/login', params)
// }
// export {
//     getIndex,
//     login
// }

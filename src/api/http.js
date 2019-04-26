import axios from 'axios';
import store from '@/store/index';
import {
  Toast
} from 'mint-ui';
import router from '@/router';

// 默认超时时间
axios.defaults.timeout = 8000;
// 基础路径
axios.defaults.baseURL = '/api';
// request 拦截
axios.interceptors.request.use(
  (config) => {
    // 设置 Token
    // const { token } = store.state.user;
    // if (token !== '') {
    //   config.headers.Authorization = token;
    // }
    return config;
  },
  (err) => {
    Toast({
      message: '请求超时',
      position: 'middle',
      duration: 2000
    });
    return Promise.reject(err);
  }
);
// response 拦截
axios.interceptors.response.use(
  ({ data }) => {
    if (data.code && data.code === 401) {
      store.commit('SET_TOKEN', '');
      store.commit('SET_USER', '');
      router.push({ path: '/login' });
    }
    return data;
  },
  (err) => {
    Toast({
      message: '加载出错',
      position: 'middle',
      duration: 2000
    });
    return Promise.reject(err);
  }
);

export default axios;

import axios from 'axios';
import { message } from 'antd';

import { API_BASE_URL } from '../constants';

const request = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// 请求拦截器：添加 token 等公共参数
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器：统一错误处理、解包 data
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    const msg = response?.data?.message || response?.statusText || error.message || '请求失败';
    message.error(msg);
    if (response?.status === 401) {
      localStorage.removeItem('token');
      // 可在此跳转登录页: window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default request;

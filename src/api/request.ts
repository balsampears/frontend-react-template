import axios, { InternalAxiosRequestConfig } from 'axios';
import { message } from 'antd';

import { API_BASE_URL } from '../constants';

const request = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    const msg = response?.data?.message || response?.statusText || error.message || '请求失败';
    message.error(msg);
    if (response?.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default request;

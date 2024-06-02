// api.ts
import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.href = config.routes.login;
    }
    return Promise.reject(error);
  }
);

api.interceptors.request.use((config) => {
  const data = JSON.parse(localStorage.data);
  if (data.token) {
    config.headers.Authorization = `Bearer ${data.token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

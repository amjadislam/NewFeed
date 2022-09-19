// axios

import axios from 'axios';

axios.defaults.timeout = 30 * 1000;
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async config => {
    return config;
  },
  error => Promise.reject(error),
);
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.log(error.response);
      if (error.response.data.message) {
      }
      if (error.response.status === 401) {
      } else if (error.response.status === 403) {
      } else if (error.response.status === 404) {
      } else if (error.response.status === 405) {
      } else if (error.response.status === 422) {
      } else if (error.response.status >= 500) {
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

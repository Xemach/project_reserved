import axios from 'axios';

export const baseURL = 'http://192.168.0.101:3000/';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
instance.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);
export default instance;

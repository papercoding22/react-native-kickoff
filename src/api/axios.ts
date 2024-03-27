// Create Axios Instance

import axios from 'axios';

const baseURL = `${process.env.API_URL ? process.env.API_URL : ''}/`;

export const instance = axios.create({
  baseURL,
});

// create interceptor
instance.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

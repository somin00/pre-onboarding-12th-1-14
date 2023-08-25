import axios from 'axios';

const serverUrl = 'https://www.pre-onboarding-selection-task.shop';

export const axiosCreate = () =>
  axios.create({
    baseURL: serverUrl,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });

export const userInstance = axiosCreate();

export const todoInstance = axiosCreate();

todoInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

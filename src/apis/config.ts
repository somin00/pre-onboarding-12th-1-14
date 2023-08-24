import axios from 'axios';

const serverUrl = 'https://www.pre-onboarding-selection-task.shop';

export const userInstance = axios.create({
  baseURL: serverUrl,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});

export const todoInstance = axios.create({
  baseURL: serverUrl,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});

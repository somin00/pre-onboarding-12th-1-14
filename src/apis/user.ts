import { TestId } from '../components/common/AuthForm';

import { axiosInstance } from './config';

export const authStatusCodeObj = {
  signup: 201,
  signin: 200,
} as const;

const signup = (data: Record<TestId['input'], string>) => {
  return axiosInstance({
    url: 'auth/signup',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
};

const signin = (data: Record<TestId['input'], string>) => {
  return axiosInstance({
    url: 'auth/signin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
};

export const userApis = {
  signup,
  signin,
};

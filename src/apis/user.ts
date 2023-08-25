import { TestId } from '../components/auth/AuthForm';

import { userInstance } from './config';

export const authStatusCodeObj = {
  signup: 201,
  signin: 200,
} as const;

const signup = (data: Record<TestId['input'], string>) => {
  return userInstance({
    url: 'auth/signup',
    method: 'POST',
    data,
  });
};

const signin = (data: Record<TestId['input'], string>) => {
  return userInstance({
    url: 'auth/signin',
    method: 'POST',
    data,
  });
};

export const userApis = {
  signup,
  signin,
};

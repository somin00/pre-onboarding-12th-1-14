import { userInstance } from './config';
import { TestId } from '../components/common/AuthForm';

export const authStatusCodeObj = {
  signup: 201,
  signin: 200,
} as const;

const signup = (data: Record<TestId['input'], string>) => {
  return userInstance({
    url: 'auth/signup',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
};

const signin = (data: Record<TestId['input'], string>) => {
  return userInstance({
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

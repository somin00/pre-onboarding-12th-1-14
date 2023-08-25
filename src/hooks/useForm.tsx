import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { authStatusCodeObj, userApis } from '../apis/user';
import { TestId } from '../components/common/AuthForm';
import { pathsObj } from '../router/router';

type AuthRegexKey = keyof typeof authRegex;
type TestRegex = (type: AuthRegexKey, value: string) => boolean;

export type UseForm = (regex: (typeof authRegex)[AuthRegexKey]) => {
  handleChange: HandleChange;
  handleSubmit: HandleSubmit<TestId['button']>;
  isBtnDisabled: boolean;
};
export type HandleSubmit<T> = (e: FormEvent<HTMLFormElement>, testId: T) => void;
export type HandleChange = (e: ChangeEvent<HTMLInputElement>, testId: TestId['input']) => void;
export type ValidationResult = Record<TestId['input'], boolean>;

const authRegex = {
  email: /@/,
  password: /^.{8,}$/,
};

export const testRegex: TestRegex = (type, value) => authRegex[type].test(value);

export const useForm: UseForm = regex => {
  const navigate = useNavigate();

  const [validationResult, setValidationResult] = useState<ValidationResult>({
    email: false,
    password: false,
  });
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleChange: HandleChange = (e, testId) => {
    setValidationResult(prev => ({
      ...prev,
      [testId]: testRegex(testId, e.target.value),
    }));
  };

  useEffect(() => {
    checkValidationResult();
  }, [validationResult]);

  const checkValidationResult = () => {
    let key: keyof ValidationResult;

    for (key in validationResult) if (!validationResult[key]) return setIsBtnDisabled(false);

    setIsBtnDisabled(true);
  };

  const handleSubmit: HandleSubmit<TestId['button']> = (e, testId) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData) as Record<TestId['input'], string>;

    userApis[testId](payload)
      .then(res => {
        const { data, status } = res;
        if (status === authStatusCodeObj[testId]) {
          if (testId === 'signin') {
            localStorage.setItem('access_token', data.access_token);
            navigate(pathsObj.todo);
          }
          if (testId === 'signup') navigate(pathsObj.signin);
        }
      })
      .catch(err => console.log(err));
  };

  return {
    handleChange,
    handleSubmit,
    isBtnDisabled,
  };
};

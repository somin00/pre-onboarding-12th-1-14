import { ChangeEvent, FormEvent, useCallback, useContext, useEffect, useState } from 'react';

import { AxiosError, isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { authStatusCodeObj, userApis } from 'apis/user';
import { TestId } from 'components/auth/AuthForm';
import { pathsObj } from 'router/router';
import { AuthContext } from 'store/authContext';

export type UseForm = (regex: AuthRegex) => {
  handleChange: HandleChange;
  handleSubmit: HandleSubmit<TestId['button']>;
  isBtnDisabled: boolean;
};

export type HandleError<T> = (error: AxiosError<T>) => void;
export type HandleSubmit<T> = (e: FormEvent<HTMLFormElement>, testId: T) => void;
export type HandleChange = (e: ChangeEvent<HTMLInputElement>, testId: TestId['input']) => void;
export type ValidationResult = Record<TestId['input'], boolean>;

type AuthRegex = Record<'email' | 'password', RegExp>;

export const useForm: UseForm = regex => {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const [validationResult, setValidationResult] = useState<ValidationResult>({
    email: false,
    password: false,
  });
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleChange: HandleChange = (e, testId) => {
    setValidationResult(prev => ({
      ...prev,
      [testId]: regex[testId].test(e.target.value),
    }));
  };

  const checkValidationResult = useCallback(() => {
    let key: keyof ValidationResult;

    for (key in validationResult) if (!validationResult[key]) return setIsBtnDisabled(false);

    setIsBtnDisabled(true);
  }, [validationResult]);

  useEffect(() => {
    checkValidationResult();
  }, [checkValidationResult]);

  const handleSubmit: HandleSubmit<TestId['button']> = (e, testId) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData) as Record<TestId['input'], string>;

    userApis[testId](payload)
      .then(res => {
        const { data, status } = res;
        if (status === authStatusCodeObj[testId]) {
          if (testId === 'signin') {
            ctx.onLogin(data.access_token);
            navigate(pathsObj.todo);
          }
          if (testId === 'signup') navigate(pathsObj.signin);
        }
      })
      .catch(err => handleError(err));
  };

  const handleError: HandleError<{ status: number; message: string }> = error => {
    if (isAxiosError(error) && error.response) {
      const { status } = error.response;
      alert(status + ' ' + error.response.data.message);
    } else alert('Unknown Network error');
  };

  return {
    handleChange,
    handleSubmit,
    isBtnDisabled,
  };
};

import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { authStatusCodeObj, userApis } from '../apis/user';
import { TestId } from '../components/auth/AuthForm';
import { pathsObj } from '../router/router';
import { AuthContext } from '../store/authContext';

export type UseForm = (regex: AuthRegex) => {
  handleChange: HandleChange;
  handleSubmit: HandleSubmit<TestId['button']>;
  isBtnDisabled: boolean;
};
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
            ctx.onLogin(data.access_token);
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

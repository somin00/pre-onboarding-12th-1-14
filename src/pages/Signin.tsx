import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthForm } from 'components/auth/AuthForm';
import { AuthInput } from 'components/auth/AuthInput';
import { useForm } from 'hooks/useForm';
import { pathsObj } from 'router/router';
import { AuthContext } from 'store/authContext';

import { placeholder } from './Signup';

export const Signin = () => {
  const { handleSubmit, isBtnDisabled, handleChange } = useForm({
    email: /@/,
    password: /^.{8,}$/,
  });
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (ctx.accessToken) {
      navigate(pathsObj.todo);
    }
  }, [ctx.accessToken, navigate]);

  return (
    <section>
      <AuthForm
        title='로그인'
        testId='signin'
        handleSubmit={handleSubmit}
        isBtnDisabled={isBtnDisabled}
      >
        <AuthInput
          type='text'
          testId='email'
          placeholder={placeholder.email}
          handleChange={handleChange}
        />
        <AuthInput
          type='password'
          testId='password'
          placeholder={placeholder.password}
          handleChange={handleChange}
        />
      </AuthForm>
    </section>
  );
};

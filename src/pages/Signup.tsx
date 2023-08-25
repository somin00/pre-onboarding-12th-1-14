import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../components/auth/AuthForm';
import { AuthInput } from '../components/auth/AuthInput';
import { useForm } from '../hooks/useForm';
import { pathsObj } from '../router/router';
import { AuthContext } from '../store/authContext';

export const placeholder = {
  email: '이메일은 @가 포함되어야 합니다.',
  password: '비밀번호는 8자 이상입니다.',
};

export const Signup = () => {
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
        title='회원가입'
        testId='signup'
        handleSubmit={handleSubmit}
        isBtnDisabled={isBtnDisabled}
      >
        <AuthInput
          type='email'
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

import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../components/auth/AuthForm';
import { AuthInput } from '../components/auth/AuthInput';
import { useFormValidation } from '../hooks/useInputValidation';
import { pathsObj } from '../router/router';
import { AuthContext } from '../store/authContext';

export const Signup = () => {
  const { handleSubmit, isBtnDisabled, validationResult, setValidationResult } =
    useFormValidation();
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
        validationResult={validationResult}
      >
        <AuthInput type='email' testId='email' setValidationResult={setValidationResult} />
        <AuthInput type='password' testId='password' setValidationResult={setValidationResult} />
      </AuthForm>
    </section>
  );
};

import { AuthForm } from '../components/common/AuthForm';
import { AuthInput } from '../components/common/AuthInput';
import { useForm } from '../hooks/useForm';

import { placeholder } from './Signup';

export const Signin = () => {
  const { handleSubmit, isBtnDisabled, handleChange } = useForm({
    email: /@/,
    password: /^.{8,}$/,
  });

  return (
    <section>
      <AuthForm
        title='로그인'
        testId='signin'
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

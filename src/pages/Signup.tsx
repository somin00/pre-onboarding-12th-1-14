import { AuthForm } from '../components/common/AuthForm';
import { AuthInput } from '../components/common/AuthInput';
import { useForm } from '../hooks/useForm';

export const Signup = () => {
  const { handleSubmit, isBtnDisabled, handleChange } = useForm({
    email: /@/,
    password: /^.{8,}$/,
  });

  return (
    <section>
      <AuthForm
        title='회원가입'
        testId='signup'
        handleSubmit={handleSubmit}
        isBtnDisabled={isBtnDisabled}
      >
        <AuthInput type='email' testId='email' handleChange={handleChange} />
        <AuthInput type='password' testId='password' handleChange={handleChange} />
      </AuthForm>
    </section>
  );
};

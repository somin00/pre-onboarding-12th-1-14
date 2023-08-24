import { AuthForm } from '../components/common/AuthForm';
import { AuthInput } from '../components/common/AuthInput';
import { useFormValidation } from '../hooks/useInputValidation';

export const Signup = () => {
  const { handleSubmit, isBtnDisabled, validationResult, setValidationResult } =
    useFormValidation();

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

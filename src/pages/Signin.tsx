import { AuthForm } from "../components/common/AuthForm";
import { AuthInput } from "../components/common/AuthInput";

export const Signin = () => {
  return (
    <section>
      <AuthForm title="로그인" buttonTestId="signin-button">
        <AuthInput type="email" testId="email-input" />
        <AuthInput type="password" testId="password-input" />
      </AuthForm>
    </section>
  );
};

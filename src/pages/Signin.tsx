import { AuthForm } from "../components/common/AuthForm";
import { AuthInput } from "../components/common/AuthInput";
import { FormEventHandler } from "react";

export const Signin = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <AuthForm
        title="로그인"
        buttonTestId="signin-button"
        handleSubmit={handleSubmit}
      >
        <AuthInput type="email" testId="email-input" />
        <AuthInput type="password" testId="password-input" />
      </AuthForm>
    </section>
  );
};

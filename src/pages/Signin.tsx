import { FormEventHandler, useState } from "react";

import { AuthForm } from "../components/common/AuthForm";
import { AuthInput } from "../components/common/AuthInput";

export type TestId = {
  input: "email" | "password";
  button: "signin" | "signup";
};
export type ValidationResult = {
  email: boolean;
  password: boolean;
};

export const Signin = () => {
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    email: false,
    password: false,
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <AuthForm title="로그인" testId="signin" handleSubmit={handleSubmit}>
        <AuthInput
          type="email"
          testId="email"
          validationResult={validationResult}
          setValidationResult={setValidationResult}
        />
        <AuthInput
          type="password"
          testId="password"
          validationResult={validationResult}
          setValidationResult={setValidationResult}
        />
      </AuthForm>
    </section>
  );
};

import { FormEventHandler } from "react";

import { AuthForm } from "../components/common/AuthForm";
import { AuthInput } from "../components/common/AuthInput";
import { useFormValidation } from "../hooks/useInputValidation";

export type TestId = {
  input: "email" | "password";
  button: "signin" | "signup";
};
export type ValidationResult = Record<TestId["input"], boolean>;

export const Signin = () => {
  const { isBtnDisabled, validationResult, setValidationResult } =
    useFormValidation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("submit!");
  };

  return (
    <section>
      <AuthForm
        title="로그인"
        testId="signin"
        handleSubmit={handleSubmit}
        isBtnDisabled={isBtnDisabled}
        validationResult={validationResult}
      >
        <AuthInput
          type="email"
          testId="email"
          setValidationResult={setValidationResult}
        />
        <AuthInput
          type="password"
          testId="password"
          setValidationResult={setValidationResult}
        />
      </AuthForm>
    </section>
  );
};

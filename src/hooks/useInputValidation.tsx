import { useEffect, useState } from "react";
import { ValidationResult } from "../pages/Signin";

type AuthRegexKey = keyof typeof authRegex;
type TestRegex = (type: AuthRegexKey, value: string) => boolean;
export type UseFormValidation = typeof useFormValidation;

const authRegex = {
  email: /^(.+)@(.+)$/,
  password: /^.{9,}$/,
};

export const useFormValidation = () => {
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    email: false,
    password: false,
  });

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  useEffect(() => {
    checkValidationResult();
  }, [validationResult]);

  const testRegex: TestRegex = (type, value) => authRegex[type].test(value);

  const checkValidationResult = () => {
    let key: keyof ValidationResult;

    for (key in validationResult)
      if (!validationResult[key]) return setIsBtnDisabled(false);

    setIsBtnDisabled(true);
  };

  return {
    testRegex,
    isBtnDisabled,
    validationResult,
    setValidationResult,
  };
};

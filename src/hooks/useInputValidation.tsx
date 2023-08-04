import { FormEvent, useEffect, useState } from "react";
import { statusCodeObj, userApis } from "../apis/user";
import { useNavigate } from "react-router-dom";
import { TestId } from "../components/common/AuthForm";
import { pathsObj } from "../router/router";

type AuthRegexKey = keyof typeof authRegex;
type TestRegex = (type: AuthRegexKey, value: string) => boolean;

export type UseFormValidation = typeof useFormValidation;
export type HandleSubmit<T> = (e: FormEvent<HTMLFormElement>, path: T) => void;
export type ValidationResult = Record<TestId["input"], boolean>;

const authRegex = {
  email: /^(.+)@(.+)$/,
  password: /^.{9,}$/,
};

export const testRegex: TestRegex = (type, value) =>
  authRegex[type].test(value);

export const useFormValidation = () => {
  const navigate = useNavigate();

  const [validationResult, setValidationResult] = useState<ValidationResult>({
    email: false,
    password: false,
  });
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  useEffect(() => {
    checkValidationResult();
  }, [validationResult]);

  const checkValidationResult = () => {
    let key: keyof ValidationResult;

    for (key in validationResult)
      if (!validationResult[key]) return setIsBtnDisabled(false);

    setIsBtnDisabled(true);
  };

  const handleSubmit: HandleSubmit<TestId["button"]> = (e, path) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData) as Record<
      TestId["input"],
      string
    >;

    userApis[path](payload)
      .then((res) => {
        const { data, status } = res;
        if (status === statusCodeObj[path]) {
          if (path === "signin") {
            localStorage.setItem("access_token", data.access_token);
            navigate(`/${pathsObj.todo}`);
          }
          if (path === "signup") navigate(`/${pathsObj.signin}`);
        }
      })
      .catch((err) => console.log(err));
  };

  return {
    handleSubmit,
    isBtnDisabled,
    validationResult,
    setValidationResult,
  };
};

import {
  FC,
  ChangeEventHandler,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
} from "react";
import styled from "@emotion/styled";

import type { TestId, ValidationResult } from "../../pages/Signin";
import { testRegex } from "../../hooks/useInputValidation";

type Props = {
  type: HTMLInputTypeAttribute;
  testId: TestId["input"];
  setValidationResult: Dispatch<SetStateAction<ValidationResult>>;
};

export const AuthInput: FC<Props> = ({ type, testId, setValidationResult }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValidationResult((prev) => ({
      ...prev,
      [testId]: testRegex(testId, e.target.value),
    }));
  };

  return (
    <StyledInput
      type={type}
      name={testId}
      data-testid={testId + "-input"}
      onChange={handleChange}
    />
  );
};

const StyledInput = styled.input`
  border: 1px lightgray solid;
  width: 100%;
  height: 40px;
  font-size: 20px;
  padding: 10px;
`;

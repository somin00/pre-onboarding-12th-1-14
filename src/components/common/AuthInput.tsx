import {
  FC,
  ChangeEventHandler,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
} from "react";
import styled from "@emotion/styled";

import type { TestId, ValidationResult } from "../../pages/Signin";

type Props = {
  type: HTMLInputTypeAttribute;
  testId: TestId["input"];
  validationResult: ValidationResult;
  setValidationResult: Dispatch<SetStateAction<ValidationResult>>;
};

export const AuthInput: FC<Props> = ({
  type,
  testId,
  validationResult,
  setValidationResult,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {};

  return (
    <StyledInput
      type={type}
      data-testid={testId + "-input"}
      onChange={handleChange}
      disabled={validationResult[testId]}
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

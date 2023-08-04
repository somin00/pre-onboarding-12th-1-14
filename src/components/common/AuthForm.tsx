import type { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

import type { TestId, ValidationResult } from "../../pages/Signin";
import type {
  HandleSubmit,
  UseFormValidation,
} from "../../hooks/useInputValidation";

type Props = {
  title: string;
  testId: TestId["button"];
  validationResult: ValidationResult;
  handleSubmit: HandleSubmit<TestId["button"]>;
  isBtnDisabled: ReturnType<UseFormValidation>["isBtnDisabled"];
};

const FORM_WIDTH = 400;
const FORM_PADDING = 30;

export const AuthForm: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  testId,
  handleSubmit,
  isBtnDisabled,
}) => {
  return (
    <StyledForm onSubmit={(e) => handleSubmit(e, testId)}>
      <h1>{title}</h1>
      {children}
      <StyledSubmitButton
        type="submit"
        isActive={isBtnDisabled}
        disabled={!isBtnDisabled}
        data-testid={testId + "-button"}
      >
        {title}
      </StyledSubmitButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: ${FORM_WIDTH}px;
  height: 400px;
  padding: ${FORM_PADDING}px;
  border: 1px lightgray solid;
`;
const StyledSubmitButton = styled.button<{ isActive: boolean }>`
  width: ${FORM_WIDTH}px;
  height: 50px;

  position: absolute;
  bottom: ${FORM_PADDING}px;

  color: white;
  border: none;
  background-color: ${(props) => (props.isActive ? "dodgerblue" : "lightgrey")};

  ${(props) => (props.isActive ? "" : null)}
  &:hover {
    background-color: #0074e8;
    cursor: pointer;
  }
`;

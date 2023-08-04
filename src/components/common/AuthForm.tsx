import styled from "@emotion/styled";
import type { FC, FormEventHandler, PropsWithChildren } from "react";
import type { TestId, ValidationResult } from "../../pages/Signin";
import type { UseFormValidation } from "../../hooks/useInputValidation";

type Props = {
  title: string;
  testId: TestId["button"];
  handleSubmit: FormEventHandler<HTMLFormElement>;
  isBtnDisabled: ReturnType<UseFormValidation>["isBtnDisabled"];
  validationResult: ValidationResult;
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
    <StyledForm onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {children}
      <StyledSubmitButton
        type="submit"
        data-testid={testId + "-button"}
        disabled={!isBtnDisabled}
        isActive={isBtnDisabled}
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

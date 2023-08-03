import styled from "@emotion/styled";
import { FC, HTMLInputTypeAttribute } from "react";

type Props = {
  type: HTMLInputTypeAttribute;
  testId: "email-input" | "password-input" | "signup-button";
};

export const AuthInput: FC<Props> = ({ type, testId }) => {
  return <StyledInput type={type} data-testid={testId} />;
};

const StyledInput = styled.input`
  border: 1px lightgray solid;
  width: 100%;
  height: 40px;
  font-size: 20px;
  padding: 10px;
`;

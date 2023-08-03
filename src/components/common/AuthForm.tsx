import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

const FORM_WIDTH = 400;
const FORM_PADDING = 30;

export const AuthForm: FC<PropsWithChildren> = ({ children }) => {
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
  const StyledSubmitButton = styled.button`
    width: ${FORM_WIDTH}px;
    height: 50px;

    position: absolute;
    bottom: ${FORM_PADDING}px;

    color: white;
    border: none;
    cursor: pointer;
    background-color: dodgerblue;

    &:hover {
      background-color: #0074e8;
    }
  `;

  return (
    <StyledForm>
      {children}
      <StyledSubmitButton />
    </StyledForm>
  );
};

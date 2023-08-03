import styled from "@emotion/styled";
import { FC, HTMLInputTypeAttribute } from "react";

type Props = {
  type: HTMLInputTypeAttribute;
};

export const AuthInput: FC<Props> = ({ type }) => {
  return <StyledInput type={type} />;
};

const StyledInput = styled.input`
  border: 1px lightgray solid;
  width: 100%;
  height: 40px;
  font-size: 20px;
  padding: 10px;
`;

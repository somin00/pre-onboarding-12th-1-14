import { FC, HTMLInputTypeAttribute } from 'react';

import styled from '@emotion/styled';

import { TestId } from 'components/auth/AuthForm';
import { HandleChange } from 'hooks/useForm';

type Props = {
  type: HTMLInputTypeAttribute;
  testId: TestId['input'];
  placeholder: string;
  handleChange: HandleChange;
};

export const AuthInput: FC<Props> = ({ type, testId, placeholder, handleChange }) => {
  return (
    <StyledInput
      type={type}
      name={testId}
      data-testid={testId + '-input'}
      onChange={e => handleChange(e, testId)}
      placeholder={placeholder}
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

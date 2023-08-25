import { FC, PropsWithChildren } from 'react';

import styled from '@emotion/styled';

export const TodoContainer: FC<PropsWithChildren> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

const StyledSection = styled.section`
  display: grid;
  gap: 10px;
`;

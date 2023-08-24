import styled from '@emotion/styled';

const ErrorBoundary = () => {
  return (
    <StyledMain>
      <p>404 | 페이지를 찾을 수 없습니다.</p>
    </StyledMain>
  );
};

export default ErrorBoundary;

const StyledMain = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
`;

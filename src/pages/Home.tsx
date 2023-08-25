import { useContext, useEffect } from 'react';

import styled from '@emotion/styled';
import { Outlet, useNavigate } from 'react-router-dom';

import { PageNavigation } from 'components/layout/PageNavigation';
import { pathsObj } from 'router/router';
import { AuthContext } from 'store/authContext';

export const Home = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (ctx.accessToken) {
      navigate(pathsObj.todo);
    }
    if (!ctx.accessToken) {
      navigate(pathsObj.signin);
    }
  }, [ctx.accessToken, navigate]);

  return (
    <>
      <PageNavigation />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
`;

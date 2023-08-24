import { useEffect } from 'react';

import styled from '@emotion/styled';
import { Outlet, useNavigate } from 'react-router-dom';

import PageNavigation from '../components/PageNavigation';
import { pathsObj } from '../router/router';

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) navigate(pathsObj.todo);
  }, []);

  return (
    <StyledMain>
      <PageNavigation />
      <Outlet />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
`;

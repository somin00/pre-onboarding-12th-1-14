import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageNavigation = () => {
  return (
    <header>
      <nav>
        <StyledList>
          <li>
            <NavLink to='/signup' className={({ isActive }) => (isActive ? 'active' : undefined)}>
              회원가입
            </NavLink>
          </li>
          <li>
            <NavLink to='/signin' className={({ isActive }) => (isActive ? 'active' : undefined)}>
              로그인
            </NavLink>
          </li>
          <li>
            <NavLink to='/todo' className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Todo List
            </NavLink>
          </li>
        </StyledList>
      </nav>
    </header>
  );
};

const StyledList = styled.ul`
  display: flex;
  padding: 1rem;
  & li {
    margin-left: 1rem;
  }
  & a {
    color: black;
    text-decoration: none;
  }
  & a:hover,
  & a.active {
    color: #0074e8;
    text-decoration: underline;
  }
`;

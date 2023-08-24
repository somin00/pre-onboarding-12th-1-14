import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const PageNavigation = () => {
  return (
    <header>
      <nav>
        <StyledList>
          <li>
            <NavLink to='/signup' className={({ isActive }) => (isActive ? 'active' : undefined)}>
              가입하기
            </NavLink>
          </li>
          <li>
            <NavLink to='/signin' className={({ isActive }) => (isActive ? 'active' : undefined)}>
              로그인하기
            </NavLink>
          </li>
          <li>
            <NavLink to='/todo' className={({ isActive }) => (isActive ? 'active' : undefined)}>
              할 일
            </NavLink>
          </li>
        </StyledList>
      </nav>
    </header>
  );
};

const StyledList = styled.ul`
  display: flex;
  & li {
    margin-left: 1rem;
  }
  & a {
    color: black;
    text-decoration: none;
  }
  & a:hover,
  & a.active {
    color: steelblue;
    text-decoration: underline;
  }
`;

export default PageNavigation;

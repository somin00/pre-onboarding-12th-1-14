import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

export const Home = () => {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
`;

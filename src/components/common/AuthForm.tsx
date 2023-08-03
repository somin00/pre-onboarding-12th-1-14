import styled from "@emotion/styled";

export const AuthForm = () => {
  const StyledForm = styled.form`
    display: grid;
    place-items: center;
    width: 400px;
    height: 400px;
    border: 1px lightgray solid;
  `;

  return <StyledForm>AuthForm</StyledForm>;
};

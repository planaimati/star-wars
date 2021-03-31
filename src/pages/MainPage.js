import React from "react";
import styled from "styled-components";

const MainPage = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  min-height: 100vh;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 730px) {
    width: 100%;
  }
`;

export default MainPage;

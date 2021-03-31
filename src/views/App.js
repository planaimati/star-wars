import React, { useContext, useEffect } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import styled from "styled-components";
import { AppContext } from "../context";
//components
import MainPage from "../pages/MainPage";
import Item from "../components/Item";
import Popup from "../components/Popup";
import Filter from "../pages/Filter";

const App = () => {
  const { searchItems, page, loading } = useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <StyledHeader>Star Wars Characters Catalogue</StyledHeader>
        <Filter></Filter>
        <MainPage>
          {loading ? (
            <p>loading...</p>
          ) : (
            searchItems
              .slice(0, page)
              .map((item, index) => (
                <Item key={index} id={item.name} {...item}></Item>
              ))
          )}
        </MainPage>
        <Popup />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 4rem;
`;

const StyledHeader = styled.h1`
  margin: 2rem;
  font-size: 4rem;
  letter-spacing: 0.2rem;
`;

export default App;

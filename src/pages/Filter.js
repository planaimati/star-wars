import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context";

const Filter = () => {
  const { handleSearch } = useContext(AppContext);

  return (
    <StyledContainer>
      <form>
        <input type="text" onChange={(e) => handleSearch(e)} placeholder="" />
      </form>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Filter;

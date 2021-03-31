import React, { useContext } from "react";
import { AppContext } from "../context";
import styled from "styled-components";


const Item = (props) => {
  const { handleSetPopup, popup } = useContext(AppContext);
  const { name, birth_year, gender, id } = props;

  return (
    <StyledItem>
      <StyledInfoContainer>
        <StyledInfoText>
          name: <StyledSpan>{name}</StyledSpan>
        </StyledInfoText>
        <StyledInfoText>
          gender: <StyledSpan>{gender}</StyledSpan>
        </StyledInfoText>
        <StyledInfoText>
          {" "}
          birth-year: <StyledSpan>{birth_year}</StyledSpan>
        </StyledInfoText>
      </StyledInfoContainer>
      <StyledMoreInfoContainer>
        <StyledButton id={id} onClick={(e) => handleSetPopup(e)}>
          more info
        </StyledButton>
      </StyledMoreInfoContainer>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  height: 10rem;
  width: 40rem;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.31);
  margin: 2rem;
  display: flex;
  position: relative;
`;

const StyledInfoContainer = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem;
`;

const StyledButton = styled.button`
  width: 9rem;
  height: 6rem;
  padding: 0.5rem;
  border: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  background-color: transparent;
  cursor: pointer;
`;

const StyledMoreInfoContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
`;

const StyledInfoText = styled.h4`
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const StyledSpan = styled.span`
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: 300;
`;

export default Item;

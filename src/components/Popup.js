import React, { useContext } from "react";
import { AppContext } from "../context";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";

const Popup = () => {
  const {
    popup,
    popupItem,
    documentHeight,
    films,
    handleSetPopup,
  } = useContext(AppContext);

  return (
    <StyledContainer display={popup} top={documentHeight}>
      <CloseButton onClick={handleSetPopup}></CloseButton>
      <TitleContainer>
        <StyledTitle>{popupItem.name}</StyledTitle>
        <Line></Line>
      </TitleContainer>
      <MoreInfoContainer>
        <StyledInfoText>
          height: <StyledSpan>{popupItem.height}</StyledSpan>
        </StyledInfoText>
        <StyledInfoText>
          age <StyledSpan>{popupItem.birth_year}</StyledSpan>
        </StyledInfoText>
      </MoreInfoContainer>
      <FilmsContainer>
        <StyledInfoText>Films:</StyledInfoText>
        {films.map((film, index) => (
          <Film key={index}>{film}</Film>
        ))}
      </FilmsContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 45rem;
  width: 50rem;
  background-color: #e6e6e6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  @media (max-width: 730px) {
    width: 90%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 0.1rem;
`;

const MoreInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 20%;
`;

const Line = styled.div`
  width: 80%;
  height: 1px;
  margin: 1.5rem;
  background-color: black;
`;

const FilmsContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Film = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  margin: 0.5rem;
  font-weight: 300;
`;

const CloseButton = styled(GrFormClose)`
  font-size: 3rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
`;

const StyledInfoText = styled.h4`
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin: 1rem;
`;

const StyledSpan = styled.span`
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: 300;
`;

export default Popup;

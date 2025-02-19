import React from "react";
import styled from "styled-components";
import { useLanguageContext } from "../context/LanguageContext";
import EnglishFlag from "../assets/internal-images/english.png";
import HebrewFlag from "../assets/internal-images/israel.png";

const SwitcherContainer = styled.div`
  border-radius: 50%;
  height: 60%;
  aspect-ratio: 1;
  padding: 0;
  background-image: ${({ isHebrew }) =>
    isHebrew ? `url(${HebrewFlag})` : `url(${EnglishFlag})`};
  background-size: cover;
  background-position: center;
  position: absolute;
  left: ${({ isHebrew }) => (isHebrew ? "5%" : "unset")};
  right: ${({ isHebrew }) => (isHebrew ? "unset" : "5%")};
  top: 50%;
  transform: translateY(-50%);
`;

const LanguageSwitcher = () => {
  const { isHebrew, setIsHebrew } = useLanguageContext();

  return (
    <SwitcherContainer
      isHebrew={isHebrew}
      onClick={() => setIsHebrew(!isHebrew)}
    ></SwitcherContainer>
  );
};

export default LanguageSwitcher;

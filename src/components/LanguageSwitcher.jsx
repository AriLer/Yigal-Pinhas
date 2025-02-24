import React from "react";
import styled from "styled-components";
import EnglishFlag from "../assets/internal-images/english.png";
import HebrewFlag from "../assets/internal-images/israel.png";
import { useTranslation } from "react-i18next";

const SwitcherContainer = styled.div`
  border-radius: 50%;
  height: 60%;
  aspect-ratio: 1;
  padding: 0;
  background-image: ${({ lng }) =>
    lng === "he" ? `url(${EnglishFlag})` : `url(${HebrewFlag})`};
  background-size: cover;
  background-position: center;
  position: absolute;
  left: ${({ lng }) => (lng === "he" ? "5%" : "unset")};
  right: ${({ lng }) => (lng === "he" ? "unset" : "5%")};
  top: 50%;
  transform: translateY(-50%);
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = () => {
    const switchTo = i18n.language === "he" ? "en" : "he";
    i18n.changeLanguage(switchTo);
  };

  return (
    <SwitcherContainer
      lng={i18n.language}
      onClick={handleChangeLanguage}
    ></SwitcherContainer>
  );
};

export default LanguageSwitcher;

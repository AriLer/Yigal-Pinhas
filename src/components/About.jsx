import React from "react";
import styled from "styled-components";
import YigalImg from "./../assets/client-images/yigal-new.jpg";
import GroceriesSVG from "./../assets/internal-images/Bag of groceries.svg";
import { useTranslation } from "react-i18next";

const AboutSection = styled.section`
  position: relative;
  padding: 5%;
  background-color: var(--light-cream);

  @media only screen and (min-width: 1440px) {
    padding: 5% 10%;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 0;
`;

const SectionSubtitle = styled.h4`
  color: var(--highlight);
  text-align: center;
  margin: 0.5rem;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  direction: ${({ lng }) => (lng === "he" ? "ltr" : "rtl")};
  gap: 1.5rem;
  align-items: center;
  padding: 3rem 0;
  
  
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem 0;
    width: 100%;
  }

  @media only screen and (max-width: 576px) {
    margin-top: 3rem;
  }
`;

const AboutTextContainer = styled.div`
  flex: 4;

  @media only screen and (max-width: 768px) {
    margin: auto;
    width: 100%;
  }

  p {
    width: 100%;
    direction: ${({ lng }) => (lng === "he" ? "rtl" : "ltr")};
    line-height: 1.5rem;
    list-style: none;
    text-align: ${({ lng }) => (lng === "he" ? "right" : "left")};

    @media only screen and (max-width: 768px) {
      line-height: 2;
      width: 90%;
      margin: auto;
    }
  }
`;

const AboutImageContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    object-fit: contain;

    @media only screen and (max-width: 768px) {
      width: 45vw;
    }
    @media only screen and (max-width: 576px) {
      width: 50vw;
    }
  }
`;

const Groceries = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10%;
`;

const About = ({ forwardedRef }) => {
  const { t, i18n } = useTranslation();

  return (
    <AboutSection id="about" ref={forwardedRef}>
      <SectionTitle>{t("AboutTitle")}</SectionTitle>
      <SectionSubtitle>{t("AboutSubtitle")}</SectionSubtitle>
      <MainContainer
        data-aos="fade-up"
        data-aos-duration="1500"
        lng={i18n.language}
      >
        <AboutTextContainer dangerouslySetInnerHTML={{ __html: t("AboutMain") }} lng={i18n.language}>
        </AboutTextContainer>
        <AboutImageContainer>
          <img src={YigalImg} alt="Yigal Pinchas - יגאל פנחס" />
        </AboutImageContainer>
      </MainContainer>
      <Groceries src={GroceriesSVG} alt="bag-of-groceries" />
    </AboutSection>
  );
};

export default About;

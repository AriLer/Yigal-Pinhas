import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bookNodes } from "../static/books";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const BooksSection = styled.section`
  padding: 2.5vh 5%;
  overflow: hidden;
  background-color: #65b3e155;

  @media only screen and (min-width: 1440px) {
    padding: 2.5vh 10%;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  min-height: 50vh;
  gap: 5rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const BookCarouselContainer = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media only screen and (min-width: 1440px) {
    /* padding-left: 2%; */
  }

  @media only screen and (max-width: 768px) {
    flex: 1;
  }
`;

const BookCarousel = styled.div`
  margin: 10% 0;
  display: flex;
  justify-content: ${(props) => (props.lng === "he" ? "flex-end" : "flex-start")};
  min-height: 20rem;

  @media only screen and (max-width: 768px) {
    height: 45vh;
  }
`;

const InnerContainer = styled.div`
  position: absolute;
  height: 45vh;
  width: 15vw;
  transition: transform 0.2s ease-in-out;
  &:hover {
    filter: brightness(0.9);
  }
  @media only screen and (max-width: 768px) {
    height: 40vh;
    width: 30%;
  }

  @media only screen and (max-width: 576px) {
    height: 35vh;
    width: 35%;
  }
`;

const BookCover = styled.img`
  min-height: 15rem;
  height: 44vh;
  width: 100%;
  transition: transform 0.25s ease-in-out;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  &:hover {
    transform: translateY(-10px);
  }
  @media only screen and (min-width: 1440px) {
    height: 40vh;
    width: 90%;
  }

  @media only screen and (max-width: 576px) {
    height: 32vh;
  }
`;

const Instructions = styled.p`
  font-size: 14px;
  opacity: 0.5;
  font-weight: 500;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 2%;
  margin: auto;
`;

const Indicator = styled.div`
  background-color: #80808078;
  position: absolute;
  width: 90%;
  height: 3px;
  bottom: 7%;
  left: 4%;
`;

const ActiveIndicator = styled.div`
  background-color: #00000073;
  height: 3px;
  position: absolute;
  left: 0;
`;

const BookDescContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;

  @media only screen and (min-width: 1440px) {
    flex: 2;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    margin: auto;
    text-align: center;
    align-items: center;
    flex: 1;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    padding: 17% 0;
  }
`;

const BookDescTitle = styled.h3`
  margin-bottom: 0;

  @media only screen and (max-width: 576px) {
    margin-bottom: 1.5rem;
  }
`;

const BookDesc = styled.p`
  color: #5b5b5b;
  width: 100%;
  line-height: 1.3rem;

  @media only screen and (min-width: 1440px) {
    line-height: 1.7;
  }

  @media only screen and (max-width: 768px) {
    margin: auto;
    margin-bottom: 5%;
    text-align: justify;
  }

  @media only screen and (max-width: 576px) {
    width: 90%;
  }
`;

const ActionButton = styled.button`
  border-radius: 10px;
  height: 3rem;
  width: 6rem;
  font-size: 1rem;
  background-color: #234e76;
  color: var(--cream);

  @media only screen and (max-width: 768px) {
    height: 4rem;
    width: 7rem;
  }
  @media only screen and (max-width: 576px) {
    height: 4rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    width: 9rem;
  }
`;

const Books = ({ heading, active, hideActive }) => {
  const { t, i18n } = useTranslation();
  const [relevantBooks, setRelevantBooks] = useState(
    bookNodes.filter((book) => book.language === i18n.language)
  );
  const nodes = relevantBooks.filter(
    (book, idx) => !hideActive || active != idx
  );
  const [currActive, setCurrActive] = useState(nodes.find((book) => book.language === i18n.language));


  useEffect(() => {    
    const newBooks = bookNodes.filter((book) => book.language === i18n.language);
    setCurrActive(newBooks.find((book) => book.language === i18n.language))
    setRelevantBooks(newBooks);
  }, [i18n.language]);

  

  const getDisplayType = (w) => {
    if (w > 1200) {
      return 0.85;
    } else if (w > 992) {
      return 0.92;
    } else if (w > 768) {
      return 1;
    } else if (w > 576) {
      return 0.85;
    } else {
      return 1.05;
    }
  };

  const winW = getDisplayType(window.innerWidth);
  const navigate = useNavigate();

  const handleReadMore = () => {
    const temp = relevantBooks.filter((book, idx) => idx != currActive.id);
    setCurrActive(temp[0]);
    navigate(`/ספרים/${currActive.id}`);
    window.scrollTo(0, 0);
  };
  
  useEffect(() => {
    AOS.refresh();
  }, [currActive]);

  return (
    <BooksSection>
      <h2>{t("Books")}</h2>
      <MainContainer>
        <BookCarouselContainer>
          <BookCarousel lng={i18n.language}>
            {nodes.map((book, idx) => {
              const offset = hideActive ? 20 : - 5;
              let DIST = Math.abs(nodes.indexOf(currActive) - idx);
              let OFF_SET =
                Math.log(10) * (nodes.indexOf(currActive) - idx) +
                (50 * idx) / winW +
                offset;
              let SIZE_TRANSFORM = 1 / (DIST * Math.log(9)) + 0.5;
              let Z_INDEX_OFF_SET = 10 - DIST;

              const style = {
                transform: `translateX(${OFF_SET}%) scale(${
                  nodes.indexOf(currActive) === idx ? "1.1" : SIZE_TRANSFORM
                })`,
                zIndex: Z_INDEX_OFF_SET,
              };

              return (
                <InnerContainer style={style} key={`book-cover-${book.id}`}>
                  <BookCover
                    onClick={() => setCurrActive(book)}
                    src={book.coverSrc}
                    alt={book.name}
                  />
                </InnerContainer>
              );
            })}
            <Instructions>{t("LibraryInstructions")}</Instructions>
            <Indicator>
              <ActiveIndicator
                style={{
                  transform: `translateX(${nodes.indexOf(currActive) * 100}%)`,
                  width: `${100 / nodes.length}%`,
                }}
              />
            </Indicator>
          </BookCarousel>
        </BookCarouselContainer>
        <BookDescContainer
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ direction: i18n.language === "he" ? "rtl" : "ltr" }}
        >
          <BookDescTitle style={{ direction: "rtl" }}>
            {currActive.name}
          </BookDescTitle>
          <BookDesc style={{ direction: currActive.direction }}>
            {currActive.shortDesc}
          </BookDesc>
          <ActionButton onClick={handleReadMore}>{t("ReadMore")}</ActionButton>
        </BookDescContainer>
      </MainContainer>
    </BooksSection>
  );
};

export default Books;

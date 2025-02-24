import React from "react";
import { bookNodes, bookContent } from "../static/books";
import styled from "styled-components";
import { Books } from "../components/index";
import BlobSVG from "../assets/internal-images/heroBlob.svg";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  background-color: var(--light-cream);
  position: relative;
  padding: 5%;
  padding-top: 10%;
  overflow: hidden;
  min-height: 100vh;

  @media only screen and (min-width: 1440px) {
    padding: 5% 10%;
  }
`;

const Title = styled.h2`
  z-index: 10;
  width: 70%;
  margin-bottom: 2rem;

  @media only screen and (max-width: 576px) {
    margin-top: 4rem;
    font-size: 3.5rem;
    width: 95%;
  }
`;

const Content = styled.div`
  z-index: 10;
  line-height: 1.5rem;
`;

const Purchase = styled.a`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2rem;
`;

const Email = styled.span`
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: 400;
`;

const Blob = styled.img`
  position: absolute;
  z-index: 1;
`;

const FullCover = styled.img`
  width: ${(props) => (props.size === 2 ? "60%" : "40%")};
  margin: auto;
  align-self: center;
  padding: ${(props) => (props.size === 2 ? "2% 20%" : "2% 30%")};
`;

const BookSummery = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const node = bookNodes[id];
  const content = bookContent[id];

  const scaler1 = window.innerWidth > 576 ? 10 : 2;
  const scaler2 = window.innerWidth > 576 ? 1 : 20;

  const blobStyle = {
    top: `${node.direction === "rtl" ? "-75vh" : "-82vh"}`,
    left: `${node.direction === "rtl" ? `-${120 / scaler1}%` : ""}`,
    right: `${node.direction === "rtl" ? "" : `-${1 * scaler2}%`}`,
    transform: `scaleX(${node.direction === "rtl" ? "1" : "-1"})`,
  };
  return (
    <>
      <Section style={{ direction: node.direction }}>
        <Blob style={blobStyle} src={BlobSVG} alt="blob" />
        <Title>{node.name}</Title>

        <Content>
          {content.subHeading && <h4>{content.subHeading}</h4>}
          {content.paragraphs.map((p) => (
            <div dangerouslySetInnerHTML={{ __html: p }}></div>
          ))}
          {content.points && (
            <ul>
              {content.points.map((p) => (
                <li>{p}</li>
              ))}
            </ul>
          )}

          {node.purchaseMethod === "url" ? (
            <div>
              <h3 style={{ lineHeight: "2.5rem" }}>
                {t("PurchaseBooks")} &nbsp; <br />
                <Purchase href={node.purchaseMessage} target="#blank">
                  {t("ClickHere")}
                </Purchase>
              </h3>
            </div>
          ) : node.purchaseMethod === "contact" ? (
            <div
              style={{ lineHeight: "2.5rem" }}
              dangerouslySetInnerHTML={{ __html: node.purchaseMessage }}
            ></div>
          ) : (
            <h4>{node.purchaseMessage}</h4>
          )}

          {console.log("full-cover: ", node.fullCover)}
          {node.fullCover && (
            <FullCover
              size={id === "3" ? 1 : 2}
              src={node.fullCover}
              alt="full cover"
            />
          )}
        </Content>
      </Section>
      <Books heading={t("MoreBooks")} active={id} hideActive={true} />
    </>
  );
};

export default BookSummery;

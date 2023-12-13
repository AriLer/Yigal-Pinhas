import React from 'react'
import styled from 'styled-components';
import AboutSVG from './../assets/internal-images/Team of employees at lunch.svg'
import YigalImg from './../assets/client-images/Yigal 2.JPG'
import GroceriesSVG from './../assets/internal-images/Bag of groceries.svg'

const AboutSection = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 1% 5%;
  background-color: var(--light-cream);

  @media only screen and (min-width: 1440px) {
      padding: 1% 10%;
  }
`

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 0;
`

const SectionSubtitle = styled.h4`
    color: var(--highlight);
    text-align: center;
    margin: .5rem;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  gap: 1.5rem;
  height: 70%;
  
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 576px) {
    margin-top: 3rem;
  }
`


const AboutTextContainer = styled.div`
  flex: 4;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    margin: auto;
    width: 100%;
  }
  `
const AboutText = styled.p`
  width: 85%;
  line-height: 2;
  list-style: none;
  
  @media only screen and (max-width: 768px) {
    line-height: 2;
  }
`
const AboutImageContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center; 
`


const AboutImage = styled.img`
  height: 75%;
  width: 60%;
  object-fit: contain;
  
  @media only screen and (max-width: 768px) {
    width: 40vw;
  }
`

const Groceries = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10%;
`


const About = ({forwardedRef}) => {
  return (
    <AboutSection id='about' ref={forwardedRef}>
      <SectionTitle>קצת עלי</SectionTitle>
      <SectionSubtitle>אין אהבה כמו אהבת השריר</SectionSubtitle>
      <MainContainer data-aos='fade-up' data-aos-duration='1500'>
        <AboutTextContainer>
          <AboutText>
              רבים מחברי ותלמידי ביקשוני לכתוב את סיפור חיי המאתגר והמפתיע...<br/>
              עד גיל 18 (גיל גיוס) גדלתי 14 שנה במסגרות של פנימיות שונות. <br/>
              אודה בקצרה, שאת השתיקה למדתי מהפטפטנים, את טוב הלב מרעי הלב, את הסבלנות מקצרי הרוח.
              ולמרבית הפליאה אינני אסיר תודה למוריי אלו. יחד עם זאת, נוכחתי לדעת, שהמחסור הוא אבי ההמצאה,
              שבכדי לדעת לקום צריך לא לפחד ליפול, שהסבלנות מרה, אך פירותיה מתוקים.<br/>
              בחרתי לכתוב ולהתמקד ב&quot;ארגז הכלים המכיל כלים לחיים&quot;. כלים אלה הם החוזקות ווהכוחות בגישה
              ההוליסטית - אותה פיתחתי במהלך שנות חיי.
              גישה, שהוכיחה קודם לי את יעילותה לקידום אורח חיים בריא ופעיל, ובהמשך תרמה רבות לסובבים אותי
          </AboutText>
        </AboutTextContainer>
        <AboutImageContainer>
          <AboutImage src={YigalImg} alt='people-eating-lunch'/>
        </AboutImageContainer>
      </MainContainer>
      <Groceries src={GroceriesSVG} alt='bag-of-groceries'/>
    </AboutSection>
  )
}

export default About;
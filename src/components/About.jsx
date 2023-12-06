import React from 'react'
import styled from 'styled-components';
import AboutSVG from './../assets/internal-images/Team of employees at lunch.svg'
import GroceriesSVG from './../assets/internal-images/Bag of groceries.svg'

const AboutSection = styled.section`
  height: 100vh;
  position: relative;
`

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 0;
`

const SectionSubtitle = styled.h4`
    color: var(--highlight);
    /* margin-top: 0; */
    text-align: center;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  margin: 0 9rem;
`


const AboutTextContainer = styled.p`
  flex: 1;
  margin: 1% 5%;
  width: 30px;
  `
const AboutText = styled.ul`
  width: 80%;
  line-height: 2;
  `

const AboutImage = styled.img`
  flex: 1;
  height: 300px;
  margin: 5%;
`

const Groceries = styled.img`
  position: absolute;
  bottom: 0;
  width: 10%;
`


const About = () => {
  return (
    <AboutSection>
      <SectionTitle>קצת עלי</SectionTitle>
      <SectionSubtitle>אין אהבה כמו אהבת השריר</SectionSubtitle>
      <MainContainer>
        <AboutTextContainer>
          <AboutText>
            <li>מורה לחינוך גופני בבתי ספר תיכוניים בתל־אביב</li>
            <li>מרצה בכיר במכללת סמינר הקיבוצים</li>
            <li>פרופסור אורח באוניברסיטת קלגרי בקנדה.</li>
            <li>מומחה בפיתוח תוכניות כושר גופני למורים ולמתלמדים</li>
            <li>מרצה במכללה למִנהל ואוניברסיטת ת”א על פעילות בחדרי כושר.</li>
            <li>בוחן הסמכת מדריכי חדר-כושר מטעם מִנהל הספורט. מפתח שיטת </li>
            <strong className='trademark'> הכושר ההוליסטי ®</strong>
            מנהל המרכז להשתלמויות בחינוך גופני בבית-הספר ללימודים מתקדמים במכללת סמינר הקיבוצים.
          </AboutText>
        </AboutTextContainer>
        <AboutImage src={AboutSVG} alt='people-eating-lunch'/>
      </MainContainer>
      <Groceries src={GroceriesSVG} alt='bag-of-groceries'/>
    </AboutSection>
  )
}

export default About;
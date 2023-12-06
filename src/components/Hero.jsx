import React from 'react'
import styled from 'styled-components'
import Blob from './../assets/internal-images/heroBlob.svg'
import YogaGIrl from './../assets/internal-images/woman standing in tree yoga pose.svg'
import GuyWorkingOut from './../assets/internal-images/Guy doing workout with truck tire.svg'


const HeroSection = styled.section`
  display: flex;
  height: 100vh;
  overflow: hidden;
`

const HeroTextContainer = styled.div`
  flex: 1;
  text-align: right;
  height: 80%;
  /* padding: 0 5%; */
  margin: 8% 5% 10% 2%;
`

const HeroText = styled.h1`
  margin-bottom: 0;
`

const HeroSubtitle = styled.h3`
  color: var(--highlight);
`

const HeroDesc = styled.p`
  color: gray;
`

const ActionButton = styled.button`
  height: 3rem;
  width: 7rem;
  font-size: 20px;
`

const HeroImageContainer = styled.div`
  flex: 1;
  position: relative;
`

const HeroBlob = styled.img`
  width: 90%;
  position: absolute;
  left: 0;
  top: 20%;
  /* width: 200px; */
  `
const HeroGuy = styled.img`
  position: absolute;
  height: 50%;
  left: 30%;
  top: 20%
`

const HeroGirl = styled.img`
  position: absolute;
  height: 55%;
  bottom: 1%;
  left: 5%;
`



const Hero = () => {
  return (
   <HeroSection id="main">
      <HeroTextContainer>
      
        <HeroText>{'ד"ר יגאל פנחס'}</HeroText>
        <HeroSubtitle>פעילות גופנית וקידום בריאות</HeroSubtitle>
        <HeroDesc>מרצה בכיר במכללת סמינר הקיבוצים, מורה לחינוך גופני בבתי ספר תיכוניים בתל־אביב. פרופסור אורח באוניברסיטת קלגרי שבקנדה. </HeroDesc>
        <ActionButton className='action-button'>קראו עוד</ActionButton>

      </HeroTextContainer>
      <HeroImageContainer>
        <HeroBlob src={Blob} alt='blob'/>
        <HeroGirl src={YogaGIrl} alt='girl-doing-yoga-image'/>
        <HeroGuy src={GuyWorkingOut} alt='guy-working-out-with-tire'/>
      </HeroImageContainer>
   </HeroSection>
  )
}

export default Hero;
import React from 'react'
import styled from 'styled-components'
import Blob from './../assets/internal-images/heroBlob.svg'
// import YogaGirl from './../assets/internal-images/woman standing in tree yoga pose.svg'
import YogaGirl from './../assets/internal-images/woman-stretching-light.webp'
// import GuyWorkingOut from './../assets/internal-images/Guy doing workout with truck tire.svg'
import GuyWorkingOut from './../assets/internal-images/man-dumbels.webp'
// import GuyWorkingOut from './../assets/internal-images/man-doing-pullups.jpg'
import DumbellSVG from './../assets/internal-images/weight.svg'
import Tilt from './Tilt'


const HeroSection = styled.section`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  overflow-y: hidden;
  
  @media only screen and (max-width: 768px) {
    display: block;
  }
  `

const HeroTextContainer = styled.div`
  flex: 4;
  text-align: right;
  margin: 5%;
  
  @media only screen and (min-width: 1440px) {
    margin: 7% 10%;
  }
  
  @media only screen and (max-width: 1024px) {
    margin: 4%;
  }

  @media only screen and (max-width: 768px) {
    padding: 5% 0;
    width: 85%;
    margin: auto;
    text-align: center;
    margin-top: 5%;
  }
  
  @media only screen and (max-width: 576px) {
    width: 90%;
    padding: 5% 0;
    margin: auto;
    margin-top: 5%;
  }
  `

const HeroText = styled.h1`
  margin-bottom: 0;
  font-size: 5rem;
  line-height: 5rem;
`

const HeroSubtitle = styled.h3`
  color: var(--highlight);
 
  @media only screen and (max-width: 1024px) {
    margin: 1.5rem 0rem;
    line-height: 2rem;
  }
`

const HeroDesc = styled.p`
  color: gray;
  margin-bottom: 2rem;
  width: 75%;
  

  @media only screen and (max-width: 768px) {
    width: 65%;
    margin: auto;
  }

  @media only screen and (max-width: 576px) {
    width: 85%;
  }
`

const ActionButton = styled.button`
  height: 3rem;
  width: 7rem;
  font-size: 20px;
  
  @media only screen and (min-width: 1440px) {
    height: 4rem;
    width: 8rem;
  }
  
  @media only screen and (max-width: 768px) {
    margin-top: 2.5rem;
    height: 4rem;
    width: 9rem;
  }

`

const TiltContainer = styled(Tilt)`
  flex: 3;
  margin: 5% 0;
  position: relative;
  left: -1%;
  
  @media only screen and (min-width: 1440px) {
    margin-top: 7%;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 2%;
  }
`

const HeroBlob = styled.img`
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0%;
  z-index: -1;
  position: relative;

  @media only screen and (max-width: 768px) {
   width: 40vw;
    display: none;
  }
  `

const HeroGuy = styled.img`
  border-radius: 15px;
  position: absolute;
  width: 65%;
  left: 5vw;
  bottom: 45%;
  /* z-index: 2; */
  
  @media only screen and (max-width: 768px) {
    z-index: -1;
    opacity: 0.6;
    bottom: 65vh;
    left: 50vw;
    display: none;
  }
  `

const HeroGirl = styled.img`
  border-radius: 15px;
  position: absolute;
  width: 60%;
  bottom: 15%;
  left: 20vw;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }  
  `
const Dumbell = styled.img`
  position: absolute;
  bottom: 0;
  height: 150px;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`


const Hero = ({targetRef}) => {

  const scrolllToAbout = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <HeroSection id="main">
      <HeroTextContainer>
        <HeroText 
          // data-aos='fade-up' data-aos-duration='2000' data-aos-delay="1000"
        >
          {'ד"ר יגאל פנחס'}
        </HeroText>
        <HeroSubtitle 
          // data-aos='fade-up' data-aos-duration='2000' data-aos-delay="1000"
        >
          פעילות גופנית וקידום בריאות
        </HeroSubtitle>
        <HeroDesc 
          // data-aos='fade-up' data-aos-duration='2000' data-aos-delay="1000"
        >
          מרצה בכיר במכללת סמינר הקיבוצים, מורה לחינוך גופני בבתי ספר תיכוניים בתל־אביב. פרופסור אורח באוניברסיטת קלגרי שבקנדה
        </HeroDesc>
        <ActionButton 
          // data-aos='fade-in' data-aos-duration='2000' data-aos-delay="2500"
          onClick={scrolllToAbout} 
          className='action-button'
        >
          קראו עוד
        </ActionButton>
      </HeroTextContainer>
      <TiltContainer>
        <div 
          // data-aos='fade-up' data-aos-duration='2000'
        >
            <HeroGuy src={GuyWorkingOut} alt='guy working out with tire'/>
            <HeroGirl src={YogaGirl} alt='girl doing yoga image'/>
            {/* <HeroBlob src={Blob} alt='blob'/> */}
        </div>
      </TiltContainer>
      <Dumbell src={DumbellSVG} alt='guy working out with tire'/>
   </HeroSection>
  )
}

export default Hero;
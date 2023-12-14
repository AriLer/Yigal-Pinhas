import React from 'react'
import styled from 'styled-components';
import BlobSVG from '../assets/internal-images/blob2.svg'
import GirlStudyingSVG from '../assets/internal-images/Young woman studying online.svg'
import BookStackSVG from '../assets/internal-images/books and cup.svg'
import {courses} from '../static/courses'
import Tilt from './Tilt';

const CoursesSeciton = styled.section`
  min-height: 100vh;
  padding: 0 5%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;

  @media only screen and (min-width: 1440px) {
    padding: 0 10%;
  }
`

const SectionTitle = styled.h2`
  text-align: end;

  @media only screen and (max-width: 576px) {
    text-align: start;
  }
`

const CourseGrid = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 3%;
  margin-bottom: 2rem;
  
  @media only screen and (max-width: 576px) {
    flex-direction: column;
    gap: 0%;
  }
`

const CourseCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CourseNode = styled.div`
  background-color: var(--light-cream);
  padding: 1vh 5%;
  padding-bottom: 2vh;
  border-radius: 15px;
  min-height: 15vh;
  margin-bottom: 1rem;

  @media only screen and (min-width: 1440px) {
    padding: 2vh 6%;
  }
  
  @media only screen and (max-width: 768px) {
    min-height: 25vh;
  }
  
  @media only screen and (max-width: 576px) {
    padding: 1vh 7%;
    min-height: 20vh;
  }
`

const CourseTitle = styled.h4` 
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem auto 0rem auto;
`

const LecturesList = styled.ul`
  list-style-type: none;
  padding-right: 1rem;
  font-size: .9rem;

  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`

const LectureItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.2rem;
  
  @media only screen and (min-width: 1440px) {
    margin-bottom: 0.7vh
  }

  @media only screen and (min-width: 1200px) {
    line-height: 25px;
  }
`

const Blob = styled.img`
  position: absolute;
  z-index: -10;
  right: 0;
  top: -5%;
  width: 50%;

  @media only screen and (max-width: 576px) {
    right: 50%;
    top: -4%;
    transform: scaleX(-1);
  }
`

const Girl = styled.img`
  position: absolute;
  z-index: -10;
  right: 25%;
  top: .5rem;
  height: 25%;
  
  @media only screen and (min-width: 1440px) {
    right: 25%;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
  `

const BookStack = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -10;
  height: 150px;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Courses = () => {
  return (
    <CoursesSeciton>
      <Blob src={BlobSVG} alt='Blob'/>
      <Girl src={GirlStudyingSVG} alt='girl doing yoga'/>
      <SectionTitle>קורסים</SectionTitle>
      <CourseGrid>
        {courses.map((col, idx) => 
          <CourseCol key={`col-${idx}`}>
            {col.map(item => {
              return (
              <Tilt key={`course-node-${item.location}`}>
              <CourseNode className='pretty-shadow'>
                <CourseTitle >{item.location}</CourseTitle>
                <LecturesList style={{height: item.courses.length === 3 && '75px'}}>
                  {item.courses.map(l => <LectureItem key={`lecture-item-${l}`}>{l}</LectureItem>)}
                </LecturesList>
              </CourseNode>
              </Tilt>
            )})}
          </CourseCol>
        )}
      </CourseGrid>
      <BookStack src={BookStackSVG} alt='book stack'/>
    </CoursesSeciton>
  )
}

export default Courses;
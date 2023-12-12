import React from 'react'
import styled from 'styled-components';
import BlobSVG from '../assets/internal-images/blob2.svg'
import GirlStudyingSVG from '../assets/internal-images/Young woman studying online.svg'
import BookStackSVG from '../assets/internal-images/books and cup.svg'
import {courses} from '../static/courses'
import Tilt from './Tilt';

const CoursesSeciton = styled.section`
  height: 115vh;
  padding: 0 5%;
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: 1440px) {
    padding: 0 10%;
  }
  
  @media only screen and (max-width: 768px) {
    height: 130vh;
  }
  
  @media only screen and (max-width: 576px) {
    height: 205vh;
  }
`

const SectionTitle = styled.h2`
  text-align: end;
  
  @media only screen and (max-width: 576px) {
    text-align: start;
  }
`

const CourseGrid = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: row-reverse;
  gap: 3%;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
  `

const CourseCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 576px) {
    gap: 1.4rem;
  }
`

const CourseNode = styled.div`
  background-color: var(--light-cream);
  padding: 1vh 5%;
  padding-bottom: 2vh;
  border-radius: 15px;
  min-height: 15vh;

  
  
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
 
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`

const LecturesList = styled.ul`
  list-style-type: none;
  padding-right: 1rem;
  font-size: .8rem;

  
  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }
  `

const LectureItem = styled.li`
  margin-bottom: 0;
  line-height: 1rem;
  
  @media only screen and (min-width: 1440px) {
    margin-bottom: 1rem;
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
  height: 200px;
  
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
      <Girl src={GirlStudyingSVG} alt='Blob'/>
      <SectionTitle>קורסים</SectionTitle>
      <CourseGrid>
        {courses.map(col => 
          <CourseCol key={`col-${col}`}>
            {col.map(item => {
              return (
              <Tilt>
              <CourseNode key={`course-node-${item.location}`} className='pretty-shadow'>
                <CourseTitle>{item.location}</CourseTitle>
                <LecturesList style={{height: item.courses.length === 3 && '75px'}}>
                  {item.courses.map(l => <LectureItem>{l}</LectureItem>)}
                </LecturesList>
              </CourseNode>
              </Tilt>
            )})}
          </CourseCol>
        )}
      </CourseGrid>
      <BookStack src={BookStackSVG} alt='book-stack'/>
    </CoursesSeciton>
  )
}

export default Courses;
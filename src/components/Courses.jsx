import React from 'react'
import styled from 'styled-components';

const CoursesSeciton = styled.section`
  height: 100vh;
`

const SectionTitle = styled.h1`
`

const Courses = () => {
  return (
    <CoursesSeciton>
      <SectionTitle>קורסים</SectionTitle>
    </CoursesSeciton>
  )
}

export default Courses;
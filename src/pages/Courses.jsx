import React from 'react'
import CoursesComponent from '../components/Courses'
import { Navbar, Footer } from '../components'
import styled from 'styled-components'

const Page = styled.section`
    margin-top: 10vh;
    
    @media only screen and (max-width: 768px) {
      margin-top: 0vh;
    }
`

const Courses = () => {
  return (
    <Page>
        <Navbar/>
        <CoursesComponent/>
        <Footer/>
    </Page>
  )
}

export default Courses;
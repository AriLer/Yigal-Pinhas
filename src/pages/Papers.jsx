import React from 'react'
import PapersComponent from '../components/Papers'
import { Footer, Navbar } from '../components'
import styled from'styled-components'

const Page = styled.div`
  margin-top: 10vh;
`
const Papers = () => {
  return (
    <Page>
      <Navbar/>
      <PapersComponent/>
      <Footer/>
    </Page>
  )
}

export default Papers
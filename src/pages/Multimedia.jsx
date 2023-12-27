import React from 'react'
import { Navbar, Footer, DVD} from '../components'
import styled from 'styled-components'

const Page = styled.section`
    margin-top: 10vh;
`

const Multimedia = () => {
  return (
    <Page>
        <Navbar/>
        <DVD/>
        <Footer/>
    </Page>
  )
}

export default Multimedia
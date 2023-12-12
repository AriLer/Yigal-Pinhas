import React from 'react'
import styled from 'styled-components';

const FooterSection = styled.section`
  height: 20vh;
  background-color: var(--dark-brown);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media only screen and (min-width: 1440px) {
    height: 15vh;
  }
`

const CopyrightContainer = styled.div`
  align-items: center;
  text-align: center;
  color: var(--cream);
  font-size: 0.7rem;
`
const Copyright = styled.p`
`

const Ari = styled.a`
  color: var(--light-cream);
  text-decoration: underline;
`

const Email = styled.p`
  font-size: 1.15rem;
`


const Footer = () => {

  return (
    <FooterSection>
      <CopyrightContainer>
        <Email>yigalpinchas@gmail.com <br/></Email>
        <Copyright>
        
        ד"ר פנחס יגאל Copyright © 2023 · All Rights Reserved<br/> 
        Built with ❤️ by &nbsp;
        <Ari href='https://arilerner.netlify.app/' target="#blank">Ari Lerner</Ari>
        . &nbsp;App icons by <Ari href='https://icons8.com/' target='icons'>icons8</Ari> 
        </Copyright>
      </CopyrightContainer>
    </FooterSection>
  )
}

export default Footer;
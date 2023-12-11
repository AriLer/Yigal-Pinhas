import React from 'react'
import styled from 'styled-components';

const FooterSection = styled.section`
  height: 20vh;
  background-color: var(--dark-brown);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 1.1rem;
`


const Footer = () => {

  return (
    <FooterSection>
      <CopyrightContainer>
        <Email>yigalpinchas@gmail.com <br/></Email>
        <Copyright>
        ד"ר פנחס יגאל Copyright © 2023 · All Rights Reserved<br/> 
        האתר נבנה ע”י ארי לרנר. לפניות נא 
        <Ari href='https://arilerner.netlify.app/' target="#blank"> ללחוץ כאן</Ari>
        </Copyright>
      </CopyrightContainer>
    </FooterSection>
  )
}

export default Footer;
import React from 'react'
import styled from 'styled-components';

const FooterSection = styled.section`
  height: 40vh;
  background-color: var(--dark-brown);
  `
const MainContainer= styled.div`
  height: 100%;
  width: 90%;
  margin: auto;
  position: relative;
  `

const SectionTitle = styled.h3`
  color: var(--light-cream);
  font-weight: 500;
  margin: 0;
  margin-bottom: 1rem;
`

const Form = styled.form`
  height: 70%;
  display: flex;
  flex-direction: column;
  width: 35%;
  `

const TextArea = styled.textarea`
  resize: none;
  height: 70%;
`
const SubmitButtom = styled.button`
  margin: 0.5rem 0;
  width: 30%;
  height: 20%;
`
const CopyrightContainer = styled.div`
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  color: var(--cream);
  font-size: 12px;
`
const Copyright = styled.p`

`

const Footer = () => {

  const sendEmail = () => {

  }

  return (
    <FooterSection>
      <MainContainer>
        
      <SectionTitle>צרו קשר</SectionTitle>

      <Form onSubmit={sendEmail}>
        <TextArea type="text" placeholder='מוזמנים לפנות עם שאלות...'/>
        <SubmitButtom className='action-button' type="submit">
          {'שליחה >'}
        </SubmitButtom>
      </Form>
      <CopyrightContainer>
        <Copyright>
        ד"ר פנחס יגאל Copyright © 2023 · All Rights Reserved<br/> 
האתר נבנה ע”י ארי לרנר. לפניות נא ללחוץ כאן
        </Copyright>
      </CopyrightContainer>
      </MainContainer>
    </FooterSection>
  )
}

export default Footer;
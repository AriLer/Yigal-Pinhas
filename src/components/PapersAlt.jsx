import React from 'react'
import styled from 'styled-components'
import { papers } from '../static/papers'
import BlobSVG from '../assets/internal-images/heroBlob.svg'

const PapersSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-color: var(--cream);
  padding: 0 5%;
  overflow: hidden;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 576px) {
    height: 85%;
  }
`

const ListItem = styled.button`
  flex: 0 0 calc(25% - 1rem);
  border-radius: 10px;
  background-color: var(--light-cream);
  min-height: 6rem;
  z-index: 2;  
  box-shadow:
  0 1px 1px hsl(0deg 0% 0% / 0.015),
  0 2px 2px hsl(0deg 0% 0% / 0.015),
  0 4px 4px hsl(0deg 0% 0% / 0.015),
  0 8px 8px hsl(0deg 0% 0% / 0.015),
  0 16px 16px hsl(0deg 0% 0% / 0.015)
  ;
  padding: 1.5rem;
  
  @media only screen and (max-width: 768px) {
    flex: 0 0 calc(33% - 1rem);
  }

  @media only screen and (max-width: 576px) {
    flex: 0 0 calc(50% - 1rem);
  }
  `

const PDFLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  text-decoration: none;

  @media only screen and (min-width: 1440px) {
    font-size: 1.2rem;
  }
`

const Blob = styled.img`
  position: absolute;
  height: 80vh;
  bottom: -50vh;
  left: -15%;
  transform: rotate(0deg);
  
  @media only screen and (max-width: 576px) {
    bottom: -50%;
  }
`
const Papers = () => {
  return (
    <PapersSection>
      <h2>מאמרים</h2>
      <ListContainer>
        {papers.map((item, index) => (
          <ListItem 
          key={index}
          className='paper-list-item' 
          >
            <PDFLink href={item.url}
              target={`#blacnk-${item.name}`}
            >
              {item.name}
            </PDFLink>
          </ListItem>
        ))}
        <Blob src={BlobSVG} alt="blob"/>
      </ListContainer>
    </PapersSection>
  )
}

export default Papers
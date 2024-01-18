import React from 'react'
import styled from 'styled-components'
import { papers } from '../static/papers'

import BlobSVG from '../assets/internal-images/heroBlob.svg'
import { useNavigate } from 'react-router-dom'

/*
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
const ListItem = styled.li`
  z-index: 2;  
  padding: 0.5rem;
  
  @media only screen and (max-width: 768px) {
    flex: 0 0 calc(33% - 1rem);
  }

  @media only screen and (max-width: 576px) {
    flex: 0 0 calc(50% - 1rem);
  }
  `
const VidoeLink = styled.a`
  font-size: 1rem;
  margin-right: 1rem;
  color: var(--highlight);
  
  @media only screen and (min-width: 1440px) {
    font-size: 1.2rem;
  }
`
const PDFLink = styled.a`
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
*/

const PapersSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-color: var(--cream);
  padding: 0 5%;
  overflow: hidden;
  
  @media only screen and (min-width: 1440px) {
    padding: 0 10%;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 10px;
  background-color: var(--light-cream);
  min-height: 6rem;
  font-size: 1.1rem;
  color: black;
  background: #fffaf5;
  background: linear-gradient(45deg, #f9f4ee 0%, #fffcf9 100%);  
  z-index: 2;
  box-shadow:
  0 1px 1px hsl(0deg 0% 0% / 0.03),
  0 2px 2px hsl(0deg 0% 0% / 0.03),
  0 4px 4px hsl(0deg 0% 0% / 0.03),
  0 8px 8px hsl(0deg 0% 0% / 0.03),
  0 16px 16px hsl(0deg 0% 0% / 0.03)
  ;
  padding: 1.5rem;
  
  border: 1px solid #51312616;
  @media only screen and (max-width: 768px) {
    flex: 0 0 calc(33% - 1rem);
  }

  @media only screen and (max-width: 576px) {
    flex: 0 0 calc(50% - 1rem);
  }

  @media only screen and (min-width: 1440px) {
    font-size: 1.25rem;
  }
`

const Blob = styled.img`
  position: absolute;
  height: 80vh;
  bottom: -50vh;
  left: -15%;
  transform: rotate(0deg);
  
  @media only screen and (max-width: 576px) {
    left: -15%;
    bottom: -20%;
  }
`
const Papers = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/מאמרים/${id}`);
  }

  return (
    <PapersSection>
    <h2>מאמרים</h2>
    <ListContainer>
      {papers.map((item, index) => (
        <ListItem 
        key={index}
        className='paper-list-item' 
        value={index}
        style={item.altStyle && item.altStyle}

        onClick={()=>handleClick(index)}
        >
            {item.name}
            {item.img && <img height='35' width='35' src={item.img} alt={item.name} />}
        </ListItem>
      ))}
      <Blob src={BlobSVG} alt="blob"/>
    </ListContainer>
  </PapersSection>
  )
}

export default Papers
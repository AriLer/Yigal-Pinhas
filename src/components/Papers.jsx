import React from 'react'
import styled from 'styled-components'
import { papers } from '../static/papers'
import BlobSVG from '../assets/internal-images/heroBlob.svg'

const PapersSection = styled.section`
  position: relative;
  height: 100vh;
  background-color: var(--cream);
  padding: 0 5%;
  overflow: hidden;
  
  @media only screen and (max-width: 768px) {
    height: 110vh;
  }

  @media only screen and (max-width: 576px) {
    height: 180vh;
  }
`

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ListItem = styled.a`
  margin-bottom: 1.5rem;
  padding:  10px 20px;
  font-size: 1rem;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: var(--light-cream);
  width: 32%;
  height: 75px;
  z-index: 2;
  
  box-shadow:
  0 1px 1px hsl(0deg 0% 0% / 0.015),
    0 2px 2px hsl(0deg 0% 0% / 0.015),
    0 4px 4px hsl(0deg 0% 0% / 0.015),
    0 8px 8px hsl(0deg 0% 0% / 0.015),
    0 16px 16px hsl(0deg 0% 0% / 0.015)
    ;
    
  @media only screen and (max-width: 992px) {
    height: 85px;
    margin-bottom: 0.8rem;
    padding: 0px 10px;
  }
  @media only screen and (max-width: 576px) {
    width: 47%;
    height: 120px;
    font-size: .98rem;
  }
`

const Blob = styled.img`
  position: absolute;
  bottom: -70%;
  left: -15%;
  z-index: -0;
  transform: rotate(0deg);
  
  @media only screen and (max-width: 576px) {
    bottom: -50%;
  }
`
const Papers = () => {

  const handleDownload = (url, name) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name}.pdf`; // Specify the downloaded file name
    link.click();
  };

  return (
    <PapersSection>
      <h2>מאמרים</h2>
      <ListContainer>
      {papers.map((item, index) => (
        <ListItem 
          // onClick={()=> {handleDownload(item.url, item.name)}}
          href={item.url}
          target={`#blacnk-${item.name}`}
          key={index}
          className='paper-list-item' 
        >
          {item.name}
        </ListItem>
      ))}
    </ListContainer>
    <Blob src={BlobSVG} alt="blob"/>
    </PapersSection>
  )
}

export default Papers
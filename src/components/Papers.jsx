import React from 'react'
import styled from 'styled-components'

const PapersSection = styled.section`
  height: 100vh;
  background-color: var(--lightcream)
`
const SectionTitle = styled.h1`
  
`

const Papers = () => {
  return (
    <PapersSection>
      <SectionTitle>מאמרים</SectionTitle>
    </PapersSection>
  )
}

export default Papers
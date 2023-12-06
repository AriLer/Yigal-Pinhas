import React, { useState } from 'react'
import styled from 'styled-components';
import {bookNodes} from '../static/client-data/books'

const BooksSection = styled.section`
  height: 100vh;
`
const SectionTitle = styled.h1`

`

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  width: 90%;
  margin: auto;
  height: 60%;
`


const BookCarousel = styled.div`
`


const BookDescContainer = styled.div`
  width: 40%;
`

const BookDescTitle = styled.h3`
  
`

const BookDesc = styled.p`
  color: gray;
  width: 85%;
`

const ActionButton = styled.button`
  border-radius: 10px;
  height: 3rem;
  width: 6rem;
  font-size: 1rem;
  background-color: #234E76;
  color: var(--cream);
`

const BookCover = styled.img`
  height: 300px;
  margin: 20px;
  position: absolute;
`


const Books = () => {
  const [currentActive, setCurrentActive] = useState(bookNodes[4])

  const scaling = {

  }
  console.log("ssss", currentActive.color);
  return (
    <BooksSection style={{backgroundColor: currentActive.color}}>
      <SectionTitle>ספרים</SectionTitle>
      <MainContainer>
        <BookCarousel>
          {console.log(bookNodes)}
          {bookNodes.map((book, idx) => {
              const style = {
                /* transform: `scale(${(1*idx/20) + 1})`, */
                // transform: (idx === currentActive.id ? 'scale(1.2)' : 'scale(1)'),
                right: `${120*idx}px`,
              }

              return (<BookCover 
                onClick={()=>setCurrentActive(book)}
                className={`book-cover ${(idx === currentActive.id ? 'active-book': '')}`}
                style={style} 
                key={`book-cover-${book.name}`} 
                src={book.coverSrc} 
                alt={book.name}
              />)
          })}
        </BookCarousel>
        <BookDescContainer>
          <BookDescTitle>{currentActive.name}</BookDescTitle>
          <BookDesc>{currentActive.shortDesc}</BookDesc>
          <ActionButton>למידע נוסף</ActionButton>
        </BookDescContainer>
      </MainContainer>
    </BooksSection>
  )
}

export default Books;
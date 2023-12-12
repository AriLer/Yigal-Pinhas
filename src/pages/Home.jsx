import React, {useRef} from 'react'
import {Hero, About, Books, Papers, Courses, Footer, DVD} from '../components/index'

const Home = () => {

  const sectionBRef = useRef(null);

  return (
    <div className="App">
      <Hero targetRef={sectionBRef}/>
      <About forwardedRef={sectionBRef}/>
      <Books heading='ספרים' active={0} hideActive={false}/>
      <Courses />
      <DVD />
      <Papers />
      <Footer />
    </div>
  )
}

export default Home
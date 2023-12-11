import React, {useRef} from 'react'
import {Navbar, Hero, About, Books, Papers, Courses, Footer, DVD} from './index'

const Home = () => {

  const sectionBRef = useRef(null);

  return (
    <div className="App">
      {/* <Navbar /> */}
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
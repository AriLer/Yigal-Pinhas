import React, {useRef} from 'react'
import {Hero, About, Books, Papers, Courses, Footer, DVD, Navbar} from '../components/index'

const Home = () => {

  const sectionBRef = useRef(null);

  return (
    <div className="App">
      <Navbar/>
      <Hero targetRef={sectionBRef}/>
      <About forwardedRef={sectionBRef}/>
      <Books heading='ספרים' active={0} hideActive={false}/>
      <DVD />
      <Footer />
    </div>
  )
}

export default Home
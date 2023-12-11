import React, {useEffect} from 'react';
import './styles/globalStyles.css';
import {Home, BookSummery} from './components'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'




const App = () => {

  useEffect(()=> {
    AOS.init();
  }, [])

  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookSummery />} />
        </Routes>
      </Router>
    );
}

export default App;

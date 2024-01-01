import React, {useEffect} from 'react';
import './styles/globalStyles.css';
import {Home, BookSummery, Paper, Papers, Courses, Multimedia} from './pages'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollToTop from './components/ScrollToTop';




const App = () => {

  useEffect(()=> {
    AOS.init();
  }, [])

  return (
      <Router>
        <ScrollToTop/>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books/:id" element={<BookSummery />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Multimedia" element={<Multimedia />} />
            <Route path="/papers/:id" element={<Paper />} />
        </Routes>
      </Router>
    );
}

export default App;

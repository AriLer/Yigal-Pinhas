import React, {useEffect} from 'react';
import './styles/globalStyles.css';
import {Home, BookSummery, Paper} from './pages'
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
            <Route path="/" exact element={<Home />} />
            <Route path="/books" element={<BookSummery />} />
            <Route path="/papers/:id" element={<Paper />} />
        </Routes>
      </Router>
    );
}

export default App;

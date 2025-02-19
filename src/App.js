import React, { useContext, useEffect } from "react";
import "./styles/globalStyles.css";
import { Home, BookSummery, Paper, Papers, Courses, Multimedia } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";
import { useLanguageContext } from "./context/LanguageContext";

const paperRoutes = [
  "קשיים-ואתגרים-בחינוך-הגופני",
  "תקציר-לסרטון-האבולוציה-של-החנג-דר-יגא",
  "גמישות-מתאוריה-למעשה",
  "ההבדלים-בין-נשים-לגברים-מבחינה-אנטומי",
  "השפעת-הפעילות-הגופנית-המתונה-או-העצימ",
  "השפעת-שילוב-מולטימדיה-בתוכנית-הוראה-ב",
  "טיפוח-תרבות-עשייה-בקרב-פרחי-הוראה-לחינ",
  "יתרונות-ומגבלות-חדר-כושר",
  "מתיחות-stretching",
  "מתווה-לשחקן-קט-רגל",
  "צעדים-מקדימים-בתוכנית-לניהול-עצמי-בגי",
  "שינה-מי-צריך-את-זה-בכלל",
];

const bookRoutes = ["המדריך-השלם-לפעילות-בחדר-הכושר"];

const App = () => {
  const {language, setLanguage} = useLanguageContext();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ספרים/:id" element={<BookSummery />} />
        <Route path="/מאמרים" element={<Papers />} />
        <Route path="/קורסים" element={<Courses />} />
        <Route path="/dvd" element={<Multimedia />} />
        <Route path="/מאמרים/:id" element={<Paper />} />

        <Route path={`/מאמרים_`} element={<Navigate to="/מאמרים" />} />
        <Route
          path={`/מאמרים/${paperRoutes[0]}`}
          element={<Navigate to="/מאמרים/0" />}
        />
        <Route
          path={`/מאמרים/${paperRoutes[1]}`}
          element={<Navigate to="/מאמרים/1" />}
        />
        <Route
          path={`/מאמרים/${paperRoutes[2]}`}
          element={<Navigate to="/מאמרים/2" />}
        />
        <Route
          path={`/מאמרים/${paperRoutes[3]}`}
          element={<Navigate to="/מאמרים/3" />}
        />
        <Route
          path={`/מאמרים/${paperRoutes[4]}`}
          element={<Navigate to="/מאמרים/4" />}
        />
        <Route
          path={`/מאמרים/${paperRoutes[5]}`}
          element={<Navigate to="/מאמרים/5" />}
        />
        {/* <Route path={`/מאמרים/${paperRoutes[6]}`} element={<Navigate to="/מאמרים/6" />}/>
            <Route path={`/מאמרים/${paperRoutes[7]}`} element={<Navigate to="/מאמרים/7" />}/> */}
        <Route
          path={`/מאמרים/${paperRoutes[6]}`}
          element={<Navigate to="/מאמרים/8" />}
        />
        <Route
          path={`/מאמרים/${paperRoutes[7]}`}
          element={<Navigate to="/מאמרים/9" />}
        />
        <Route
          path={`/מאמרים/${paperRoutes[8]}`}
          element={<Navigate to="/מאמרים/10" />}
        />
        <Route
          path={`/מאמרים/${paperRoutes[9]}`}
          element={<Navigate to="/מאמרים/11" />}
        />
        <Route
          path={`/מאמרים/${paperRoutes[10]}`}
          element={<Navigate to="/מאמרים/12" />}
        />
        <Route
          path={`/מאמרים/${paperRoutes[11]}`}
          element={<Navigate to="/מאמרים/13" />}
        />
        <Route
          path={`/${bookRoutes[0]}`}
          element={<Navigate to="/ספרים/1" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

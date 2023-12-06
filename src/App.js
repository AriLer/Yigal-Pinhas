import './styles/globalStyles.css';
import {Navbar, Hero, About, Books, Papers, Courses, Footer} from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Books />
      <Courses />
      <Papers />
      <Footer />
    </div>
  );
}

export default App;

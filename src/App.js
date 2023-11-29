import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contactme from './components/contactme/Contactme';

function App() {
  return (
    <div className="App">
      <div className="navbar">
      <Navbar />
      </div>

      <div className="banner">
        <Banner />
      </div>

      <div className="skills">
        <Skills />
      </div>

      <div className="projects">
        <Projects/>
      </div>
    
    <div className="contactme">
      <Contactme/>
    </div>
    </div>
  );
}

export default App;

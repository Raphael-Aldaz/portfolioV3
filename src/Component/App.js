import About from './About/About';
import './App.scss';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Home from './Home/Home';
import Skills from './Skills/Skills';


function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <About />
    <Skills />
    <Contact />
    </div>
  );
}

export default App;

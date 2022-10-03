import About from './About/About';
import './App.scss';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Home from './Home/Home';
import Links from './Links/Links';
import Skills from './Skills/Skills';


function App() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left:0,
      behavior: 'smooth'
    })
  }
  return (
    <div className="App">
    <Header />
    <Home />
    <About />
    <Skills />
    <Contact />
    <span onClick={handleScroll} className='btn__scroll'> &gt; </span>
    <Links />
    </div>
  );
}

export default App;

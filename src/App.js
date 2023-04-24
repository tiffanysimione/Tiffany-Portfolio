import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className='flex flex-col items-center overflow-x-hidden background-color text-color'>
      <NavBar/>
      <Welcome  />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      </div>

  );
}

export default App;
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className='flex flex-col items-center overflow-x-hidden background-color text-color'>
      <NavBar/>
      <Home />
      <About />
      <Skills />

      </div>

  );
}

export default App;
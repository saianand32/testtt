import './App.css';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Testbuttons from './Components/TestButtons/Testbuttons';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {
  return (
    <>
        <Navbar/>
        <Landing/>
        <About/>
        <Testbuttons/>
        <Contact/>
    </>
  );
}

export default App;

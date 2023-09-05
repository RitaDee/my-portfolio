// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import Os from './components/oss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Os />
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
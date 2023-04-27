// import logo from './logo.svg';
import './App.css';
import Banner from '.././src/components/Banner';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;

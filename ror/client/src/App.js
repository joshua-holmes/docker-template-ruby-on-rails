
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<About />}/>
      </Routes>
      
    </>
  );
}

export default App;

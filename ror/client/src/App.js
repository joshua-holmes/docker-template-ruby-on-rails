
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    fetch("/api/me")
    .then(r => {
      if (r.ok) {
        return r.json().then(userData => {
          setUser(() => userData);
        })
      } else {
        return r.json().then(info => {
          console.log("Not logged in ==>", info.errors)
        })
      }
    })
    .catch(error => console.error("MAYDAAAAAAAYYY ==>", error))
  }, [])

  return (
    <>
      <NavBar isLoggedIn={!!user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home userState={[user, setUser]} />}/>
        <Route path="/about-me" element={<About />}/>
      </Routes>
      
    </>
  );
}

export default App;

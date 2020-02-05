import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Design from './Components/Design/Design';
import Team from './Components/Team/Team';
import Studio from './Components/Studio/Studio';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Design />
      <Team />
      <Studio />
    </div>
  );
}

export default App;

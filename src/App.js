import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Social from './Component/Social';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Experience from './Component/Experience';
import Contact from './Component/Contact';

function App() {


 

  return (
    <div className="relative">
      {/* Vertical Seekbar */}
   

      {/* Content */}
      <Navbar />
      <div className="ml-0 flex flex-col pt-5">
       
        <Home />
        <Social />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;

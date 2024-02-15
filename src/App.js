import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Social from './Component/Social';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Experience from './Component/Experience';
import Contact from './Component/Contact';
import { IoMdAirplane } from "react-icons/io";
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (position / maxScroll) * 100;
      setScrollPosition(100-percentage);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Vertical Seekbar */}
   < div className="hidden md:flex"> <div className="fixed top-[150px] right-10 h-1/2 w-2 rounded-lg bg-gray-900 opacity-50">
        <div
          className="absolute bottom-0 flex flex-col rounded-xl items-center w-full bg-amber-500 overflow-visible"
          style={{ height: `${scrollPosition}%` }}
        >
          <IoMdAirplane className='bg-transparent ' style={{color:"white",opacity:"100",position:"absolute",top:"-10%"}} size={`${3*scrollPosition/4}`}></IoMdAirplane>

        </div>
      </div>
      <div className="fixed top-[150px] right-20 h-1/2 w-2 rounded-lg rotate-180 bg-gray-900 opacity-50">
        <div
          className="absolute bottom-0 flex flex-col rounded-xl items-center w-full bg-amber-500 overflow-visible"
          style={{ height: `${scrollPosition}%` }}
        >
          <IoMdAirplane className='bg-transparent' style={{color:"white",position:"absolute",top:"-10%"}} size={`${3*scrollPosition/4}`}></IoMdAirplane>

        </div>
      </div>
      </div>  

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

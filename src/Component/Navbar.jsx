import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-scroll';
import { IoMdAirplane } from 'react-icons/io';


const Navbar = () => {
  const kk = [
    { id: 1, link: 'home' },
    { id: 2, link: 'About' },
    { id: 3, link: 'Experience' },
    { id: 4, link: 'portfolio' }
  ];

  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll = window.innerHeight-document.documentElement.scrollHeight ;
      const percentage = (position/maxScroll) * 100;
      setScrollPosition(100 - percentage);
      //console.log(scrollPosition)
    };

    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex flex-row justify-between items-center w-full h-12 text-white fixed px-2 bg-black'>

      <div className='flex flex-row items-center justify-start'>
      
        <h1 className='text-4xl ml-3 text-amber-400'>Yash</h1>
      </div>

      <div className='hidden lg:flex lg:flex-col items-center'>
        <div className='fixed h-2 w-1/3 rounded-lg bg-gray-900 opacity-50'>
          <div
            className='absolute bottom-0 flex flex-row rounded-xl items-center h-full w-full bg-amber-500 overflow-visible'
            style={{ width: `${scrollPosition-100}%` }}
          >
            <IoMdAirplane className='bg-transparent rotate-90' style={{ color: 'white', opacity: '100', position: 'absolute', right: '-7%' }} size={35} />
          </div>
        </div> 
      </div> 

      <ul className='hidden md:flex'>
        {kk.map((e, index) => (
          <li key={index} className='px-4 m-3 cursor-pointer capitalize hover:text-white hover:scale-105 duration-175 text-gray-400'>
            <Link to={e.link} smooth duration={500} className='text-amber-400 no-underline'>{e.link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => { setNav(!nav) }} className='md:hidden lg:hidden flex flex-col pr-3 text-gray-400 cursor-pointer justify-center'>
        {nav ? <ImCross /> : <FaBars />}
      </div>

      {nav &&
        <ul className='flex flex-col absolute top-0 right-0 bg-slate-300 w-full h-screen justify-center items-center bg-gradient-to-b from-black to-gray-500 text-gray-500'>
          <li onClick={() => { setNav(!nav) }} className='px-4 capitalize py-6 font-bold cursor-pointer'><ImCross /></li>
          {kk.map((e, index) => (
            <li key={index} className='px-4 capitalize py-6 font-bold cursor-pointer text-amber-400'><Link to={e.link} smooth duration={500} ><h2 className='text-amber-400' onClick={() => { setNav(!nav) }} >{e.link}</h2></Link></li>
          ))}
        </ul>
      }

    </div>
  );
}

export default Navbar;

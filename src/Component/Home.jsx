import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import o from "../Assets/Photo.png"
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className='flex w-full h-screen px-0 justify-center items-center bg-gradient-to-b flex-col from-black to-gray-700'>
<div className="flex md:px-36 flex-col md:flex-row justify-center items-center w-full h-full">

    <div className='text-white flex flex-col '>
        <h1 className='text-4xl lg:text-7xl text-blue-300 '>I am a Computer Science Engineer</h1>
        <p className="text-gray-300 text-1xl max-w-md">
        Hello I'm Yash Verma, a relentless dreamer fueled by a B.Tech in Computer Science  I speak the languages of the future: Java, HTML, CSS, JavaScript, Kotlin, and CPP. I craft intuitive user experiences and solve complex puzzles
        </p>
        <div >
            <Link to="portfolio" smooth duration={500}>
            <button className="group w-fit cursor-pointer h-fit p-2 m-3 bg-gradient-to-r from-amber-500 to-amber-200 rounded ">
             Portfolio 
             <span className="group-hover:rotate-90 duration-100">
                <IoIosArrowDropright className='w-20 group-hover:rotate-90 duration-100'></IoIosArrowDropright>
             </span>
            </button>
            </Link>
        </div>

    </div>
    <div className='ms-2 flex flex-col items-center justify-center  h-full w-1/2' >
    <img src={o} className=" md:w-full md:h-[60%]  " style={{borderRadius:"50px" }} alt="Description" />

    </div>
  
</div>

    </div>
  )
}

export default Home
import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import o from "../MyImage2.png"
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className='flex w-full h-screen px-0 justify-center items-center bg-gradient-to-b flex-col from-black to-gray-700'>
<div className="flex md:px-36 flex-col md:flex-row justify-center items-center w-full h-full">

    <div className='text-white flex flex-col '>
        <h1 className='text-4xl lg:text-7xl text-amber-400'>Hello I'm Yash Verma..</h1>
        <p className="text-gray-300 text-1xl max-w-md">
        Driven and enthusiastic Computer Science Engineer with a passion for innovation and problem-solving. I bring a strong foundation in computer science principles along with practical experience in software development and engineering. I thrive in dynamic environments where I can apply my technical skills to create meaningful solutions.
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
    <div className='ms-2 flex flex-col items-center justify-center' >
    <img src={o} className="w-[57vw] h-[80vh]" style={{borderRadius:"40px" }} alt="Description" />

    </div>
  
</div>

    </div>
  )
}

export default Home
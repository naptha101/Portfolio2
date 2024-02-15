import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {Link} from 'react-scroll';
const Navbar = () => {
    const kk=[{id:1,link:"home"},
    {id:2,link:"About"},
    {id:3,link:"Experience"},
    {id:4,link:"portfolio"}
]
const [nav,setNav]=useState(false);
  return (
    <div className='flex justify-between item-center w-full h-12 text-white fixed px-2 bg-black'>
<div>
    <h1 className='text-4xl ml-3'>Yash</h1>
</div>
<ul className='hidden md:flex'>
    {kk.map((e,index)=>(
        
        <li key={index} className='px-4 m-3 cursor-pointer capitalize hover:text-white hover:scale-105 duration-175 text-gray-400'>
        <Link to={e.link} smooth duration={500}>{e.link}</Link>
      </li>
    
    ))}
   
    {/* <li className='px-4 m-3 cursor-pointer capitalize hover:scale-125 duration-175 text-gray-400'>About</li>
    <li className='px-4 m-3 cursor-pointer capitalize hover:scale-125 duration-175 text-gray-400'>Home</li> */}
</ul>
<div onClick={()=>{setNav(!nav)}} className='md:hidden lg:hidden flex flex-col pr-3 text-gray-400 cursor-pointer justify-center'>
  {nav?<ImCross></ImCross>:<FaBars></FaBars>}
</div>
{nav&&
<ul className='flex flex-col absolute top-0 right-0 bg-slate-300 w-full h-screen justify-center items-center
bg-gradient-to-b from-black to-gray-500 text-gray-500
'>
  <li onClick={()=>{setNav(!nav)}} className='px-4 capitalize py-6 font-bold cursor-pointer'><ImCross></ImCross></li>
     {kk.map((e,index)=>(
        <li key={index} className='px-4 capitalize py-6 font-bold cursor-pointer'><Link  to={e.link} smooth duration={500}>{e.link}</Link></li>
    ))}
</ul>}
    </div>
  )
}

export default Navbar
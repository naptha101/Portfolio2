import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoDocumentTextSharp } from "react-icons/io5";
const Social = () => {
  return (
    <div className="hidden lg:flex top-[35%] left-[-120px] fixed">
      <ul className='flex flex-col '>
        <li className='flex justify-between items-center text-white w-fit h-14 px-2 ms-[-15px] bg-gray-600 hover:ms-[80px] duration-100 ease-out rounded-se-md'>
          <a href='https://www.linkedin.com/in/yash-verma-7bb415241/'  rel="noreferrer" target="_blank">
            <div className='flex flex-row'>
            <h4 className='mt-2 text-white'>LinkedIn</h4>
              
            <FaLinkedin className="mt-2" style={{color:'white'}} size={35}></FaLinkedin>
            
            </div>
          </a>
        </li>
        <li className='flex justify-between items-center text-white w-fit  h-14 px-2 bg-gray-600 hover:ms-[80px] duration-100 ease-out'>
          <a href='https://github.com/naptha101/' rel="noreferrer" target="_blank">
            <div className='flex flex-row'>
            <h4 className='mt-2 text-white'>GitHub</h4>
            <FaGithub className="mt-2" style={{color:'white'}} size={35}></FaGithub>
              
             
            </div>
          </a>
        </li>
        <li className='flex bg-gray-600 justify-between text-white items-center w-fit  h-14 px-2 ms-[14.5px]  hover:ms-[80px] duration-100 ease-out'>
          <a href='mailto:yashverma2121212121@gmail.com' target="_blank" rel="noreferrer">
            <div className='flex flex-row'>
            <h4 className='mt-2 text-white'>Gmail</h4>
            <IoMailOpenOutline className="mt-2" style={{color:'white'}} size={35}></IoMailOpenOutline>
            
              
            </div>
          </a>
        </li>
        <li className='flex justify-between items-center w-fit rounded-ee-md h-14 px-2 ms-[-8px] bg-gray-600 text-white hover:ms-[80px] duration-100 ease-out'>
          <a  download={true}
          href='https://drive.google.com/file/d/1xOz8g5oXqoEcfvlizGInSjX6wd-S5Bcg/view?usp=sharing' target="_blank" rel="noreferrer">
            
            <div className='flex flex-row'>
            <h4 className='mt-2 text-white no-underline'>Resume</h4>
            <IoDocumentTextSharp className="mt-2 " style={{color:'white'}} size={35}></IoDocumentTextSharp>
              
              
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;

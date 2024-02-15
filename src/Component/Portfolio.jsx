import React from 'react'

import Chat from '../Assets/Chat.jpg'
import blog from '../Assets/blog.jpg'
import investing from '../Assets/Investment.png';
import chat2 from '../Assets/Chat2.0.png'
import workout from '../Assets/workout.png';
import coding from '../Assets/Coding.png'
const Portfolio = () => {
    const portfolios=[
        {id:1,title:"Sparrow",src:Chat,lin:"https://www.linkedin.com/posts/yash-verma-7bb415241_techstack-sparrowchat-mernstack-activity-7161261792084520960-IPZ3?utm_source=share&utm_medium=member_desktop"},
        {id:2,title:"Blog Ease",src:blog,lin:"https://www.linkedin.com/posts/yash-verma-7bb415241_mernstack-webdevelopment-restapi-activity-7158795189061406720-UZ0Q?utm_source=share&utm_medium=member_desktop"},
        {id:3,title:"DSA",src:coding,lin:"https://www.linkedin.com/posts/yash-verma-7bb415241_codingninjas-datastructures-codestudios-activity-7156687457554489344-E_EI?utm_source=share&utm_medium=member_desktop"},
        {id:4,title:"Investment Buddy",src:investing,lin:"https://www.linkedin.com/posts/yash-verma-7bb415241_androiddevelopers-kotlin-financialplanning-activity-7109562246384500736-SYWY?utm_source=share&utm_medium=member_desktop"},
        {id:5,title:"ChatMe",src:chat2,lin:"https://www.linkedin.com/posts/yash-verma-7bb415241_androidapp-kotlin-firebase-activity-7138795352282882048-vBZG?utm_source=share&utm_medium=member_desktop"},
        {id:6,title:"7 Min Workout",src:workout,lin:"https://www.linkedin.com/posts/yash-verma-7bb415241_hey-folks-hope-you-guys-are-doing-great-activity-7101512607227871232-wsrm?utm_source=share&utm_medium=member_desktop"},

    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-slate-600 w-full md:full text-gray-300">
        <div className="max-w-screen-lg p-4 mx-auto flec flex-col justify-center w-full h-full">
<div className='pb-8'>
<p className='text-4xl border-blue-300 border-b-4 capitalize w-fit  text-blue-300'>Portfolio</p>
<p className='text-xl text-white'>Check Out Some Of My Work Right Here</p>
</div>
<div className='grid md:grid-cols-3 sm:grid-cols-2 px-12 sm:px-2'>
    {portfolios.map(({id,src,lin,title})=>{
     
    return <div key={id} className='flex my-2 flex-col p-3 items-center justify-between shadow-md shadow-gray-500 rounded-lg mx-2'>
<img alt="Project" className=" rounded-md hover:scale-105 duration-500 w-60 h-48" src={src}></img>

<div className='flex gap-4 flex-col p-2  items-center'>
<p className='text-center text-bold text-xl'>{title}</p>
<a href={lin} rel="noreferrer" className="text-white" target='_blank'><button className=' shadow-md shadow-gray-500 px-4 h-full hover:scale-105 duration-300 rounded-md'>Details</button></a> 
</div>
</div>

    })}






</div>
</div>
    </div>
  )
}

export default Portfolio
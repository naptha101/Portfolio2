import React from 'react'

import DSA from '../Assets/DSA.jpg'
import Down from '../Assets/download.jpg'
import html from '../Assets/HTML.jpg'
import express from '../Assets/express.jpg'
import kotlin from '../Assets/Kotlin.jpg'
import Node from '../Assets/Node.jpg'
import react from '../Assets/React.jpg'
import js from '../Assets/JS.jpg'
import java from '../Assets/JAVA.jpg'
import Android from '../Assets/Android.jpg'
import mongo from '../Assets/Mongo.jpg'
const Experience = () => {
    const Experiences=[{
        id:1,
        src:html,
        title:"html",
       style:"shadow-orange-500"
    },
    {
        id:2,
        src:Down,
        title:"CSS",
       style:"shadow-blue-300"
    },

    {
        id:3,
        src:Android,
        title:"Android",
       style:"shadow-green-500"
    },
    {
        id:4,
        src:js,
        title:"JS",
       style:"text-bold shadow-yellow-500"
    },
    {
        id:5,
        src:DSA,
        title:"DSA",
       style:"shadow-blue-800"
    },
    {
        id:6,
        src:express,
        title:"Express JS",
       style:"shadow-gray-500"
    },
    {
        id:7,
        src:kotlin,
        title:"Kotlin",
       style:"shadow-blue-300"
    },
    {
        id:8,
        src:Node,
        title:"Node Js",
       style:"shadow-green-700"
    },
    {
        id:9,
        src:react,
        title:"React Js",
       style:"shadow-blue-200"
    },
    {
        id:10,
        src:java,
        title:"Java",
       style:"shadow-red-500"
    },
    {
        id:11,
        src:mongo,
        title:"MongoDb",
       style:"shadow-yellow-500"
    },
    
    

]
  return (
    <div name="Experience" className="flex flex-col bg-gradient-to-b from-slate-600 to-black w-full h-fit py-7">
<div className='flex flex-col max-w-screen-lg mx-auto p-4 w-full h-full justify-center text-gray-300'>
    <div className='flex flex-col p-3'>
        <p className='text-4xl w-fit border-b-4  text-blue-300'>Experience</p>
        <p className='text-xl w-fit '>Here is my Tech-Stack</p>
    </div>


    <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 px-12 sm:px-0'>
        {
            Experiences.map(({id,src,title,style})=>(
                <div key={id} className={`flex flex-col gap-2 py-3  rounded-lg shadow-md hover:scale-105 ${style}`}>
            <img src={src} className='w-20 mx-auto rounded-full'
            alt='Exp'
            ></img>
             <p className='text-center font-bold font-serif mt-3'> {title}</p>
        </div>

            ))
       }
    </div>
</div>


    </div>
  )
}

export default Experience
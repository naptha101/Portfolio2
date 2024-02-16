import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b text-gray-500 from-gray-700  to-black'>
<div className="ps-5 pe-8 py-5 flex flex-column items-cente">
<h1 className=' w-fit text-4xl inline  text-amber-400'>About</h1>
<br>
</br>
<p className="text-wrap text-xl px-2 py-2 text-white">
 Hello i'm Yash!
Passionate Computer Science Engineer with a strong foundation in software development and coding. Experienced in building robust and scalable applications, I am seeking opportunities to leverage my skills and contribute to innovative projects in a dynamic environment.
</p>
<br>
</br>
<p className="text-wrap text-xl px-2 py-2 text-white">
I'm honing my skills in MERN Stack and Android Development. Projects like "Blog Ease" for idea exchange and "Investing Buddy" for financial tracking showcase my passion for creating meaningful solutions.
I thrive on challenges, securing a top 8 rank on GFG portal and armed with certifications in Android and web  development
As an avid explorer in the tech universe, I stay ahead of the curve. Focused on becoming a software maestro, I'm not just chasing dreams; I'm coding them into reality. Let's embark on this digital journey together!.
<Link to='contact' className='text-amber-400 font-bold cursor-pointer no-underline' smooth duration={500}>Contact me</Link>
</p>

    </div>
    </div>
  )
}

export default About
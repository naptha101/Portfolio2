import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="bg-gradient-to-b  from-black to-slate-500 w-full h-full py-2 flex flex-col justify-center">
<div className='flex flex-col justify-center items-center text-gray-200  px-12 max-w-screen-lg mx-auto h-full'>
    <div className='p8-8 '>
        <p className='text-3xl w-fit font-bold  font-serif text-center text-amber-400'>Contact</p>
        <p className='text-xl'>Submit query to get in contact with me </p>
    </div>
<div className='flex flex-row d-fit justify-center border-3 rounded-lg py-2 md:p-10 border-white'>

<form className="flex flex-col w-fit justify-center items-start gap-3 px-2" action="https://getform.io/f/ba630b39-fbbc-4640-bcc5-96654e792c2b" method='post'>
  <input name="text" placeholder='Enter Name' className='p-2 bg-transparent text-white border-2 rounded-md focus:outline-none focus:scale-105'></input>
 <input name="Email" placeholder='Enter Email' className='p-2 bg-transparent text-white border-2 rounded-md focus:outline-none focus:scale-105'></input> 
  <textarea name="Content" placeholder='Enter Message' className="px-2 w-[50vw] h-[30vh] bg-transparent text-white rounded-lg border-2 focus:outline-none focus:scale-105 "  ></textarea>
   <button  type='submit' className='px-9 py-3 rounded bg-gradient-to-r from-amber-600 to-amber-400 hover:scale-105 duration-300'>Submit</button>
</form>

</div>


</div>

    </div>
  )
}

export default Contact
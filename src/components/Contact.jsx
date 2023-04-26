import React from 'react'
import { useState } from "react";
import airplane from '../assets/airplane.png'
import Marquee from 'react-fast-marquee';


const Contact = () => {
  return (
    
    <div name ='contact' className='w-full h-screen flex justify-center items-center p-4'>
      <div className='contact-image-container '>
     
    <img src ={airplane} alt="airplane" style={{width:'50px'}}/>
   </div>
      
      <form method='POST' action="https://getform.io/f/2269e4c9-35b0-4bc9-b475-a75f7d418515" className='flex flex-col max-w-[600px] w-full'> 
        <div className='pb-6 mt-20'>
          <p className='text-4xl font-bold inline'>Send me a message!</p>
          <p className='py-4'>Submit the form below or shoot me an email - simionetiffany1@gmail.com</p>
        </div>
        <input className='p-2 border-solid border-2' type='text' placeholder='Enter your name' name='name' />
        <input className='my-4 p-2 border-solid border-2' type='email' placeholder='Enter your email' name='email' />
        <textarea className='p-2 border-solid border-2' name='message' rows='6' placeholder='Message'></textarea>
        <button className='text-[#002d72] border-solid border-2 hover:bg-[pink] px-4 py-3 my-8 mx-auto flex items-center'> Let's Connect</button>
      </form>
    </div>
  )
}

export default Contact
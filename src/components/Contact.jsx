import React from 'react'
import { useState } from "react";

const Contact = () => {
  return (
    <div name ='contact' className='w-full h-screen flex justify-center items-center p-4'>
      <div className='contact-image-container'>
        <img src="https://uploads-ssl.webflow.com/5e0e761a473c7693458bb389/5f05fc33646cf8b9e15a73d0_img-mango%402x.png" width="50" height="50" alt="manila mango" class="img-intro-mobile"></img>
      </div>
      <form method='POST' action="https://getform.io/f/2269e4c9-35b0-4bc9-b475-a75f7d418515" className='flex flex-col max-w-[600px] w-full'> 
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>Send me a message!</p>
          <p className='py-4'>Submit the form below or shoot me an email - simionetiffany1@gmail.com</p>
        </div>
        <input className='p-2' type='text' placeholder='Enter your name' name='name' />
        <input className='my-4 p-2' type='email' placeholder='Enter your email' name='email' />
        <textarea className='p-2' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-400 hover:border-pink-300 px-4 py-3 my-8 mx-auto flex items-center'> Let's Connect</button>
      </form>
    </div>
  )
}

export default Contact
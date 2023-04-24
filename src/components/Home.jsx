import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Aos from 'aos'
import Typewriter from 'typewriter-effect'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Home = () => {
  // animate on scroll effect
  useEffect(()=>{
      Aos.init({
          duration:2000,
          offset:300
      })
  },[])



  return (
    <div name ='home' className='w-full h-screen bg-[#fffbf6]'>


{/* Container */}
<div data-aos='fade-left' className='w-full md:h-full md:w-2/3 px-8 mx-auto flex flex-col justify-center h-fit font-Julius Sans Onetext-color'>
                    <p className='mt-8 text-lg md:text-xl '>Hi, my name is</p>
                    <h1 className='text-4xl md:text-6xl font-bold font-display py-4'>Tiffany Simione</h1>
                    <h2 className='text-lg md:text-xl font-bold'>
                        <Typewriter 
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("I'm a Fullstack Software Engineer.")
                                    .pauseFor(200)
                                    .start();
                            }}
                        />
                    </h2>
  <div>
    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#002d72] hover:border-pink 600' > View Work 
    <span className ='group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-3'/>
    </span>
    </button>
  </div>
</div>

    </div>






  )
}

export default Home
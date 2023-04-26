import React from 'react';
import css from '../assets/css.png';
import Marquee from 'react-fast-marquee';


const Skills = () => {
  return (
    <div name="skills" className="w-full h-fit">
    <div class="container flex flex-col">
      <div class="text-lg">
        <marquee loop>
          <h2 class="width: 100%">
            Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills  
          </h2>
        </marquee>
      </div>
    </div>

    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline">Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* skills icons and titles here */}
        </div>
     
 

<div className=' grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
    <div className='shadow-md shadow-[#fa8072] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={css}alt='css icon'/>
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#fa8072] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={css}alt='css icon'/>
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#fa8072] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={css}alt='css icon'/>
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#fa8072] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={css}alt='css icon'/>
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#fa8072] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={css}alt='css icon'/>
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#fa8072] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={css}alt='css icon'/>
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#fa8072] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={css}alt='css icon'/>
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#fa8072] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={css}alt='css icon'/>
        <p className='my-4'>CSS</p>
    </div>
</div>

</div>
    </div>
  )
}

export default Skills
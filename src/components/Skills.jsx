import React from 'react';
import css from '../assets/css.png';

const Skills = () => {
  return (
    <div name = 'skills' className='w-full h-fit'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
    <div>
        <p className='text-4xl font-bold inline'> Skills</p>
        <p className='py-4'>These are the technoliges I've worked with</p>
    </div>

<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
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
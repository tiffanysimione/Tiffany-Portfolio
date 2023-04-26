import React from 'react';
import trying from '../assets/trying.png'


function Work() {
  return (
    
<div name ='work' className='w-full md:h-screen'>
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8 mt-20'> 
    <p className='text-4xl font-bold inline'>Work</p>
    <p className='py-6'>Check out some of my recent work</p>
</div>

<div> 
<img src= 'https://uploads-ssl.webflow.com/6228e4b0518bd64c391affa4/622a3bfe16215b781d5cc69a_Wine%20glasses.gif'> 
</img>
</div>
  {/* Container */}

<div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
    
      {/* Grid Item */}

<div style ={{backgroundImage: `url(${trying})`}}
className ='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

    {/* Hover Effects */}

    <div className='opacity-0 group-hover:opacity-100'>
    <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
    </span>
    <div className='pt-8 text-center'>
        <a href='/'>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-green-500 font-bold text-lg'>Demo</button> </a>
        <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-green-500 font-bold text-lg'>Code</button> </a>
    </div>
    </div>
</div>
      {/* Grid Item */}
      <div style ={{backgroundImage: `url(${trying})`}}
className =' comingsoo shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

    {/* Hover Effects */}

    <div className='opacity-0 group-hover:opacity-100'>
    <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
    </span>
    <div className='pt-8 text-center'>
        <a href='/'>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-green-500 font-bold text-lg'>Demo</button> </a>
        <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-green-500 font-bold text-lg'>Code</button> </a>
    </div>
    </div>
</div>
      {/* Grid Item */}
      <div style ={{backgroundImage: `url(${trying})`}}
className ='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

    {/* Hover Effects */}

    <div className='opacity-0 group-hover:opacity-100'>
    <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
    </span>
    <div className='pt-8 text-center'>
        <a href='/'>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-green-500 font-bold text-lg'>Demo</button> </a>
        <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-green-500 font-bold text-lg'>Code</button> </a>
    </div>
    </div>
</div>
      {/* Grid Item */}
      <div style ={{backgroundImage: `url(${trying})`}}
className ='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

    {/* Hover Effects */}

    <div className='opacity-0 group-hover:opacity-100'>
    <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
    </span>
    <div className='pt-8 text-center'>
        <a href='/'>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-green-500 font-bold text-lg'>Demo</button> </a>
        <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-green-500 font-bold text-lg'>Code</button> </a>
    </div>
    </div>
</div>

</div>
</div>
</div>
  )
}

export default Work
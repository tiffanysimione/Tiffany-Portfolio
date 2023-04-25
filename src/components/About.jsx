import React from 'react'


const About = () => {
 
  return (
    <div name='about' className='w-full h-fit background-color '>

 <div className='flex flex-col justify-center items-center w-full h-full text-color[#002d72]'>

        
            {/* title */}
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' data-aos='fade-right'> 
                <div className='sm:text-right pb-8 pl-8'>
                    <p className='text-4xl font-display inline'>
                        About
                    </p>
                </div>
                <img src="https://uploads-ssl.webflow.com/5e0e761a473c7693458bb389/5f05fc33646cf8b9e15a73d0_img-mango%402x.png" width="50" height="50" alt="manila mango
" class="img-intro-mobile"></img>
            </div>

            {/* about me */}
            <div className='max-w-[1000px] px-8 py-2 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='text-xl sm:text-lg sm:text-right font-bold'>
                    <p data-aos='fade-right'>Hello there! I'm Tiffany.</p>
                </div>
                <div>
                    <p data-aos='fade-left'>I love using code to create beautiful and functional experiences from scratch.</p>
                </div>
            </div>

            <div className='max-w-[1000px] px-8 py-4 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='text-xl sm:text-lg sm:text-right font-bold'>
                    <p data-aos='fade-right'>How I got here:</p>
                </div>
                <div data-aos='fade-left'>
                    <p>My passion for software development stemmed from .</p>
                    <br></br>
                    <p>Watching the ideas in my mind come to life in the browser was like magic to me, <span className='italic'>and I've been hooked ever since.</span></p>
                </div>
            </div>

            <div className='max-w-[1000px] px-8 py-4 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='text-xl sm:text-lg sm:text-right font-bold'>
                    <p data-aos='fade-right'>My experience:</p>
                </div>
                <div data-aos='fade-left'>
                    <p>I just graduated a coding bootcamp and have accumulated over 450 hours of coding experience.</p>
                    <br></br>

                    <p>I am proficient in object-oriented programming, MVC frameworks, RESTful API development, and team collaboration strategies.</p>
                </div>
            </div>

            <div className='max-w-[1000px] px-8 py-4 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='text-xl sm:text-lg sm:text-right font-bold'>
                    <p data-aos='fade-right'>What am I up to?</p>
                </div>
                <div data-aos='fade-left'>
                    <p>I am actively seeking an entry level software engineer role to work on functional projects using intentional and user-focused design.</p>
                    <br></br>
                    <p>With my experience in the legal, hospitality, and education services industry, I am confident in my ability to work effectively with people from all backgrounds.</p>
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default About
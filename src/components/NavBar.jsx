import React,{useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.jpeg'
import {Link} from 'react-scroll'

const NavBar =() => {
 // toggle hamburger menu on click
const [nav, setNav] =useState(false)
const handleClick =() => setNav(!nav)

  return (
   <div className ='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'> 
   <div>
    <img src ={Logo} alt="Logo Image" style={{width:'50px'}}/>
   </div>


{/* menu */}
<ul className='hidden md:flex'>
    <li>
    <Link to="home" smooth={true} duration={500} > Home</Link>
    </li>
    <li>
    <Link to="about" smooth={true} duration={500} > About</Link>
    </li>
    <li>
    <Link to="skills" smooth={true} duration={500} > Skills</Link>
    </li>
    <li>
    <Link to="work" smooth={true} duration={500} > Work</Link>
    </li>
    <li>
    <Link to="contact" smooth={true} duration={500} > Contact</Link>
    </li>
</ul>


{/* Hamburger */}
<div onClick={handleClick} className='md:hidden z-10'>
{!nav ? <FaBars /> : <FaTimes />}
</div>

{/* Mobile Menu */}

<ul className= {!nav ? 'hidden': ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center'}>   
    <li className='py-6 text-4xl'>Home</li>
    <li className='py-6 text-4xl'>About</li>
    <li className='py-6 text-4xl'>Skills</li>
    <li className='py-6 text-4xl'>Work</li>
    <li className='py-6 text-4xl'>Contact</li>
   
</ul>


{/* social icons */}
            <div className='hidden md:flex fixed flex-col bottom-20 left-0'>
                <ul>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                        <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                        href='https://www.linkedin.com/in/christinalu3799/' target='_blank' rel="noreferrer">
                            LinkedIn <FaLinkedin size={25} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                        <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                        href='https://github.com/christinalu3799' target='_blank' rel="noreferrer">
                            GitHub <FaGithub size={25} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                        <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                        href='mailto:contact@christinalu.me' target='_blank' rel="noreferrer">
                            Email <HiOutlineMail size={25} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                        <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                        href='https://drive.google.com/file/d/1le062bv5yVDrKYchMyFB_hhcPtKl8ITE/view?usp=sharing' target='_blank' rel="noreferrer">
                            Resume <BsFillPersonLinesFill size={25} />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default NavBar
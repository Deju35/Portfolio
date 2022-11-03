import React, { useState } from 'react';

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-6 bg-[#0a192f] text-white'>
      <div>
        <img src={Logo} alt='' style={{ width: '50px' }} />
      </div>

      {/* Menu*/}
        <ul className='hidden md:flex'>
          <li>
           <Link to='home' smooth={true} duration={500}>
             Home
            </Link>
          </li>
          <li>
           <Link to='portfolio' smooth={true} duration={500}>
             Portfolio
            </Link>
          </li>
          <li>
           <Link to='about' smooth={true} duration={500}>
             About
            </Link>
          </li>          
          <li>
           <Link to='skills' smooth={true} duration={500}>
             Skills
            </Link>
          </li>
          <li>
           <Link to='contact' smooth={true} duration={500}>
             Contact
            </Link>
          </li>
        </ul>

        <div  onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />} 
        </div>

         {/* Mobile Menu*/}

        <ul className={!nav ?
           'hidden':
           ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl text-pink-600'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl text-pink-600'>
          <Link onClick={handleClick} to='portfolio' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='py-6 text-4xl text-pink-600'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl text-pink-600'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li> 
        <li className='py-6 text-4xl text-pink-600'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>

        {/* Social Icons*/}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/deju5832156?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm90UkuEXQgirmeRe6YWrRw%3D%3D'>
                  Linkedin<FaLinkedin size={30}/>
              </a>
            </li>
            <li className="w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-grey-500">
              <a className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/Deju35'>
                  Github<FaGithub size={30}/>
              </a>
            </li>
            <li className="w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400">
              <a className='flex justify-between items-center w-full text-gray-300'
                href='mailto:dejentesfaldet16@gmail.com'>
                  Email<HiOutlineMail size={30}/>
              </a>
            </li>
            <li className="w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C13584]">
              <a className='flex justify-between items-center w-full text-gray-300'
                href='https://drive.google.com/file/d/1sxXJOsDDpr8X6sicToz-9UAokmSC3bwh/view?usp=sharing'>
                  Resume<BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>
        </div>
          

      </div>
  )
  }

  export default Navbar;

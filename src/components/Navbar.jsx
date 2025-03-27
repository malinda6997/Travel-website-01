import React from 'react'
import {assets} from '../assets/assets'


const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 z-10 w-full'>
        <div className='container flex items-center justify-between px-20 py-4 mx-auto md:px-20 lg:px:-32'>
            <img src={assets.logo} alt="Logo" />
            <ul className='hidden text-white md:flex gap-7'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                 <a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a>
                 <a href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a>
                 <a href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden px-8 py-2 bg-white rounded-full md:block '>Sign up</button>
            <img className='md:hidden w-7' src="{assets.menu_icon}" alt="" />
        </div>
      
    </div>
  )
}

export default Navbar

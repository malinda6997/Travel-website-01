import React from 'react'
import {assets} from '../assets/assets'
import Navbar from './Navbar';

const Header = () => {
  return (
    <div 
  className="flex items-center w-full min-h-screen mb-4 overflow-hidden bg-center bg-cover"
  style={{ backgroundImage: "url('/header_img.png')" }}
  id="Header">
    <Navbar/> 
        <div className='container px-6 py-4 mx-auto text-center text-white md:px-20 lg:px-32'>
           <h2 className='text-5xl sm:text-6xl md:text-[82px] 
           inline-block max-w-3xl font-semibold pt-20'>
            Explore homes that fit your dreams</h2> 
           <div className='mt-16 space-x-6'>
            <a className='px-8 py-3 border border-white rounded' href="#Projects">Projects</a>
             <a className='px-8 py-3 bg-blue-500 rounded' href="#Contact">Contact us</a>
           </div>
        </div> 
    </div>
  )
}

export default Header

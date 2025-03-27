import React , {useState} from 'react'
import {assets} from '../assets/assets'




const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
            <img onClick={()=> setShowMobileMenu(true)} className='cursor-pointer w-7 md:hidden' src={assets.menu_icon} alt="menu" />
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  top-0 bottom-0 right-0  overflow-hidden transition-all bg-white `}>

          <div className='flex justify-end p-5 cursor-pointer'>
            <img onClick={()=> setShowMobileMenu(false)} className='w-6' src={assets.cross_icon} alt="close" />
          </div>
          <ul className='flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium'>
            <a className='inline-block px-4 rounded-full py2'
             href="">Home</a>
             <a className='inline-block px-4 rounded-full py2'
             href="">About</a>
             <a className='inline-block px-4 rounded-full py2'
             href="">Projects</a>
             <a className='inline-block px-4 rounded-full py2'
             href="">Testimonials</a>
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar

console.log(assets.menu_icon);

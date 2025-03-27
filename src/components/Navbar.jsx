import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto md:px-20 lg:px-32">
        <img src={assets.logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden text-white md:flex gap-7">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>

        <button className="hidden px-4 py-2 bg-white rounded-full md:block">
          Sign up
        </button>

        {/* 🔹 Mobile Menu Icon (Moved to Right) */}
        <img
          onClick={() => setShowMobileMenu(true)}
          className="ml-auto cursor-pointer w-7 md:hidden"
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* 🔹 Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white transition-all ${
          showMobileMenu ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end p-5 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            className="w-6"
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-10 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full"
            href="#Header"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full"
            href="#About"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full"
            href="#Projects"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full"
            href="#Testimonials"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#about" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 ${
          showMobileMenu ? 'w-full' : 'w-0'
        } overflow-hidden`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close"
          />
        </div>

        <ul className="flex flex-col items-center gap-4 mt-10 px-5 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#header" className="px-4 py-2 rounded-full inline-block">
            Home
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#about" className="px-4 py-2 rounded-full inline-block">
            About
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#projects" className="px-4 py-2 rounded-full inline-block">
            Projects
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#testimonials" className="px-4 py-2 rounded-full inline-block">
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

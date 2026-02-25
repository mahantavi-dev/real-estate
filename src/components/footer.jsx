import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        
        {/* Logo Section */}
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="Logo" />
          <p className='text-gray-400 mt-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Company Links */}
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li><a href='#Header' className='hover:text-white'>Home</a></li>
            <li><a href='#About' className='hover:text-white'>About us</a></li>
            <li><a href='#Contact' className='hover:text-white'>Contact us</a></li>
            <li><a href='#' className='hover:text-white'>Privacy policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>
            Subscribe to our newsletter
          </h3>
          <p className='text-gray-400 mb-4 max-w-80'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className='flex flex-col sm:flex-row gap-3'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500 w-full'
            />
            <button className='py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600'>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm'>
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>

    </div>
  )
}

export default Footer

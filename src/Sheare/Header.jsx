import React, { useState } from 'react'
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo/Logo (5).png"
import {   FaSearch, FaShoppingCart } from 'react-icons/fa';
import { CgChevronDown } from 'react-icons/cg';


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#FFFFFF] py-8 leading-8 ">
    <div className="max-w-screen-2xl	 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center  justify-between mx-auto md:block ">
        {/* Positioning the logo on the left side */}
        <div className="flex items-center relative justify-between">
          <div className="flex-shrink-0">
            <img
              className=""
              src={logo}
              alt="Logo"
            />
          </div>
          {/* Rest of the navigation items */}
          <div className="hidden lg:block ">
            <div className="ml-10 flex  items-baseline space-x-4">
            <Link
                to="/"
                className="text-gray-700  text-[20px]  px-3 py-2 rounded-md text-sm font-medium"
              >
              Home

              </Link>
              <Link
                to="/about"
                className="text-gray-700  text-[20px] px-3 py-2 rounded-md text-sm font-medium"
              >
              About

              </Link>
              <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 flex items-center gap-1  text-[20px] px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                 Pages <CgChevronDown className='mt-2 h-4'></CgChevronDown>
                 
                
                </button>
                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-lg">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 2</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 3</a>
                  </div>
                )}
              </div>
              <Link
                to="/shop"
                className="text-gray-700  text-[20px] px-3 py-2 rounded-md text-sm font-medium"
              >
              Shop

              </Link>
              <Link
                to="/shop"
                className="text-gray-700  text-[20px] px-3 py-2 rounded-md text-sm font-medium"
              >
             Projects

              </Link>
              <Link
                to="/shop"
                className="text-gray-700  text-[20px] px-3 py-2 rounded-md text-sm font-medium"
              >
              News

              </Link>
            </div>
          </div>
    
  <div className='hidden lg:block'>
  <div className='flex '>
         <div className=" mx-auto  flex  items-center rounded-md bg-white p-2">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 border rounded-l-full border-r-0  px-2 py-1  focus:outline-none  "
      />
      <button className="flex-none px-3 py-3 bg-[#7EB693] text-white rounded-full">
        <FaSearch className='h-5 w-5' />
      </button>
     
    </div>
          <div className='flex items-center'>
             
      <button className="flex  px-3 py-3 bg-[#274C5B] text-white rounded-full">
      <FaShoppingCart className="h- w- " />
      </button>
      <span className='border rounded-r-full border-l-0 font-bold py-1 ps-1 pe-2'> Cart (0)</span>
          </div>
    </div>
  </div>
    
        </div>
        

        {/* Responsive icon for mobile */}
        <div className="-mr-2 flex lg:hidden top-8 absolute right-4">
          <button
            onClick={toggleMenu}
            type="button"
            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    <Transition
      show={isMenuOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {(ref) => (
        <div className="lg:hidden" id="mobile-menu">
          <div
            ref={ref}
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
          >
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
          </div>
        </div>
      )}
    </Transition>
  </nav>
  )
}

export default Header
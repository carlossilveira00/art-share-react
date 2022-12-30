import React, { useEffect, useState } from 'react'
import logo from '../../artshare_logo.png'

const Navbar = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);
  let button;
  if (user == null) {
    button =
    <div className="flex md:order-2">
      <a href="/login" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-500 dark:hover:bg-green-600">Get started</a>
    </div>
  } else {
    button =
    <>
      <div className="relative">
        <button
          className="px-4 py-2 font-semibold text-black hover:text-gray-600 focus:outline-none focus:shadow-outline flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>Profile</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"/>
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 py-2 bg-white rounded-lg shadow-xl">
            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-800" href="#">Profile</a>
            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-800" href="#">Another action</a>
            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-800" href="#">Something else</a>
          </div>
        )}
      </div>
    </>
  }
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b fixed dark:border-gray-400">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-600">Art-Share</span>
        </a>
          {button}
      </div>
    </nav>
  )
}

export default Navbar;

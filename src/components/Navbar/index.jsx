import React from 'react'
import logo from '../../artshare_logo.png'

function Navbar() {
  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b dark:border-gray-400">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" class="flex items-center">
            <img src={logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-600">Art-Share</span>
        </a>
        <div class="flex md:order-2">
            <button type="button" class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-500 dark:hover:bg-green-600">Get started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

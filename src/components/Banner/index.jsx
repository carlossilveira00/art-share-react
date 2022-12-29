import React from 'react'

function Banner() {
  return (
    <div className="w-full bg-cover bg-art-background h-96">
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
                <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Rent and lend Art from the comfort of your home!</h1>
                <p className='text-white text-sm'>Maybe you need to make an amazing event or you just want your hope to have a fresh look.. Well, we have your back!</p>
                <button type="button" className="text-white focus:ring-4 my-3 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-500 dark:hover:bg-green-600">Join now!</button>
            </div>
        </div>
    </div>
  )
}

export default Banner;

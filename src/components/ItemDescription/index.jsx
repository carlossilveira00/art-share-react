import React from 'react'

const ItemDescription = () => {
  return (
    <div className=" container mx-auto w-4/6 pt-10 flex">
    <div className="w-3/5 p-6">
      <h5 className="font-bold text-xl ml-2 mb-3">Information</h5>
      <p className='border-b-2 mb-5 pb-5'>In pretium condimentum quam, eu pellentesque nisi dictum eu.
      In id leo ac quam convallis lobortis nec efficitur metus.
      Maecenas a orci eget felis luctus elementum.
      Maecenas consectetur ornare erat aliquam molestie.
      Donec vulputate neque augue, vel malesuada enim pulvinar eu.
      Duis quis sem justo. Suspendisse a commodo tellus.
      </p>
      <h5 className="font-bold text-xl ml-2 mb-3">Lessor Information</h5>
      <p>In pretium condimentum quam, eu pellentesque nisi dictum eu.
      In id leo ac quam convallis lobortis nec efficitur metus.
      Maecenas a orci eget felis luctus elementum.
      Maecenas consectetur ornare erat aliquam molestie.
      Donec vulputate neque augue, vel malesuada enim pulvinar eu.
      Duis quis sem justo. Suspendisse a commodo tellus.
      </p>
    </div>
    <div className="w-2/5 p-6">
      <h3 className="text-xl mb-2">Rent</h3>
      <div className="sticky top-0">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Rent
        </button>
      </div>
    </div>
  </div>



  )
}

export default ItemDescription;

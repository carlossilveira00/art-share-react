import React from 'react'
import RentingCard from '../RentingCard';

const ItemDescription = ({ item_id, user_id, description, price }) => {

  return (
    <div className=" container mx-auto w-4/6 pt-10 flex">
    <div className="w-3/5 p-6">
      <h5 className="font-bold text-xl ml-2 mb-3">Information</h5>
      <p className='border-b-2 mb-5 pb-5'>{ description }</p>
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
      <RentingCard
        item_id = {item_id}
        price = {price}
        user_id = {user_id}
      />
    </div>
  </div>



  )
}

export default ItemDescription;

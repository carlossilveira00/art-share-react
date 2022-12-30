import React from 'react';
import ItemCard from '../ItemCard';

const ItemsCardsGrid = () => {

  return (
    <div className="container mx-auto flex flex-wrap">
      <div className='w-1/4 p-2'>
        <ItemCard/>
      </div>
      <div className='w-1/4 p-2'>
        <ItemCard/>
      </div>
      <div className='w-1/4 p-2'>
        <ItemCard/>
      </div>
      <div className='w-1/4 p-2'>
        <ItemCard/>
      </div>
      <div className='w-1/4 p-2'>
        <ItemCard/>
      </div>
      <div className='w-1/4 p-2'>
        <ItemCard/>
      </div>
    </div>
  )
}

export default ItemsCardsGrid

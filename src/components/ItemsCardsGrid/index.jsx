import React from 'react';
import ItemCard from '../ItemCard';

function ItemsCardsGrid() {
  return (

    <div class="container mx-auto flex flex-wrap">
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

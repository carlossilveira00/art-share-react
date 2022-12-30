import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard';

const ItemsCardsGrid = () => {

  // Set the state of the items, this will be an array with objects.
  const[items, setItems] = useState([]);
  //Fetch all the items from the API, everytime the component reloads.
  useEffect(()=>{
    // Send Get Request to recieve all the items on the data base
    axios.get("http://localhost:3000/items")
    // The response will be an object with several objects, we want extract the data.
    .then(response => setItems(response.data))
  },[]);

console.log(items)
  return (
    <div className="container mx-auto flex flex-wrap">
      {items.map(item =>(
        <div className='w-1/4 p-2'>
          <ItemCard key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            category={item.category}
            image_url={item.image_url}
          />
        </div>
      ))}
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

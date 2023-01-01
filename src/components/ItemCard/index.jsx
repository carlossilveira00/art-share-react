import React from 'react';
import { useState } from 'react';

const ItemCard = ( { id,name, description, category, price, image_url } ) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a href={`/items/${id}`}>
    <div className="`w-4/4 px-2 py-4"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    >
      <div className="border rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48">
          <img src={ image_url } alt={ name } className="w-full h-full object-cover object-center" />
          <span className="absolute top-0 right-0 text-white bg-green-400 rounded-full px-3 py-1 mt-1">${ price }</span>
        </div>
        <div className="p-4">
          <small className="text-green-500 text-xs uppercase">{ category }</small>
          <h3 className={`font-bold text-xl mb-2 mr-20 ${isHovering ? '' : 'truncate'}`}>{ name }</h3>
          <p className={`text-sm tracking-tight font-light text-slate-600 leading-6 ${isHovering ? '' : 'truncate'}`}>{ description }</p>
        </div>
      </div>
    </div>
    </a>
  )
}

export default ItemCard;

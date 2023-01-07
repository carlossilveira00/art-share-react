import React from 'react'

const ItemImageGallery = ({ photos, name, category, location }) => {
  return (
    <>
      <div className='container mx-auto w-4/6 pt-24 mb-2'>
        <h3 className="font-bold text-xl ml-2 mb-0">{name}</h3>
        <small className="text-green-500 text-xs ml-2 uppercase">{category} - </small>
        <span className="text-green-500 text-xs underline uppercase">{location}</span>
      </div>
      <div className="container m-auto w-4/6 flex">
        <img src={photos[0]} alt="Big image" className="w-1/2 rounded-l-lg" />
        <div className="w-1/4 ml-2">
          <img src={photos[1]} alt="Small image 1" className='mb-2' />
          <img src={photos[2]} alt="Small image 2" />
        </div>
        <div className="w-1/4 ml-2">
          <img src={photos[3]} alt="Small image 3" className='mb-2 rounded-tr-lg' />
          <img src={photos[4]} alt="Small image 4" className='rounded-br-lg' />
        </div>
      </div>
    </>
  )
}

export default ItemImageGallery

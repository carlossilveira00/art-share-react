import React from 'react'

const ItemImageGallery = () => {
  return (
    <>
      <div className='container mx-auto w-4/6'>
        <h3 className="font-bold text-xl ml-2 mb-0">TITLE</h3>
        <small className="text-green-500 text-xs ml-2 uppercase">CATEGORY - </small>
        <span className="text-green-500 text-xs underline uppercase">LOCATION</span>
      </div>
      <div className="container m-auto w-4/6 flex">
        <img src="https://images.unsplash.com/photo-1672330145676-03a5b7cf7bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Big image" className="w-1/2 rounded-l-lg" />
        <div className="w-1/4 ml-2">
          <img src="https://images.unsplash.com/photo-1672330145676-03a5b7cf7bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Small image 1" className='mb-2' />
          <img src="https://images.unsplash.com/photo-1672330145676-03a5b7cf7bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Small image 2" />
        </div>
        <div className="w-1/4 ml-2">
          <img src="https://images.unsplash.com/photo-1672330145676-03a5b7cf7bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Small image 3" className='mb-2 rounded-tr-lg' />
          <img src="https://images.unsplash.com/photo-1672330145676-03a5b7cf7bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Small image 4" className='rounded-br-lg' />
        </div>
      </div>
    </>
  )
}

export default ItemImageGallery

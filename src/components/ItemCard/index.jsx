import React from 'react';

const ItemCard = () => {
  return (
    <div className="w-4/4 px-2 py-4">
      <div className="border rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48">
          <img src="https://images.unsplash.com/photo-1672330145676-03a5b7cf7bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="title" className="w-full h-full object-cover" />
          <span className="absolute top-0 right-0 text-white bg-green-400 rounded-full px-3 py-1 mt-1">$150</span>
        </div>
        <div className="p-4">
          <small className="text-green-500 text-xs uppercase">CATEGORY</small>
          <h3 className="font-bold text-xl mb-2 mr-20">THIS IS A TITLE</h3>
          <p className="text-sm tracking-tight font-light text-slate-600 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
        </div>
      </div>
    </div>
  )
}

export default ItemCard

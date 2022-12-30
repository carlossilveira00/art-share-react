import React from 'react'
import ItemImageGallery from '../../components/ItemImageGallery';
import Navbar from '../../components/Navbar';

const ItemPage = ({user}) => {
  return (
  <>
    <Navbar user={user}/>
    <ItemImageGallery />
  </>
  )
}

export default ItemPage;

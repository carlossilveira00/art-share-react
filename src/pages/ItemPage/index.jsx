import React from 'react'
import ItemImageGallery from '../../components/ItemImageGallery';
import Navbar from '../../components/Navbar';
import ItemDescription from '../../components/ItemDescription';

const ItemPage = ({user}) => {
  return (
  <>
    <Navbar user={user}/>
    <ItemImageGallery />
    <ItemDescription/>
  </>
  )
}

export default ItemPage;

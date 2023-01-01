import React, { useEffect, useState } from 'react'
import ItemImageGallery from '../../components/ItemImageGallery';
import Navbar from '../../components/Navbar';
import ItemDescription from '../../components/ItemDescription';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ITEM_API = "http://localhost:3000"

const ItemPage = ({user}) => {
  const location = useLocation();
  const [item, setItem] = useState({});

  useEffect(()=>{
    axios.get(ITEM_API + location.pathname)
    .then(response => setItem(response.data))
  },[]);

  console.log(item)
  return (
  <>
    <Navbar user={user}/>
    <ItemImageGallery
      name = {item.name}
      category = {item.category}
      location = {item.location}
    />
    <ItemDescription
      name = {item.name}
      description = {item.description}
      category = {item.category}
      location = {item.location}
      price = {item.price}
     />
  </>
  )
}

export default ItemPage;

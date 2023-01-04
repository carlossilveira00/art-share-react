import React, { useEffect, useState } from 'react'
import ItemImageGallery from '../../components/ItemImageGallery';
import Navbar from '../../components/Navbar';
import ItemDescription from '../../components/ItemDescription';
import Map from '../../components/Map';
import axios from 'axios';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';

const ITEM_API = "http://localhost:3000"

const ItemPage = ({ user, handleLogOut }) => {
  const location = useLocation();
  const [item, setItem] = useState({});

  useEffect(()=>{
    axios.get(ITEM_API + location.pathname)
    .then(response => setItem(response.data))
  },[]);

  return (
  <>
    <Navbar user={user} handleLogOut={handleLogOut}/>
    <ItemImageGallery
      name = {item.name}
      category = {item.category}
      location = {item.location}
    />
    <ItemDescription
      user_id = {user.user_information.id}
      item_id={item.id}
      name = {item.name}
      description = {item.description}
      category = {item.category}
      location = {item.location}
      price = {item.price}
     />
     <Map
      location = {item.location}
     />
     <Footer/>
  </>
  )
}

export default ItemPage;

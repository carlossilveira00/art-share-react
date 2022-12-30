import React from 'react'
import Navbar from '../../components/Navbar'
import ItemCard from '../../components/ItemCard'

function HomePage({ user }) {
  return (
    <>
      <Navbar user={user}/>
      <ItemCard/>
    </>
  )
}

export default HomePage

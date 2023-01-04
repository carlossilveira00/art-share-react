import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ItemsCardsGrid from '../../components/ItemsCardsGrid'

function HomePage({ user, handleLogOut }) {
  return (
    <>
      <Navbar user={user} handleLogOut={handleLogOut} />
      <ItemsCardsGrid />
      <Footer />
    </>
  )
}

export default HomePage

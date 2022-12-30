import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ItemsCardsGrid from '../../components/ItemsCardsGrid'

function HomePage({ user }) {
  return (
    <>
      <Navbar user={user} />
      <ItemsCardsGrid />
      <Footer />
    </>
  )
}

export default HomePage

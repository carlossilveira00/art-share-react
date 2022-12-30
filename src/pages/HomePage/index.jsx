import React from 'react'
import Navbar from '../../components/Navbar'
import ItemsCardsGrid from '../../components/ItemsCardsGrid'

function HomePage({ user }) {
  return (
    <>
      < Navbar user={user} />
      < ItemsCardsGrid />
    </>
  )
}

export default HomePage

import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';

function LandingPage({ title, user }) {

  return (
    <>
      <Navbar user={user}/>
      <Banner/>
      <h1>THIS IS A TITLE: {title} {user ? user.user_information.email : 'no user' } </h1>
    </>
  )
}

export default LandingPage;

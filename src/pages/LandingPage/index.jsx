import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import InformationCards from '../../components/InformationCards';

function LandingPage({ title, user }) {

  return (
    <>
      <Navbar user={user}/>
      <Banner/>
      <InformationCards/>
    </>
  )
}

export default LandingPage;

import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import InformationCards from '../../components/InformationCards';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';

function LandingPage({ title, user, handleLogOut }) {

  return (
    <>
      <Navbar user={user} handleLogOut={handleLogOut}/>
      <Banner/>
      <InformationCards/>
      <Faq />
      <Footer/>
    </>
  )
}

export default LandingPage;

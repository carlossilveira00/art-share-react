import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import InformationCards from '../../components/InformationCards';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';

function LandingPage({ title, user }) {

  return (
    <>
      <Navbar user={user}/>
      <Banner/>
      <InformationCards/>
      <Faq />
      <Footer/>
    </>
  )
}

export default LandingPage;

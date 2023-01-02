import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreateItemForm from '../../components/CreateItemForm';

const CreateRentalItemPage = ({ user }) => {
  // Set Item information that will be send to the DB through a POST request to create an Item.
  const [itemInformation, setItemInformation] = useState({});
  // Handle the change of of each field in the form to then set the state of the itemInformation.
  const handleChange = () => {

  };
  // Handle the submit will be the function that will be called when the user submits the form.
  // This function will take care of taking the itemInformation state and sending it to the API through an POST request.
  const handleSubmit = () => {

  };

  return (
    <>
      <Navbar user={user}/>
      <CreateItemForm />
      <Footer/>
    </>
  )
};

export default CreateRentalItemPage;

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreateItemForm from '../../components/CreateItemForm';
import axios from 'axios';
import { useNavigate } from 'react-router';

const CreateRentalItemPage = ({ user }) => {
  const navigate = useNavigate();
  // Set Item information that will be send to the DB through a POST request to create an Item.
  const [itemInformation, setItemInformation] = useState({});
  // Handle the change of of each field in the form to then set the state of the itemInformation.
  const handleChange = (event) => {
    event.preventDefault();
    setItemInformation(Object.assign({}, itemInformation, {[event.target.name]: event.target.value},{user_id: user.user_information.id}))
  };
  // Handle the submit will be the function that will be called when the user submits the form.
  // This function will take care of taking the itemInformation state and sending it to the API through an POST request.
  const handleSubmit = () => {
    axios.post('http://localhost:3000/items', itemInformation)
    //Redirect to Home after submission of the form.
    navigate('/home');
  };

  return (
    <>
      <Navbar user={user}/>
      <CreateItemForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Footer/>
    </>
  )
};

export default CreateRentalItemPage;

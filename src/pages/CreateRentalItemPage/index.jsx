import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreateItemForm from '../../components/CreateItemForm';
import { useNavigate } from 'react-router';

const CreateRentalItemPage = ({ user, handleLogOut }) => {
  const navigate = useNavigate();
  // Set Item information that will be send to the DB through a POST request to create an Item.
    const [formData, setFormData] = useState(new FormData());

  // Handle the change of each field in the form to then set the state of formData.
    const handleChange = (e) => {
      const { name, value } = e.target;
      formData.set(`item[${name}]`, value);

    };

    // Handle the change of the files, loop through them and attach them to the formData
    const handleFileChange = (e) => {
      const { files } = e.target;

      for (let i = 0; i < files.length; i++) {
        formData.append(`photos[${files[i].name}]`, files[i]);
      }
    };
  // Handle the submit will be the function that will be called when the user submits the form.
  // This function will take care of taking the formData state and sending it to the API through an POST request.
  const handleSubmit = (event) => {
    event.preventDefault()

    const request = {
    method: "POST",
    body: formData,
    headers: {}
  };

    formData.append('item[user_id]', user.user_information.user.id)

    // POST request to API and then redirect to home page.
    fetch('http://localhost:3000/items', request)
    .then(response => response.json())
    .then(data => navigate('/home'))

  };

  return (
    <>
      <Navbar user={user} handleLogOut={handleLogOut}/>
      <CreateItemForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleFileChange={handleFileChange}
      />
      <Footer/>
    </>
  )
};

export default CreateRentalItemPage;

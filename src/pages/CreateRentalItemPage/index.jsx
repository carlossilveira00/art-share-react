import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreateItemForm from '../../components/CreateItemForm';
import axios from 'axios';
import { useNavigate } from 'react-router';

const CreateRentalItemPage = ({ user, handleLogOut }) => {
  // const navigate = useNavigate();
  // Set Item information that will be send to the DB through a POST request to create an Item.
    // const [itemInformation, setItemInformation] = useState({});
    const [formData, setFormData] = useState(new FormData());

    // const formData = new FormData();
  // Handle the change of of each field in the form to then set the state of the itemInformation.
    // const handleChange = (event) => {
    //   event.preventDefault();
    //   setItemInformation(Object.assign({}, itemInformation, {[event.target.name]: event.target.value},{user_id: user.user_information.user.id}))
    // };
    const handleChange = (e) => {
      const { name, value } = e.target;
      formData.set(`item[${name}]`, value);

    };

    const handleFileChange = (e) => {
      const { files } = e.target;
      for (let i = 0; i < files.length; i++) {
        formData.append('photos', files[i]);
      }
    };
  // Handle the submit will be the function that will be called when the user submits the form.
  // This function will take care of taking the itemInformation state and sending it to the API through an POST request.
  const handleSubmit = (event) => {
    event.preventDefault()

    // fetch('http://localhost:3000/items', itemInformation
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))

    // const itemData = new FormData();
    // itemData.append('item[name]', event.target.name.value)
    // itemData.append('item[description]', event.target.description.value)
    // itemData.append('item[user_id]', user.user_information.user.id)
    formData.append('item[user_id]', user.user_information.user.id)
    sumbitToApi(formData)

    // const formData = new FormData()

    // for (let i = 0; i < form.photos.files.length; i++) {
    //   formData.append(
    //     'photos',
    //     form.photos.files[i],
    //     form.photos.files[i].name
    //   )
    // }

  //  const request = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   },
  //   body: formData
  // }

  //   fetch('http://localhost:3000/items', request)
  //   .then(response => response.json())
  //   .then(data => console.log(data))


    // axios.post('http://localhost:3000/items', itemInformation)
    // .then(response => console.log(response))
    //Redirect to Home after submission of the form.
    // navigate('/home');
  };

  const sumbitToApi = (data) => {

    fetch('http://localhost:3000/items', {
      method: "POST",
      body: data
    })
    .then(response => response.json())
    .then(data => console.log(data))
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

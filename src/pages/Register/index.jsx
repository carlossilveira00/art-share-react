import React, { useState } from 'react'
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';
import { Navigate } from "react-router-dom";
import RegisterForm from '../../components/RegisterForm';
import axios from 'axios';

const Register = ({handleRegistration}) => {
  // State for the Login form.
  const [registerInformation, setRegisterInformation] = useState({});
  let userToken = ''

  // handleChange function will be used to update the state of the logInInformation every keystroke.
  const handleChange = (event) => {
    event.preventDefault()
    setRegisterInformation(Object.assign({}, registerInformation, {[event.target.name]: event.target.value}))
  };

  //This function will run on submit. It sends a POST request to the API
  // to make the login request. And then with the response will set our current user
  // in the sessionStorage through a function that will be passed from the App component.
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/users', {user: registerInformation})
    .then(response => console.log(response))
    // handleRegistration({ user_information: data.status.data, user_token: userToken});
  };

  return (
    <div>
      <RegisterForm handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Register;

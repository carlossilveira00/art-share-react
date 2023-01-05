import React, { useState } from 'react'
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';
import { Navigate } from "react-router-dom";
import RegisterForm from '../../components/RegisterForm';

const Login = ({handleLogin}) => {
  // State for the Login form.
  const [logInInformation, setLogInInformation] = useState({})
  const [user, setUser] = useState(null);
  // User token that will be used to insert into the user object, so it can be used to
  // in the head of other requests.
  let userToken = ''

  // handleChange function will be used to update the state of the logInInformation every keystroke.
  const handleChange = (event) => {
    event.preventDefault()
    setLogInInformation(Object.assign({}, logInInformation, {[event.target.name]: event.target.value}))
  };

  //This function will run on submit. It sends a POST request to the API
  // to make the login request. And then with the response will set our current user
  // in the sessionStorage through a function that will be passed from the App component.
  const handleSubmit = (event) => {
    event.preventDefault()
    // Information to be passed to the POST request to the API
    const login = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user: logInInformation})
    };
    // POST Request to the API
    fetch('http://localhost:3000/users/sign_in', login)
      .then(response => {
        // Extract the user token from the headers of the API response.
        userToken = response.headers.get('Authorization')
        return response.json();
      })
      .then(data => {
        console.log(data)
        //This function it's called from the App component, it's porpuse is to set the currentUser in the sessionStorage.
        handleLogin({ user_information: data.status.data, user_avatar_url: data.user_avatar, user_token: userToken});
        setUser({ user_information: data.status.data, user_avatar_url: data.user_avatar, user_token: userToken})
      })

  };

  return (
    <div>
      <Navbar user={user}/>
      <LoginForm handleChange={handleChange} handleSubmit={handleSubmit}/>
      <RegisterForm/>
      {user && (
          <Navigate to="/home" replace={true} />
        )}
    </div>
  )
}

export default Login;

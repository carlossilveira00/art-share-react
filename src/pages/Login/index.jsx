import React, { useEffect, useState } from 'react'
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';

const Login = () => {
  const [session, setSession] = useState({})
  const [user, setUser] = useState({});
  let userToken = ''

  const handleChange = (event) => {
    event.preventDefault()
    setSession(Object.assign({}, session, {[event.target.name]: event.target.value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const login = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user: session})
    };

    fetch('http://localhost:3000//users/sign_in', login)
      .then(response => {
        userToken = response.headers.get('Authorization')
        return response.json();
      })
      .then(data => setUser({ user_information: data.status.data, user_token: userToken}))

  };


  useEffect(()=>{
    const userRequest = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': user.user_token }
    };
    fetch('http://localhost:3000/member_details', userRequest)
    .then(response => response.json())
    .then(data => console.log(data))
  }, [user]);

  return (
    <div>
      <Navbar user={user}/>
      <LoginForm handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Login;

import React, { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import CreateRentalItemPage from './pages/CreateRentalItemPage';
import ProfilePage from './pages/ProfilePage';
import Register from './pages/Register';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // This function stores the currentUser in the sessionStorage.
  const handleLogin = (data) => {
    sessionStorage.setItem("userSession", JSON.stringify(data));
  }

  // This function makes the value of the current user null, it means there's no current user logged in.
  const handleLogOut = () => {
    sessionStorage.removeItem('userSession');
    setCurrentUser(null);

  };

  const handleRegistration = () => {

  };

  // This hook will reload the information for the current user everytime the app reloads
  // so you don't loose the current user.
  useEffect(() => {
    const storedUser = sessionStorage.getItem("userSession");
    setCurrentUser(JSON.parse(storedUser));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage user={currentUser} handleLogOut={handleLogOut}/>,
    },
    {
      path: "/login",
      element: <Login handleLogin={handleLogin}/>,
    },
    {
      path: "/home",
      element: <HomePage user={currentUser} handleLogOut={handleLogOut}/>,
    },
    {
      path: "/items/:id",
      element: <ItemPage user={currentUser} handleLogOut={handleLogOut}/>,
    },
    {
      path: "/create-rental-item",
      element: <CreateRentalItemPage user={currentUser} handleLogOut={handleLogOut}/>,
    },
    {
      path: "/profile",
      element: <ProfilePage user={currentUser} handleLogOut={handleLogOut}/>,
    },
    {
      path: "/register",
      element: <Register handleRegistration = {handleRegistration}/>,
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;

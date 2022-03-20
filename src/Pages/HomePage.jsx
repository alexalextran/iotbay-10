import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/Nav';

import { useAuth } from "../Contexts/AuthContext";



const Homepage = () => {

    const { currentUser } = useAuth()

    const { logout } = useAuth()
    const navigate = useNavigate()
    
  async function handleLogout(){
    try{
      await logout()
      navigate("/");
    }catch(e){
      console.log(e)
      window.alert("Failed to logout!")
    }
  }

    return (
        <section>
        <Nav />
        <h1>Welcome {currentUser.email}</h1>
       
        <a onClick={handleLogout}>Log Out</a>

        </section>
    );
}

export default Homepage;

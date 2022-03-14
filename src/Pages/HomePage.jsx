import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { useAuth } from "../Contexts/AuthContext";


const Homepage = () => {

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
        <div>
        <p> <Link to="/signup"><a id='signin__redirect'>Signin</a></Link></p>
        <p> <Link to="/login"><a id='signin__redirect'>Signin</a></Link></p>
        <a onClick={handleLogout}>Log Out</a>

        </div>
    );
}

export default Homepage;

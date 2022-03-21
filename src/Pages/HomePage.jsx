import React from 'react';
import { useNavigate } from 'react-router-dom';
import Featuredproducts from '../Components/FeaturedProducts';
import Landingpage from '../Components/LandingPage';
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
        <Landingpage email={currentUser.email} />
        <Featuredproducts />
       
       
        <a onClick={handleLogout}>Log Out</a>

        </section>
    );
}

export default Homepage;

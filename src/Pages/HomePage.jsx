import React from 'react';

import Featuredproducts from '../Components/FeaturedProducts';
import Landingpage from '../Components/LandingPage';
import Nav from '../Components/Nav';

import { useAuth } from "../Contexts/AuthContext";



const Homepage = () => {

    const { currentUser } = useAuth()

   

    return (
        <section>
        <Nav />
        <Landingpage email={currentUser.email} />
        <Featuredproducts />
       
       
       

        </section>
    );
}

export default Homepage;

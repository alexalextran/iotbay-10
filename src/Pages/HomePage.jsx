import React from 'react';

import Featuredproducts from '../Components/FeaturedProducts';
import Landingpage from '../Components/LandingPage';
import Nav from '../Components/Nav';

import { useAuth } from "../Contexts/AuthContext";



const Homepage = () => {

    const { currentUser } = useAuth()



   console.log(JSON.stringify(currentUser));

    return (
        <section>
        <Nav email={currentUser.email} password={currentUser.password}/>
        <Landingpage email={currentUser.email} />
        <Featuredproducts />
       
       
       

        </section>
    );
}

export default Homepage;

import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

const Nav = () => {

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

    var myNav = document.getElementsByTagName('nav');
    window.onscroll = function () { 
      
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ){
            myNav[0].classList.add("nav-colored");
            myNav[0].classList.remove("nav-transparent");
           
        } 
        else {
            myNav[0].classList.add("nav-transparent");
            myNav[0].classList.remove("nav-colored");
        }
    };
    
    return (
        <nav>
            <div className='logo'><FaLaptopCode /></div>

            <ul>
            <li onClick={handleLogout}>Log Out</li>
                <li>
                    Homepage
                </li>
                <li>
                    Products
                </li>
                <li>
                    Manage My details
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

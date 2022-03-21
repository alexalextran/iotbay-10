import React from 'react';

const Nav = () => {

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
            <div>logo</div>

            <ul>
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

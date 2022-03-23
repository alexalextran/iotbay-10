import React from 'react';
import landing from '../assets/landingsvg.png';
import { FaTruck, FaBoxes, FaPhoneSquareAlt} from 'react-icons/fa';
const Landingpage = (props) => {
    return (
        <section id='landing'>
        

        <div className='landing__components'>

            <div className='landing__left'>

          
            <div>
                <h2>Hi {props.email} welcome to IOT BAY</h2>
            <p>Ausralia's largest collection of IOT devices</p>
            <button>Explore Our Products!</button>
            </div>

            <div>
                <img src={landing}></img>
            </div>
             </div>

            <div className='landing__row'>
                <div>
                    <p>Free Delivery</p>
                    <FaTruck />
                    
                </div>
                <div>
                    <p>Hundreds of Products!</p>
                    <FaBoxes />
                </div>
                <div>
                    <p>24/7 Support</p>
                    <FaPhoneSquareAlt />
                </div>
            </div>

            </div>
        </section>
    );
}

export default Landingpage;

import React from 'react';
import landing from '../assets/landingsvg.png';

const Landingpage = (props) => {
    return (
        <section id='landing'>

            <div className='landing__left'>
                <h2>Hi {props.email} welcome to IOT BAY</h2>
            <p>Ausralia's largest collection of IOT devices straight to your doorstep!</p>
            <button>Explore Our Products!</button>
            </div>

            <div>
                <img src={landing}></img>
            </div>
            
        </section>
    );
}

export default Landingpage;

import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
        <p> <Link to="/signup"><a id='signin__redirect'>Signin</a></Link></p>
        <p> <Link to="/login"><a id='signin__redirect'>Signin</a></Link></p>

        </div>
    );
}

export default Homepage;

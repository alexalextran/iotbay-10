import React from 'react';
import { Link } from 'react-router-dom';

const Loginpage = () => {
    return (
        <section className='signup'>
    
        <div className='signupcard'>
        <form>
        <h1>Login</h1>
        <input placeholder='Email' required ></input>
        <input placeholder='Password Minimum 6 characters' required></input>
        <button >Log In</button>
        </form>

        <p>Don't have an account? <Link to="/signup"><a id='signin__redirect'>Create an account here</a></Link></p>

        </div>
        </section>
    );
}

export default Loginpage;

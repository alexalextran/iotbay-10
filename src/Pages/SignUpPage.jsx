import React from 'react';
import { Link } from 'react-router-dom';

const Signuppage = () => {
    return (
        <section className='signup'>
    
        <div className='signupcard'>
        <form >
        <h1>SignUp</h1>
        <input placeholder='Email' required ></input>
        <input placeholder='Password Minimum 6 characters' required></input>
        <button >SignUp</button>
        </form>

        <p>Already Have An Account? <Link to="/login"><a id='signin__redirect'>Sign In here</a></Link></p>

        </div>
        </section>
    );
}

export default Signuppage;

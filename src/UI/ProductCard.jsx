import React from 'react';

const Productcard = (props) => {
    return (
        <div className='prduct card'>
            <h3>{props.title}</h3>

          
            <p>{props.desc}</p>

        </div>
    );
}

export default Productcard;

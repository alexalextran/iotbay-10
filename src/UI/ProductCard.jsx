import React from 'react';

const Productcard = (props) => {
    return (
        <div className='card'>
            <h3>{props.title}</h3>

          <div className='card__description'>
            <p>{props.desc}</p>
          </div>
           

        </div>
    );
}

export default Productcard;

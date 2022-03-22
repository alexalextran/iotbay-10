import React from 'react';

const Productcard = (props) => {

  
    return (
        <div className='card' style={{ backgroundImage: `url(${props.src})` } }>
            <h3>{props.title}</h3>
         

          <div className='card__description'>
            <p>{props.desc}</p>
          </div>
           

        </div>
    );
}

export default Productcard;

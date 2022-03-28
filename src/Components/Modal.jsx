import React from 'react';
import { FaTimes} from 'react-icons/fa';

const Modal = (props) => {
    return (
        <div className='modal__wrapper' onClick={() => props.setmodal(false)}>

            <div className='modal'>
                <FaTimes className='times' onClick={() => props.setmodal(false)}/>
                <div>
                    <p>Email: {props.email}</p>
                </div>

                <div>
                 <p>Password: {props.password}</p>
                </div>
            </div>
            
        </div>
    );
}

export default Modal;

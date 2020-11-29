import React from 'react';
import Tilt from 'react-tilt';
import brain from './light.png'
import './Logo.css';

const Logo = (params) => {
    return (
        <div className='ma2 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img src={brain} alt="Logo"></img>  </div>
            </Tilt>
        </div>
    )
}

export default Logo;
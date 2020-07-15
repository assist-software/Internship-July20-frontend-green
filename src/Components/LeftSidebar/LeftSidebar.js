import React from 'react';
import './Leftsidebar.css';
import avatar from '../LeftSidebar/imgs/img_avatar.png';
import NavLinks from '../LeftSidebar/butoane';

const leftSidebar = (props) => {
    return(
        <div className="LeftSidebar">
            <div className='sidebar'>

            <img className='elipse' src={avatar} alt='dad'></img>

            <p className='nume'>Connie Webb</p>
            <p className='functie'>Administrator</p>

           
            </div>
            <NavLinks />
        </div>
    );
};

export default leftSidebar;



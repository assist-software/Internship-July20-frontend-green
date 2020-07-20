import React from 'react';
import './Leftsidebar.css';
import avatar from '../LeftSidebar/imgs/img_avatar.png';
import NavLinks from '../LeftSidebar/butoane';

const leftSidebar = (props) => {
    return (

        <div className="LeftSidebar">
            <div className='sidebar'>

                <img className='elipse' src={avatar} alt='dad'></img>
                <div classname="text">
                    <p className='nume'>Connie Webb</p>
                    <p className='functie'>Administrator</p>
                </div>
                <div className='menu'>

                    <NavLinks />

                </div>
                <div className="button posti"> <button className='btnlog' id='textlog'>Logout</button></div>

            </div>
        </div>
    );
};

export default leftSidebar;



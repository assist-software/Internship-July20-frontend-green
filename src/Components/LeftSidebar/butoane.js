import React from 'react';
import './Leftsidebar.css';
import { NavLink } from 'react-router-dom';

const butoane =() =>
{
    return(
        <div>
          <div className='menu'>
            <NavLink to="/Coaches">
                <button className='btncoaches' id='text' ><i className="icon"></i>Coaches</button>
            </NavLink>
            <NavLink to="/Events"> 
                <button className='btnevents'  id='text' >Events</button>
            </NavLink>
            <NavLink to="/Clubs"> 
                <button className='btnclubs'  id='text' >Clubs</button>
            </NavLink>
            <NavLink to="/Athletes"> 
                <button className='btnath'  id='text'>Athletes</button>
            </NavLink>   
          </div>
            
            <button className='btnlog'  id='textlog'>Logout</button>

        </div>
    );
}
export default butoane;
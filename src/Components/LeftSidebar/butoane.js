import React from 'react';
import './Leftsidebar.css';

const butoane =() =>
{
    return(
        <div>
            <div className='menu'>
                
                <button className='btncoaches' id='text' ><i class="icon"></i>Coaches</button>
                <button className='btnevents'  id='text' >Events</button>
                <button className='btnclubs'  id='text' >Clubs</button>
                <button className='btnath'  id='text'>Athletes</button>
               
            </div>
            <button className='btnlog'  id='textlog'>Logout</button>

        </div>
    );
}
export default butoane;
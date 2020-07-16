import React from 'react';
import Events from './Events';

import './Event.css';

const EventComponent = props => {

    return (
        <div >

            <div className="choices">
                <p className="activeChoice">Ongoing (<span>{props.events.length}</span>)</p>
                <p>Future</p>
                <p>Past</p>
            </div>

            <div className='Events'>
                <Events events={props.events}></Events>
            </div>
        </div>
    );

};

export default EventComponent;
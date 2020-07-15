import React from 'react';
import Event from './Event';

import './Event.css';

const events = props => {

    return props.events.map((event, index) => {
        return <Event
            img={event.img}
            title={event.title}
            body={event.body}
            date={event.date}
            time={event.time}
            location={event.location}
            participants={event.participants}
        />
    });

};

export default events;
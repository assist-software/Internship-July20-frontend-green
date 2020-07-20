import React from 'react';
import Participant from './Participant.js';
import './EventPage.css';

const participants = props => {

    return props.participants.map((participant, index) => {
        return <Participant
            img={participant.img}
            name={participant.name}
            gender={participant.gender}
            age={participant.age}
        />
    });
};

export default participants;
import React from 'react';
import Participant from './Participant.js';
import './EventPage.css';

const participants = props => {



    return props.participants.map((participant, index) => {
        return <Participant
            id={participant.id}
            img={participant.img}
            name={participant.name}
            gender={participant.gender}
            age={participant.age}
            compare={props.compare}
            showGraphic={props.showGraphic}
        />
    });
};

export default participants;
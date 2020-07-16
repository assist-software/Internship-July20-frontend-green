import React from 'react';
import './EventPage.css';

const participant = props => {


    return (
        <div className="Participant">
            <img src={require('./img/avatar.png')} alt="" />
            <p className="p-name">{props.name}</p>
            <p className='p-details'>
                {props.gender} <span>&#183;</span> {props.age} YEARS
            </p>

        </div>
    )
}

export default participant;
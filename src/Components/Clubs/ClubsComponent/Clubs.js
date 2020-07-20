import React from 'react';
import Club from './SingleClub';

import './Clubs.css';

const clubs = props => {

    return props.clubs.map((club, index) => {
        return <Club
            title={club.title}
            img={club.img}
            members={club.members}
            coach={club.coach}
        />
    });
};

export default clubs;
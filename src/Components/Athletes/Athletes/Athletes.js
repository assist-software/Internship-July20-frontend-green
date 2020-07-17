import React from 'react';
import Athlete from './Athlete';

const athletes = props => {

    return props.members.map((member, index) => {
        return <Athlete
            img={member.img}
            name={member.name}
            gender={member.gender}
            age={member.age}
            primary={member.primary}
            secondary={member.secondary}
        />
    });
};

export default athletes;
import React from 'react';
import Athlete from './Athlete';

const athletes = props => {

    return props.members.map((member, index) => {
        return <Athlete
            img={member.img}
            name={`${member.first_name} ${member.last_name}`}
            gender={member.gender ? 'female' : 'male'}
            age={member.age}
            primary={member.primary_sport.type}
            secondary={member.secondary_sport.type}
        />
    });
};

export default athletes;
import React from 'react';
import Member from './Member';

const members = props => {

    return props.members.map((member, index) => {
        return <Member
            display={props.display}
            id={member.id}
            img={member.img}
            name={member.first_name + " " + member.last_name}
            gender={member.gender}
            age={member.age}
            primary={member.primary_sport}
            secondary={member.secondary_sport}
            accept={props.acceptEvent}
            reject={props.rejectEvent}
        />
    });
};

export default members;
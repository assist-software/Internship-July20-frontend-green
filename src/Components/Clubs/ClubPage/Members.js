import React from 'react';
import Member from './Member';

const members = props => {

    return props.members.map((member, index) => {
        return <Member
            img={member.img}
            name={member.name}
            gender={member.gender}
            age={member.age}
            primary={member.primary}
            secondary={member.secondary}
        />
    });
};

export default members;
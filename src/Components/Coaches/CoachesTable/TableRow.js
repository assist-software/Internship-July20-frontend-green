import React from 'react';
import Row from './Row';


import './CoachTable.css';

const TableRow = props => {

    return props.coaches.map((coach, index) => {
        return (
            <Row
                firstName={coach.firstName}
                lastName={coach.lastName}
                email={coach.email}
                club={coach.club} />
        );
    });
};

export default TableRow;

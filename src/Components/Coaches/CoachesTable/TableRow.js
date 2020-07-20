import React from 'react';
import Row from './Row';


import './CoachTable.css';

const TableRow = props => {

    return props.coaches.map((coach, index) => {
        return (

            <Row
                first_name={coach.first_name}
                last_name={coach.last_name}
                email={coach.email}
                club={coach.club} />

        );
    });
};

export default TableRow;

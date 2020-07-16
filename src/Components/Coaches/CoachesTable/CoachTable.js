import React from 'react';
import TableRow from './TableRow';

import './CoachTable.css';
// import { render } from '@testing-library/react';

const CoachTable = props => {

    return (
        <div className="CoachTable">
            <table id="table-coaches">
                <thead id="table-head">
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>First &amp; Last Name</th>
                        <th>Email Adress</th>
                        <th>Owned Clubs</th>
                        <th>Actions</th>
                    </tr>
                </thead>
        
                <TableRow coaches={props.coaches} />

           

              
            </table>
        </div>
    )
};

export default CoachTable;
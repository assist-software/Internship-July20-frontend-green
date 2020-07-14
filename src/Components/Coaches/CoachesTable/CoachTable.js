import React from 'react';
import TableRow from './TableRow'

import './CoachTable.css';
// import { render } from '@testing-library/react';

const CoachTable = props => {

    return (
        <div className="CoachTable">
            <table id="table-coaches">
                <tr id="table-head">
                    <th><input type="checkbox" /></th>
                    <th>First &amp; Last Name</th>
                    <th>Email Adress</th>
                    <th>Owned Clubs</th>
                    <th>Actions</th>
                </tr>



            </table>
        </div>
    )
};

export default CoachTable;
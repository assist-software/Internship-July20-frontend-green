import React from 'react';
import './CoachTable.css';
// import { render } from '@testing-library/react';

const TableRow = props => {

    return (
        <div className="TableRow">
            <tr>
                <td><input type="checkbox" /></td>
                <td>Shane Steward</td>
                <td>samantha.kennedy@example.com</td>
                <td>Biking Club, Running Club,.. +3</td>
                <td>
                    <button className="btn-edit"></button>
                    <button className="btn-delete"></button>
                </td>
            </tr>
        </div >
    )
};

export default TableRow;
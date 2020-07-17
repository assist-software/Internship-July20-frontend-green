import React from 'react';
import './CoachTable.css';
// import { render } from '@testing-library/react';

const Row = props => {

    return (
        <tr className="Row">
            <td><input type="checkbox" /></td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.club}</td>
            <td>
                <button className="btn-edit"></button>
                <button className="btn-delete"></button>
            </td>
        </tr>
    )
};

export default Row;
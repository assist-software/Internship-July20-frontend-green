import React from 'react';
import Athletes from './Athletes';

import './AthletesPage.css';

const athletesComponent = props => {

    return (
        <div className='ClubPage'>

            <p className="club-title">Atheletes</p>

            <div className="filterAdd">
                <input type="text" placeholder="Input Placeholder" />
                <button className="addBtn">Add new</button>
            </div>

            <div className="clubMembers">
                <Athletes members={props.members} />
            </div>

        </div>
    );
};

export default athletesComponent;
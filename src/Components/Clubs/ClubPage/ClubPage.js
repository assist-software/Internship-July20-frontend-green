import React from 'react';

import './ClubPage.css';

const clubPage = props => {

    return (
        <div className='ClubPage'>

            <p className="club-title">{props.clubs.title}</p>

        </div>
    );
};

export default clubPage;
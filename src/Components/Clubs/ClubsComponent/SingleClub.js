import React from 'react';

import './Clubs.css';

const club = props => {


    return (
        <div className='Club'>
            <p className='c-title'>{props.title}</p>


            <p className='c-subtitle'>Members</p>
            <div className="members">

                <img src={require('./img/avatar-1.png')} alt="" />
                <img src={require('./img/avatar-2.png')} alt="" />
                <img src={require('./img/avatar-3.png')} alt="" />
                <img src={require('./img/avatar-4.png')} alt="" />

                <p>+ {props.members}</p>
            </div>

            <p className='c-subtitle'>Coach</p>
            <p className='c-coach'>{props.coach}</p>

        </div>
    );
};

export default club;
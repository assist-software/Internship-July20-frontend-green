import React from 'react';
import './ClubPage.css';


const member = props => {

    return (
        <div className="Member">
            <div className="member-header">
                <img src={require('./img/avatar.png')} alt="" />
                <p className="p-name">{props.name}</p>
                <p className='p-details'>
                    {props.gender} <span>&#183;</span> {props.age} YEARS
                </p>
            </div>

            <div className="member-sports">
                <div className="primary-sport">
                    <p>Primary sport</p>
                    <p>{props.primary}</p>
                </div>
                <div className="secondary-sport">
                    <p>secondary sport</p>
                    <p>{props.primary}</p>
                </div>
            </div>


        </div>
    );
};

export default member;
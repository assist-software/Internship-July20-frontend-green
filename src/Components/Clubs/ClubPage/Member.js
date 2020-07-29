import React from 'react';
import './ClubPage.css';


const member = props => {



    return (
        <div className="Member">
            <div className="member-header">
                <img src={require('./img/avatar.png')} alt="" />
                <p className="p-name">{props.name}</p>
                <p className='p-details'>
                    {props.gender ? 'female' : 'male'} <span>&#183;</span> {props.age} YEARS
                </p>
            </div>

            <div className="member-sports">
                <div className="primary-sport">
                    <p>Primary sport</p>
                    <p>{props.primary_sport}</p>
                </div>
                <div className="secondary-sport">
                    <p>secondary sport</p>
                    <p>{props.secondary_sport}</p>
                </div>
            </div>

            {
                props.display ? (
                    <div className="member-request">
                        <div id="r-accepted" onClick={() => props.accept(props.id)}>
                            <p>Accept</p>
                        </div>
                        <div id="r-reject" onClick={() => props.reject(props.id)}>
                            <p>Reject</p>
                        </div>
                    </div >
                ) : null
            }


        </div >
    );
};

export default member;
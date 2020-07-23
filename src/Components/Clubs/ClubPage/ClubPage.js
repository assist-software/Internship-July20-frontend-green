import React, { Component } from 'react';
import Members from './Members';
import './ClubPage.css';
import { withRouter } from 'react-router-dom';

class ClubPage extends Component {

    render() {

        if (localStorage.getItem("token")) {
            console.log("Already logged in!");
            return (
                <div className='ClubPage'>

                    <p className="club-title">{props.club.title}</p>
                    <img className="club-edit" src={require('./img/edit.png')} />

                    <div className="club-coach">
                        <p>Coach</p>
                        <p>{props.club.coach}</p>
                    </div>

                    <div className='club-btns'>
                        <p className="active-btn">Members (<span>{props.club.members}</span>)</p>
                        <p>Requests</p>
                    </div>

                    <div className="filterAdd">
                        <input type="text" placeholder="Input Placeholder" />
                        <button className="addBtn">Add new</button>
                    </div>

                    <div className="clubMembers">
                        <Members members={props.members} />
                    </div>

                </div>
            );

        } else {
            localStorage.clear();
            console.log("logout Success")
            this.props.history.push(`/login`)
        }
    }
};

export default withRouter(ClubPage);
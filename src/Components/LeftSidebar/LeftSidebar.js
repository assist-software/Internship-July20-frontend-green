import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import avatar from '../LeftSidebar/imgs/img_avatar.png';
import NavLinks from '../LeftSidebar/butoane';
import './Leftsidebar.css';

class LeftSidebar extends Component {

    state = {
        fullname: 'Connie Webb',
        role: "Administrator"
    }

    logOut = () => {
        localStorage.clear();
        console.log("logout Success")
        this.props.history.push(`/login`)
    }

    render() {

        if (localStorage.getItem("token")) {
            console.log("Already logged in!");
            return (

                <div className="LeftSidebar" >
                    <div className='sidebar'>

                        <img className='elipse' src={avatar} alt='dad'></img>
                        <div classname="text">
                            <p className='nume'>{this.state.fullname}</p>
                            <p className='functie'>{this.state.role}</p>
                        </div>
                        <div className='menu'>

                            <NavLinks />

                        </div>
                        <div className="button posti"> <button className='btnlog' id='textlog' onClick={this.logOut}>Logout</button></div>

                    </div>
                </div>
            );
        } else {
            console.log("Please log in!");
            return (
                <div style={{ padding: '60px 40px', height: '100vh' }}>
                    {/* <p>Please log in!</p> */}
                </div>
            );
        }
    }

};

export default withRouter(LeftSidebar);



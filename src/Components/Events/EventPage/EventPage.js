import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Participants from './Participants';

import './EventPage.css';

class EventPage extends Component {

    state = {
        pageID: null,

    };

    componentDidMount() {
        const pageID = parseInt(this.props.match.params.id);
        this.setState({ pageID: pageID });
        console.log(pageID);
    }


    render() {


        if (localStorage.getItem("token")) {

            const iD = this.state.pageID;

            console.log(iD);

            return (
                <div className='EventPage'>

                    <header>
                        <p>Events</p>
                        <img src={require('./img/arrow-ios-right.png')} alt="" ></img>
                        <h1>{this.state.singleEvents[2]["event-title"]}</h1>
                    </header>

                    <div className='main-header'>

                        <p className="title">{this.state.singleEvents[2]["event-title"]}</p>
                        <button>Edit</button>

                        <div className="dateTime">
                            <div><p><img src={require('./img/calendar.png')} alt="" /> {this.state.singleEvents[2]["event-date"]}</p></div>
                            <div><p><img src={require('./img/clock.png')} alt="" /> {this.state.singleEvents[2]["event-time"]}</p></div>
                            <div><p><img src={require('./img/pin.png')} alt="" /> {this.state.singleEvents[2]["event-place"]}</p></div>
                        </div>
                    </div>

                    <div className="event-content">

                        <div className="image-content">

                        </div>

                        <div className="text-content">
                            <p className="title-content">{this.state.singleEvents[2]["article-title"]}</p>
                            <p>{this.state.singleEvents[2]["article-body"]}</p>

                        </div>
                    </div>

                    <div>
                        <div className="eventParticipants">
                            <button className="btn-compare">Compare Performance</button>
                            {/* <button className="btn-done">Done</button> */}
                            <p className="p-title">Participants (<span>{this.state.singleEvents[2].participants.length}</span>)</p>
                            <p className="p-select">Select participants you want to compare</p>
                        </div>

                        <div className="Participants">
                            <Participants participants={this.state.singleEvents[2].participants} />
                        </div>

                        <div className="compareParticipants">
                            <p className="p-select">Select metrics you want to be compared</p>
                            <div className="p-options">
                                <p className="p-option"><img src={require('./img/checkbox.png')} alt="" />Heart Rate</p>
                                <p className="p-option"><img src={require('./img/checkbox.png')} alt="" />Calories</p>
                                <p className="p-option"><img src={require('./img/checked.png')} alt="" />Av. Speed</p>
                                <p className="p-option"><img src={require('./img/checkbox.png')} alt="" />Distance</p>
                            </div>
                        </div>

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

export default withRouter(EventPage);

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import Participants from './Participants';

import './EventPage.css';

const token = localStorage.getItem("token");

class EventPage extends Component {

    state = {
        compare: false,
        btnClass: "btn-compare",
        btnText: 'Compare Performance',
        pageID: null,
        arrayGraphic: [''],
        displayGraphic: false,
        event: null,
        singleEvents: null,
        members: null
    };

    componentDidMount() {
        const pageID = parseInt(this.props.match.params.id);
        this.setState({ pageID: pageID });
        console.log("page id: ", pageID);

        axios.get(`http://192.168.149.51:8001/api/events/${pageID}/`,
            {
                headers: {
                    Authorization: `token ${token}`,
                },
            }).then((response) => {
                this.setState({ singleEvents: response.data.data, members: response.data.members });
                console.log(response)
            });
        console.log(this.state.event);
    }

    compare = (e) => {
        const valid = this.state.compare;
        if (!valid) {
            this.setState({ btnClass: 'btn-done', btnText: 'Done', compare: true });
            console.log("you can compare");
            console.log(this.state.compare);
        } else {
            this.setState({ btnClass: 'btn-compare', btnText: 'Compare Performance', compare: false, displayGraphic: false });
            console.log("you ended comparisons >))");
            console.log(this.state.compare);
        }
    }

    showGraphic = (checked, id) => {

        //adding or removing checked to array
        console.log(checked, id);
        let checking = this.state.arrayGraphic;
        if (checked) {
            checking[id] = '1';
        } else {
            checking[id] = '0';
        }
        this.setState({ arrayGraphic: checking })

        //checking if there is a participant checked
        if (checking.includes('1')) {
            this.setState({ displayGraphic: true });

        } else {
            this.setState({ displayGraphic: false });

        }
    }


    render() {

        if (localStorage.getItem("token")) {

            const iD = this.state.pageID;

            return (
                <div className='EventPage' style={{ backgroundColor: '#F9F9F9' }}>

                    <header>
                        <p>Events</p>
                        <img src={require('./img/arrow-ios-right.png')} alt="" ></img>
                        <h1>{this.state.singleEvents ? this.state.singleEvents["name"] : null}</h1>
                    </header>

                    <div className='main-header'>

                        <p className="title">{this.state.singleEvents ? this.state.singleEvents["name"] : null}</p>
                        <button>Edit</button>

                        <div className="dateTime">
                            <div><p><img src={require('./img/calendar.png')} alt="" /> {this.state.singleEvents ? this.state.singleEvents["date"] : null}</p></div>
                            <div><p><img src={require('./img/clock.png')} alt="" /> {this.state.singleEvents ? this.state.singleEvents["time"] : null}</p></div>
                            <div><p><img src={require('./img/pin.png')} alt="" /> {this.state.singleEvents ? this.state.singleEvents["location"] : null}</p></div>
                        </div>
                    </div>

                    <div className="event-content">

                        <div className="image-content">

                        </div>

                        <div className="text-content">
                            <p className="title-content">{this.state.singleEvents ? this.state.singleEvents["description1"] : null}</p>
                            <p>{this.state.singleEvents ? this.state.singleEvents["description2"] : null}</p>

                        </div>
                    </div>

                    <div>
                        <div className="eventParticipants">
                            <button className={this.state.btnClass} onClick={this.compare}>{this.state.btnText}</button>
                            <p className="p-title">Participants <span>({this.state.members ? this.state.members.length : null})</span></p>
                            <p className="p-select">Select participants you want to compare</p>
                        </div>

                        {this.state.members ? (
                            <div className="Participants">
                                {this.state.members ? <Participants participants={this.state.members} showGraphic={this.showGraphic} compare={this.state.compare} /> : null}
                            </div>
                        ) : <p>No participants</p>}

                        {
                            this.state.displayGraphic ? (
                                <div className="compareParticipants">
                                    <p className="p-select">Select metrics you want to be compared</p>
                                    <div className="p-options">
                                        <p className="p-option"><img src={require('./img/checkbox.png')} alt="" />Heart Rate</p>
                                        <p className="p-option"><img src={require('./img/checkbox.png')} alt="" />Calories</p>
                                        <p className="p-option"><img src={require('./img/checked.png')} alt="" />Av. Speed</p>
                                        <p className="p-option"><img src={require('./img/checkbox.png')} alt="" />Distance</p>
                                    </div>
                                </div>
                            ) : null
                        }

                    </div>

                </div>
            );
        } else {
            localStorage.clear();
            console.log("logout Success")
            this.props.history.push(`/login`)
            return false;
        }
    }
};

export default withRouter(EventPage);

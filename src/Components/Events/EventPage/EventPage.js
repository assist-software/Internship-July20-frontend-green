import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import Participants from './Participants';

import './EventPage.css';

class EventPage extends Component {

    state = {
        compare: false,
        btnClass: "btn-compare",
        btnText: 'Compare Performance',
        pageID: null,
        arrayGraphic: [''],
        displayGraphic: false,
        "singleEvents": [
            {
                "event-title": "Running For Life",
                "event-date": "20.06.2020",
                "event-time": "09:00 AM",
                "event-place": "Suceava Fortress, Main Enter",
                "article-title": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.",
                "article-body": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.",
                "participants": [
                    {
                        "id": "1",
                        "img": "",
                        "name": "Harold Howard",
                        "gender": "male",
                        "age": "22"
                    },
                    {
                        "id": "2",
                        "img": "",
                        "name": "Regina Cooper",
                        "gender": "female",
                        "age": "22"
                    },
                    {
                        "id": "3",
                        "img": "",
                        "name": "Brandon Wilson",
                        "gender": "male",
                        "age": "22"
                    },
                    {
                        "id": "4",
                        "img": "",
                        "name": "Shane Black",
                        "gender": "male",
                        "age": "22"
                    }
                ]
            },
            {
                "event-title": "New event 2",
                "event-date": "20.06.2020",
                "event-time": "09:00 AM",
                "event-place": "Suceava Fortress, Main Enter",
                "article-title": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.",
                "article-body": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.",
                "participants": [
                    {
                        "id": "1",
                        "img": "",
                        "name": "Harold Howard",
                        "gender": "male",
                        "age": "22"
                    },
                    {
                        "id": "2",
                        "img": "",
                        "name": "Regina Cooper",
                        "gender": "female",
                        "age": "22"
                    },
                    {
                        "id": "3",
                        "img": "",
                        "name": "Brandon Wilson",
                        "gender": "male",
                        "age": "22"
                    },
                    {
                        "id": "4",
                        "img": "",
                        "name": "Shane Black",
                        "gender": "male",
                        "age": "22"
                    }
                ]
            },
            {
                "event-title": "New 333333",
                "event-date": "20.06.2020",
                "event-time": "09:00 AM",
                "event-place": "Suceava Fortress, Main Enter",
                "article-title": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.",
                "article-body": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.",
                "participants": [
                    {
                        "id": "1",
                        "img": "",
                        "name": "Harold Howard",
                        "gender": "male",
                        "age": "22"
                    },
                    {
                        "id": "2",
                        "img": "",
                        "name": "Regina Cooper",
                        "gender": "female",
                        "age": "22"
                    },
                    {
                        "id": "3",
                        "img": "",
                        "name": "Brandon Wilson",
                        "gender": "male",
                        "age": "22"
                    },
                    {
                        "id": "4",
                        "img": "",
                        "name": "Shane Black",
                        "gender": "male",
                        "age": "22"
                    }
                ]
            },
            {
                "event-title": "New 4444",
                "event-date": "20.06.2020",
                "event-time": "09:00 AM",
                "event-place": "Suceava Fortress, Main Enter",
                "article-title": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.",
                "article-body": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.",
                "participants": [
                    {
                        "id": "1",
                        "img": "",
                        "name": "Harold Howard",
                        "gender": "male",
                        "age": "22"
                    },
                    {
                        "id": "2",
                        "img": "",
                        "name": "Regina Cooper",
                        "gender": "female",
                        "age": "22"
                    },
                    {
                        "id": "3",
                        "img": "",
                        "name": "Brandon Wilson",
                        "gender": "male",
                        "age": "22"
                    },
                    {
                        "id": "4",
                        "img": "",
                        "name": "Shane Black",
                        "gender": "male",
                        "age": "22"
                    }
                ]
            },
            {
                "event-title": "Running For Life - part 5",
                "event-date": "20.06.2025",
                "event-time": "099:00 AM",
                "event-place": "Suceava Fortress",
                "article-title": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.",
                "article-body": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.",
                "participants": [
                    {
                        "id": "1",
                        "img": "",
                        "name": "Harold Howard",
                        "gender": "male",
                        "age": "123"
                    },
                    {
                        "id": "2",
                        "img": "",
                        "name": "Regina Cooper",
                        "gender": "female",
                        "age": "142"
                    },
                    {
                        "id": "3",
                        "img": "",
                        "name": "Brandon Wilson",
                        "gender": "male",
                        "age": "1151"
                    },
                    {
                        "id": "4",
                        "img": "",
                        "name": "Shane Black",
                        "gender": "male",
                        "age": "2"
                    }
                ]
            }
        ]
    };

    componentDidMount() {
        const pageID = parseInt(this.props.match.params.id);
        this.setState({ pageID: pageID });
        console.log(pageID);
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
                        <h1>{this.state.pageID ? this.state.singleEvents[iD - 1]["event-title"] : null}</h1>
                    </header>

                    <div className='main-header'>

                        <p className="title">{this.state.pageID ? this.state.singleEvents[iD - 1]["event-title"] : null}</p>
                        <button>Edit</button>

                        <div className="dateTime">
                            <div><p><img src={require('./img/calendar.png')} alt="" /> {this.state.pageID ? this.state.singleEvents[iD - 1]["event-date"] : null}</p></div>
                            <div><p><img src={require('./img/clock.png')} alt="" /> {this.state.pageID ? this.state.singleEvents[iD - 1]["event-time"] : null}</p></div>
                            <div><p><img src={require('./img/pin.png')} alt="" /> {this.state.pageID ? this.state.singleEvents[iD - 1]["event-place"] : null}</p></div>
                        </div>
                    </div>

                    <div className="event-content">

                        <div className="image-content">

                        </div>

                        <div className="text-content">
                            <p className="title-content">{this.state.pageID ? this.state.singleEvents[iD - 1]["article-title"] : null}</p>
                            <p>{this.state.pageID ? this.state.singleEvents[iD - 1]["article-body"] : null}</p>

                        </div>
                    </div>

                    <div>
                        <div className="eventParticipants">
                            <button className={this.state.btnClass} onClick={this.compare}>{this.state.btnText}</button>
                            <p className="p-title">Participants (<span>{this.state.pageID ? this.state.singleEvents[iD - 1].participants.length : null}</span>)</p>
                            <p className="p-select">Select participants you want to compare</p>
                        </div>

                        {this.state.pageID ? (
                            <div className="Participants">
                                {iD ? <Participants participants={this.state.singleEvents[iD - 1].participants} showGraphic={this.showGraphic} compare={this.state.compare} /> : null}
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

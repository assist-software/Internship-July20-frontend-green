import React, { Component } from 'react';
import './EventPage.css';
import Participants from './Participants';


class EventPage extends Component {

    state = {
        id: [0, 1],
        singleEvents: [
            {
                "event-title": "Running For Life",
                "event-date": "20.06.2020",
                "event-time": "09:00 AM",
                "event-place": "Suceava Fortress, Main Enter",
                "article-title": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.",
                "article-body": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.",
                "participants": [
                    {
                        "img": "",
                        "name": "Harold Howard",
                        "gender": "male",
                        "age": "22"
                    },
                    {
                        "img": "",
                        "name": "Regina Cooper",
                        "gender": "female",
                        "age": "22"
                    },
                    {
                        "img": "",
                        "name": "Brandon Wilson",
                        "gender": "male",
                        "age": "22"
                    },
                    {
                        "img": "",
                        "name": "Shane Black",
                        "gender": "male",
                        "age": "22"
                    }
                ]
            },
            {
                "event-title": "Running For Life - part 2",
                "event-date": "20.06.2025",
                "event-time": "099:00 AM",
                "event-place": "Suceava Fortress",
                "article-title": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.",
                "article-body": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.",
                "participants": [
                    {
                        "img": "",
                        "name": "Harold Howard",
                        "gender": "male",
                        "age": "123"
                    },
                    {
                        "img": "",
                        "name": "Regina Cooper",
                        "gender": "female",
                        "age": "142"
                    },
                    {
                        "img": "",
                        "name": "Brandon Wilson",
                        "gender": "male",
                        "age": "1151"
                    },
                    {
                        "img": "",
                        "name": "Shane Black",
                        "gender": "male",
                        "age": "2"
                    }
                ]
            }
        ]
    };

    render() {
        return (
            <div className='EventPage'>

                <header>
                    <p>Events</p>
                    <img src={require('./img/arrow-ios-right.png')} alt="" ></img>
                    <h1>{this.state.singleEvents[1]["event-title"]}</h1>
                </header>

                <div className='main-header'>

                    <p className="title">{this.state.singleEvents[1]["event-title"]}</p>
                    <button>Edit</button>

                    <div className="dateTime">
                        <div><p><img src={require('./img/calendar.png')} alt="" /> {this.state.singleEvents[1]["event-date"]}</p></div>
                        <div><p><img src={require('./img/clock.png')} alt="" /> {this.state.singleEvents[1]["event-time"]}</p></div>
                        <div><p><img src={require('./img/pin.png')} alt="" /> {this.state.singleEvents[1]["event-place"]}</p></div>
                    </div>
                </div>

                <div className="event-content">

                    <div className="image-content">

                    </div>

                    <div className="text-content">
                        <p className="title-content">{this.state.singleEvents[1]["article-title"]}</p>
                        <p>{this.state.singleEvents[0]["article-body"]}</p>

                    </div>
                </div>

                <div>
                    <div className="eventParticipants">
                        <button className="btn-compare">Compare Performance</button>
                        {/* <button className="btn-done">Done</button> */}
                        <p className="p-title">Participants (<span>{this.state.singleEvents[0].participants.length}</span>)</p>
                        <p className="p-select">Select participants you want to compare</p>
                    </div>

                    <div className="Participants">
                        <Participants participants={this.state.singleEvents[0].participants} />
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
    }
};

export default EventPage;
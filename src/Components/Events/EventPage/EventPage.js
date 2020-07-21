import React, { Component } from 'react';
import './EventPage.css';
import Participants from './Participants';


class EventPage extends Component {

    state = {
        participants: [
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
    };

    render() {
        return (
            <div className='EventPage'>

                <header>
                    <p>Events</p>
                    <img src={require('./img/arrow-ios-right.png')} alt="" ></img>
                    <h1>Running for Life</h1>
                </header>

                <div className='main-header'>

                    <p className="title">Running for Life</p>
                    <button>Edit</button>

                    <div className="dateTime">
                        <div><p><img src={require('./img/calendar.png')} alt="" /> 20.06.2020</p></div>
                        <div><p><img src={require('./img/clock.png')} alt="" /> 09:00 AM</p></div>
                        <div><p><img src={require('./img/pin.png')} alt="" /> Suceava Fortress, Main Enter</p></div>
                    </div>
                </div>

                <div className="event-content">

                    <div className="image-content">

                    </div>

                    <div className="text-content">
                        <p className="title-content">Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.</p>
                        <p>Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.</p>

                    </div>
                </div>

                <div>
                    <div className="eventParticipants">
                        <button className="btn-compare">Compare Performance</button>
                        <button className="btn-done">Done</button>
                        <p className="p-title">Participants (<span></span>)</p>
                        <p className="p-select">Select participants you want to compare</p>
                    </div>

                    <div className="Participants">
                        <Participants participants={this.state.participants} />
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

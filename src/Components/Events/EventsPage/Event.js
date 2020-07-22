import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Event.css';


class Event extends Component {

    goToEventPage = () => {
        return <Redirect to={{ pathname: "/event:id=" }} />;
    }

    render() {
        return (
            <div className="Event" >
                <div className="event-img"
                >
                </div>
                <div className="event-body">
                    <div className="wrapper">
                        <h1>Running for Life</h1>
                        <p className="description">Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat
                        reprehenderit id.
                        </p>
                        <div className="dateTime">
                            <p><img src={require('./img/calendar.png')} alt="" /> 20.06.2020</p>
                            <p><img src={require('./img/clock.png')} alt="" /> 09:00 AM</p>
                            <br />
                            <p><img src={require('./img/pin.png')} alt="" /> Suceava Fortress, Main Enter</p>
                        </div>

                        <div className="participants">
                            <h1>participants</h1>

                            <img src={require('./img/avatar-1.png')} alt="" />
                            <img src={require('./img/avatar-2.png')} alt="" />
                            <img src={require('./img/avatar-3.png')} alt="" />
                            <img src={require('./img/avatar-4.png')} alt="" />

                            <p>+ {this.props.participants}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Event;
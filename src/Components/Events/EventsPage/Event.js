import React from 'react';
import './Event.css';
const event = props => {
    return (
        <div className="Event">
            <div className="event-img"
            // style={{ backgroundImage: url('./bg-1.png') }}
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

                        <p>+ 20</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default event;
import React from 'react';

const eventPage = props => {
    return (
        <div className='EventPage'>

            <header>
                <p>Events</p>
                <span></span>
                <h1></h1>
            </header>

            <div className='infosEdit'>

                <div className="dateTime">
                    <p><img src={require('./img/calendar.png')} alt="" /> 20.06.2020</p>
                    <p><img src={require('./img/clock.png')} alt="" /> 09:00 AM</p>
                    <br />
                    <p><img src={require('./img/pin.png')} alt="" /> Suceava Fortress, Main Enter</p>
                </div>

            </div>

        </div>
    );
};

export default eventPage;
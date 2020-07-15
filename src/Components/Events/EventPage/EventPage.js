import React from 'react';

import './EventPage.css';

const eventPage = props => {
    return (
        <div className='EventPage'>

            <header>
                <p>Events</p>
                <img src={require('./img/arrow-ios-right.png')} />
                <h1>Running for Life</h1>
            </header>

            <div className="dateTime">
                <p><img src={require('./img/calendar.png')} alt="" /> 20.06.2020</p>
                <p><img src={require('./img/clock.png')} alt="" /> 09:00 AM</p>
                <p><img src={require('./img/pin.png')} alt="" /> Suceava Fortress, Main Enter</p>
                <button>edit</button>

            </div>

            <div className="event-content">
                <div className='image-content'></div>
                <div className="text-content">
                    <h1>Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.</h1>
                    <p>Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.</p>
                </div>
            </div>

        </div >
    );
};

export default eventPage;
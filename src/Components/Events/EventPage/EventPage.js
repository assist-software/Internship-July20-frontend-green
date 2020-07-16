import React from 'react';
import Participants from './Participants';

import './EventPage.css';

const eventPage = props => {
    return (
        <div className='EventPage'>

            <header>
                <p>Events</p>
                <img src={require('./img/arrow-ios-right.png')} />
                <h1>Running for Life</h1>
            </header>


            <div className="main-header">

                <p className="title">Running for Life</p>
                <button>edit</button>

                <div className="dateTime">
                    <div>
                        <img src={require('./img/calendar.png')} alt="" />
                        <p>20.06.2020</p>
                    </div>
                    <div>
                        <img src={require('./img/clock.png')} alt="" />
                        <p> 09:00 AM</p>
                    </div>
                    <div>
                        <img src={require('./img/pin.png')} alt="" />
                        <p> Suceava Fortress, Main Enter</p>
                    </div>
                </div>


            </div>

            <div className="event-content">
                <div className='image-content'></div>
                <div className="text-content">
                    <p className="title-content">Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.</p>
                    <p>Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.</p>
                </div>
            </div>

            <div className='eventParticipants'>
                <p className='p-title'>Participants (<span>{props.participants.length}</span>)</p>
                <button className='btn-compare'>Compare performance</button>
                <button className='btn-done'>Done</button>

                <p className="p-select">Select participants you want to compare</p>

                <div className='Participants'>
                    <Participants
                        participants={props.participants} />
                </div>
            </div>

            <div className='compareParticipants'>
                <p className="p-select">Select metrics you want to be compared</p>

                <div className='p-options'>
                    <div className="p-option">
                        <img src={require('./img/checkbox.png')} />
                        <p className="p-option">Heart Rate</p>
                    </div>
                    <div className="p-option">
                        <img src={require('./img/checked.png')} alt='' />
                        <p className="p-option">Calories</p>
                    </div>
                    <div className="p-option">
                        <img src={require('./img/checked.png')} alt='' />
                        <p className="p-option">Av. Speed</p>
                    </div>
                    <div className="p-option">
                        <img src={require('./img/checkbox.png')} alt='' />
                        <p className="p-option">Distance</p>
                    </div>
                </div>

                <p className="p-select">Graph</p>


            </div>

        </div >
    );
};

export default eventPage;
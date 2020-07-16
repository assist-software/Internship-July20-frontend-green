import React, { Component } from 'react';
// import Login from './Components/Login/Login';
// import Header from './Components/Header/Header';
// import Coaches from './Components/Coaches/CoachesTable/CoachTable';
import Events from './Components/Events/EventsPage/EventComponent';
import EventPage from './Components/Events/EventPage/EventPage';
import Clubs from './Components/Clubs/ClubsComponent/ClubsComponent';
import ClubPage from './Components/Clubs/ClubPage/ClubPage';
import Athletes from './Components/Athletes/Athletes/AthletesComponent';

import './App.css';
import club from './Components/Clubs/ClubsComponent/SingleClub';

class App extends Component {

  state = {
    titles: ['Coaches', 'Events'],
    coaches: [
      { name: 'Shane Steward', email: 'samantha.kennedy@example.com', club: 'Biking Club, Running Club,.. +3' },
      { name: 'Bessie Robertson', email: 'ken.wright@example.com', club: 'Biking Club, Running Club,.. +20' },
      { name: 'Jorge Edwards', email: 'penny.nichols@example.com', club: 'Biking Club, Running Club,.. +6' },
      { name: 'Judith Steward', email: 'scott.gilbert@example.com', club: 'Biking Club, Running Club,.. +8' },
      { name: 'Arlene Murphy', email: 'nina.hernandez@example.com', club: 'Biking Club, Running Club,.. +20' },
      { name: 'Regina Flores', email: 'keith.richards@example.com', club: 'Biking Club, Running Club,.. +9' },
      { name: 'Theresa Alexander', email: 'ramona.lowe@example.com', club: 'Biking Club, Running Club,.. +2' }
    ],
    events: [
      { img: '', title: 'Running for Life', body: 'Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.', date: '20.06.2020', time: '09:00 AM', location: 'Suceava Fortress, Main Enter', participants: '123' },
      { img: '', title: 'Running for Life', body: 'Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.', date: '20.06.2020', time: '09:00 AM', location: 'Suceava Fortress, Main Enter', participants: '14' },
      { img: '', title: 'Running for Life', body: 'Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.', date: '20.06.2020', time: '09:00 AM', location: 'Suceava Fortress, Main Enter', participants: '35' },
      { img: '', title: 'Running for Life', body: 'Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.', date: '20.06.2020', time: '09:00 AM', location: 'Suceava Fortress, Main Enter', participants: '23523' },
      { img: '', title: 'Running for Life', body: 'Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.', date: '20.06.2020', time: '09:00 AM', location: 'Suceava Fortress, Main Enter', participants: '34' }
    ],
    participants: [
      { img: '', name: 'Harold Howard', gender: 'male', age: '26' },
      { img: '', name: 'Regina Cooper', gender: 'female', age: '24' },
      { img: '', name: 'Brandon Wilson', gender: 'male', age: '31' },
      { img: '', name: 'Shane Black', gender: 'male', age: '28' },
      // { img: '', name: 'Jorge Watson', gender: 'male', age: '27' },
      { img: '', name: 'Ronald Robertson', gender: 'male', age: '67' },
      { img: '', name: 'Wendy Watson', gender: 'female', age: '44' },
      { img: '', name: 'Priscilla Edwards', gender: 'female', age: '65' }
    ],
    clubs: [
      { title: 'Biking Club', img: '', members: '132', coach: 'Esther Wilson' },
      { title: 'Club Biking', img: '', members: '12', coach: 'Esther ' },
      { title: 'Biking Club', img: '', members: '5', coach: 'Wilson' },
      { title: 'Club Biking', img: '', members: '14', coach: 'Esther Wilson' },
      { title: 'Biking Club', img: '', members: '475', coach: 'Wilson' },
      { title: 'Club Biking', img: '', members: '523', coach: 'Esther Wilson' }
    ],
    members: [
      { img: '', name: 'Dianne Robertson', gender: 'female', age: '34', primary: 'Running', secondary: 'Biking' },
      { img: '', name: 'Eduardo Miles', gender: 'male', age: '25', primary: 'Biking', secondary: 'Running' },
      { img: '', name: 'Lily Jones', gender: 'female', age: '35', primary: 'Running', secondary: 'Biking' },
      { img: '', name: 'Wendy Watson', gender: 'female', age: '26', primary: 'Biking', secondary: 'Running' },
      { img: '', name: 'Courtney Nguyen', gender: 'female', age: '36', primary: 'Running', secondary: 'Biking' },
      { img: '', name: 'Bruce Russell', gender: 'male', age: '21', primary: 'Biking', secondary: 'Running' },
      { img: '', name: 'Bessie Richards', gender: 'female', age: '28', primary: 'Running', secondary: 'Biking' },
      { img: '', name: 'Mitchell Cooper', gender: 'male', age: '63', primary: 'Biking', secondary: 'Running' },
      { img: '', name: 'Pat Cooper', gender: 'male', age: '24', primary: 'Running', secondary: 'Biking' }
    ]
  }

  render() {
    return (
      <div className="App">

        {/* <Events events={this.state.events} /> */}

        {/* <EventPage participants={this.state.participants}></EventPage> */}

        {/* <Clubs clubs={this.state.clubs} /> */}

        {/* <ClubPage club={this.state.clubs[0]} members={this.state.members} /> */}

        <Athletes club={this.state.clubs[0]} members={this.state.members}></Athletes>

      </div>
    );
  };
};

export default App;

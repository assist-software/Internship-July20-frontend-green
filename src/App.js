import React, { Component } from 'react';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Coaches from './Components/Coaches/CoachesTable/CoachTable';
import Events from './Components/Events/EventsPage/EventComponent';
import Event from './Components/Events/EventPage/EventPage';

import './App.css';

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
    ]

  }

  render() {
    return (
      <div className="App">

        {/* <Login></Login> */}

        {/* <Header
          titles={this.state.titles[0]}
        />
        <Coaches
          coaches={this.state.coaches}
        /> */}


        {/* <Header
          titles={this.state.titles[1]}
        />
        <Events
          events={this.state.events}
        /> */}

        <Event />

      </div>
    );
  };
};

export default App;

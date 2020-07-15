import React, { Component } from 'react';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar';

import Coaches from './Components/Coaches/CoachesTable/CoachTable';
import Butoane from './Components/LeftSidebar/butoane';
// import TableRow from'./Components/Coaches/CoachesTable/TableRow';
import Events from './Components/Events/EventsPage/EventComponent';

import './App.css';

class App extends Component{

  state = {
    header: ['Coaches', 'Events'],
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

<div className="box">
         <div className="a">
        <LeftSidebar></LeftSidebar>
        <Butoane></Butoane>
        </div>


        <div className="b">
        {/* <Coachtable ></Coachtable>
        <TableRow></TableRow> */}
          <Coaches
          coaches={this.state.coaches}
        />
        <Events
          events={this.state.events}
        />
        </div>

        {/* <Login></Login> */}
      

      </div>
      </div>
    );
  };
};

export default App;

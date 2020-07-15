import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import CoachTable from './Components/Coaches/CoachesTable/CoachTable';
import EventComponent from './Components/Events/EventsPage/EventComponent';

class App extends Component {

  // constructor(props) {
  //   super(props);
  // }

  state = {
    headers: ['Coaches', 'Events', 'Clubs', 'Athletes'],
    coaches: [
      { name: '3d23', email: 'samantha.kennedy@example.com', club: 'Biking Club, Running Club,.. +3' },
      { name: 'Bessie Robertson', email: 'ken.wright@example.com', club: 'Biking Club, Running Club,.. +20' },
      { name: 'Jorge Edwards', email: 'penny.nichols@example.com', club: 'Biking Club, Running Club,.. +6' },
      { name: 'Judith Steward', email: 'scott.gilbert@example.com', club: 'Biking Club, Running Club,.. +8' },
      { name: 'Arlene Murphy', email: 'nina.hernandez@example.com', club: 'Biking Club, Running Club,.. +20' },
      { name: 'Regina Flores', email: 'keith.richards@example.com', club: 'Biking Club, Running Club,.. +9' },
      { name: 'Theresa Alexander', email: 'ramona.lowe@example.com', club: 'Biking Club, Running Club,.. +2' },
    ],
    events: [
      { img: './bg-1.png', title: 'Running for Life', body: 'Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.', date: '20.06.2020', time: '09:00 AM', location: 'Suceava Fortress, Main Enter', participants: '' },
      { img: './bg-2.png', title: 'Running for Life', body: 'Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.', date: '20.06.2020', time: '09:00 AM', location: 'Suceava Fortress, Main Enter', participants: '' },
      { img: './bg-3.png', title: 'Running for Life', body: 'Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.', date: '20.06.2020', time: '09:00 AM', location: 'Suceava Fortress, Main Enter', participants: '' },
      { img: './bg-4.png', title: 'Running for Life', body: 'Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.', date: '20.06.2020', time: '09:00 AM', location: 'Suceava Fortress, Main Enter', participants: '' },
      { img: './bg-5.png', title: 'Running for Life', body: 'Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.', date: '20.06.2020', time: '09:00 AM', location: 'Suceava Fortress, Main Enter', participants: '' }
    ]

  }

  render() {

    return (
      <div className="App" >

        <Header title={this.state.headers[0]}></Header>
        <CoachTable coaches={this.state.coaches}></CoachTable>
        <EventComponent events={this.state.events} />
      </div>
    );
  }
}

export default App;
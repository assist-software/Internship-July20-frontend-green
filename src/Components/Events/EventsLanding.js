import React, { Component } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import EventsPage from "./EventsPage/EventComponent";
import Pagination from '../Common/Pagination/Pagination';
import './EventsPage/Event.css';


class EventsLanding extends Component {
  state = {
    events:
      [
        {
          id: 0,
          img: "./bg-1.png",
          title: "Running for Life - now",
          body:
            "Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.",
          date: "20.06.2020",
          time: "09:00 AM",
          location: "Suceava Fortress, Main Enter",
          participants: "13",
          currentState: 'ongoing'
        },
        {
          id: 1,
          img: "./bg-2.png",
          title: "Running for Life - part 2 this summer",
          body:
            "Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.",
          date: "20.06.2020",
          time: "09:00 AM",
          location: "Suceava Fortress, Main Enter",
          participants: "256",
          currentState: 'future'
        },
        {
          id: 2,
          img: "./bg-3.png",
          title: "Running for Life",
          body:
            "Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.",
          date: "20.06.2020",
          time: "09:00 AM",
          location: "Suceava Fortress, Main Enter",
          participants: "1234",
          currentState: 'ongoing'

        },
        {
          id: 3,
          img: "./bg-4.png",
          title: "Running for Life",
          body:
            "Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.",
          date: "20.06.2020",
          time: "09:00 AM",
          location: "Suceava Fortress, Main Enter",
          participants: "14",
          currentState: 'past'

        },
        {
          id: 4,
          img: "./bg-5.png",
          title: "Running for Life",
          body:
            "Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.",
          date: "20.06.2020",
          time: "09:00 AM",
          location: "Suceava Fortress, Main Enter",
          participants: "111",
          currentState: 'past'
        }
      ]
  };

  // componentDidMount() {
  //   axios.get('/events')
  //     .then(response => {
  //       this.setState({ events: response.data });
  //       console.log(response);
  //     });
  // }


  render() {

    if (localStorage.getItem("token")) {
      console.log("Already logged in!");
      return (
        <div style={{ padding: '60px 40px' }}>
          <Header title="Events" />

          <div className="eventsFilter">
            <button
              className="activeFilter">
              Ongoing<span> ({this.state.events.length})</span>
            </button>
            <button value="Future">Future</button>
            <button>Past</button>
          </div>

          <EventsPage events={this.state.events} />

          <Pagination />


        </div>
      );
    } else {
      console.log("Please log in!");
      return <Redirect to={{ pathname: "/login" }} />;
    }
  }
}

export default EventsLanding;

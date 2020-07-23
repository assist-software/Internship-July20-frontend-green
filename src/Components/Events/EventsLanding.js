import React, { Component } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { withRouter } from "react-router-dom";
import EventsPage from "./EventsPage/EventComponent";
import Pagination from '../Common/Pagination/Pagination';
import './EventsPage/Event.css';


class EventsLanding extends Component {
  state = {
    singleEvents: [
      {
        "event-title": "Running For Life",
        "event-date": "20.06.2020",
        "event-time": "09:00 AM",
        "event-place": "Suceava Fortress, Main Enter",
        "article-title": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.",
        "article-body": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.",
        "participants": [
          {
            "img": "",
            "name": "Harold Howard",
            "gender": "male",
            "age": "22"
          },
          {
            "img": "",
            "name": "Regina Cooper",
            "gender": "female",
            "age": "22"
          },
          {
            "img": "",
            "name": "Brandon Wilson",
            "gender": "male",
            "age": "22"
          },
          {
            "img": "",
            "name": "Shane Black",
            "gender": "male",
            "age": "22"
          }
        ]
      },
      {
        "event-title": "Running For Life - part 2",
        "event-date": "20.06.2025",
        "event-time": "33:00 AM",
        "event-place": "Suceava Fortress",
        "article-title": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.",
        "article-body": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.",
        "participants": [
          {
            "img": "",
            "name": "Harold Howard",
            "gender": "male",
            "age": "123"
          },
          {
            "img": "",
            "name": "Shane Black",
            "gender": "male",
            "age": "2"
          }
        ]
      },
      {
        "event-title": "Event no. 3",
        "event-date": "20.06.2025",
        "event-time": "77:00 AM",
        "event-place": "Suceava Fortress",
        "article-title": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut.",
        "article-body": "Est amet incididunt proident proident ipsum incididunt non sint cillum amet ullamco proident ut. Consectetur irure quis adipisicing occaecat eiusmod esse nostrud mollit et. Excepteur anim aliquip consequat sint ad ut enim mollit. Amet esse adipisicing aute reprehenderit labore enim exercitation. Dolor laboris irure exercitation elit. Labore labore pariatur deserunt Lorem veniam Lorem incididunt labore sint. Ut laboris ex in nostrud irure fugiat duis nisi non deserunt et. Labore sunt culpa cupidatat non irure duis ipsum nulla dolor in ipsum sint aliqua. Labore ipsum adipisicing id aliquip id qui duis. Laborum ut consectetur esse aliquip anim consectetur dolore mollit anim quis consequat anim proident.",
        "participants": [
          {
            "img": "",
            "name": "Harold Howard",
            "gender": "male",
            "age": "123"
          },
          {
            "img": "",
            "name": "Regina Cooper",
            "gender": "female",
            "age": "142"
          },
          {
            "img": "",
            "name": "Shane Black",
            "gender": "male",
            "age": "2"
          }
        ]
      }
    ],
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
  componentDidMount() {
    axios.get("/events").then((response) => {
      this.setState({ events: response.data });
      console.log(response, "respoonseeeee");
    });
  }

  // componentDidMount() {
  //   axios.get('/events')
  //     .then(response => {
  //       this.setState({ events: response.data });
  //       console.log(response);
  //     });
  // }



  render() {
    let events = <Spinner />;
    if (this.state.events) {
      events = <EventsPage events={this.state.events} />;
    }
    if (localStorage.getItem("token")) {
      console.log("Already logged in!");
      return (
        <div style={{ padding: "60px 40px" }}>
          <Header title="Events" />

          <div className="eventsFilter">
            <button className="activeFilter">
              Ongoing
              <span>
                {" "}
                ({this.state.events ? this.state.events.length : null})
              </span>
            </button>
            <button value="Future">Future</button>
            <button>Past</button>
          </div>

          {events}

          <Pagination />
        </div>
      );
    } else {
      localStorage.clear();
      console.log("logout Success")
      this.props.history.push(`/login`)
    }
  }
}

export default withRouter(EventsLanding);

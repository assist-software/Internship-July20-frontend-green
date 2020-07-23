import React, { Component } from "react";
import Header from "../Header/Header";
import "./EventsPage/Event.css";
import Pagination from "../Common/Pagination/Pagination";
import axios from "../../axios";
import Spinner from "../Common/LoadingSpinner/Spinner";
import EventsPage from "../Events/EventsPage/EventComponent";
import { Redirect } from "react-router-dom";

class EventsLanding extends Component {
  state = {
    events: null,
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
      console.log("Please log in!");
      return <Redirect to={{ pathname: "/login" }} />;
    }
  }
}

export default EventsLanding;

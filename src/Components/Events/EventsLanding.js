import React, { Component } from "react";
import EventsPage from "./EventsPage/EventComponent";
import Header from "../Header/Header";
import "./EventsPage/Event.css";
import Pagination from "../Common/Pagination/Pagination";
import axios from "../../axios";
import Spinner from "../Common/LoadingSpinner/Spinner";

class EventsLanding extends Component {
  state = {
    events: null,
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios.get("/events").then((response) => {
      this.setState({ events: response.data });
      console.log(response, "respoonseeeee");
      this.setState({ loading: false });
    });
  }

  render() {
    let events = <Spinner />;
    if (this.state.events) {
      events = <EventsPage events={this.state.events} />;
    }
    return (
      <div style={{ padding: "60px 40px" }}>
        <Header title="Events" />

        <div className="eventsFilter">
          <p className="activeFilter">
            Ongoing (
            <span>{this.state.events ? this.state.events.length : null}</span>)
          </p>
          <p>Future</p>
          <p>Past</p>
        </div>
        {events}

        <Pagination />
      </div>
    );
  }
}

export default EventsLanding;

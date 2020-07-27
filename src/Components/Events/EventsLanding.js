import React, { Component } from "react";
import Header from "../Header/Header";
import axios from "../../axios";
import { withRouter } from "react-router-dom";
import EventsPage from "./EventsPage/EventComponent";
import Pagination from "../Common/Pagination/Pagination";
import "./EventsPage/Event.css";
import Spinner from "../Common/LoadingSpinner/Spinner";

class EventsLanding extends Component {
  state = {
    events: null,
  };
  componentDidMount() {
    axios.get("/events").then((response) => {
      console.log(response, "respoonsEvents");
      this.setState({ events: response.data });
    });
  }

  render() {
    let events = <Spinner />;
    if (this.state.events) {
      events = (
        <EventsPage
          events={this.state.events}
          // eventPages={this.state.singleEvents}
        />
      );
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
      console.log("logout Success");
      this.props.history.push(`/login`);
    }
  }
}

export default withRouter(EventsLanding);

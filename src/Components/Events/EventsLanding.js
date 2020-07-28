import React, { Component } from "react";
import Header from "../Header/Header";
import axios from "axios";
// import axios from "../../axios";
import { withRouter } from "react-router-dom";
import EventsPage from "./EventsPage/EventComponent";
import Pagination from "../Common/Pagination/Pagination";
import "./EventsPage/Event.css";
import Spinner from "../Common/LoadingSpinner/Spinner";

const token = localStorage.getItem("token");

class EventsLanding extends Component {
  state = {
    showOngoing: [true, "activeFilter"],
    showFuture: [false, ""],
    showPast: [false, ""],
    events: null,
    specifiedEvents: null,
  };

  componentDidMount() {
    axios
      .get(
        // "/events"
        "http://192.168.149.51:8001/api/events/20/1/",
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "respoonsEvents");
        this.setState({
          events: response.data,
          specifiedEvents: response.data,
        });
        this.checkDate(0);
      });
  }

  checkDate = (tense) => {
    const events = this.state.events;
    let ongoingEvents = events.filter((event) => event.tense == "ongoing");
    let futureEvents = events.filter((event) => event.tense == "future");
    let pastEvents = events.filter((event) => event.tense == "past");

    if (tense == 0) {
      this.setState({ specifiedEvents: ongoingEvents });
    } else if (tense == 1) {
      this.setState({ specifiedEvents: futureEvents });
    } else if (tense == 2) {
      this.setState({ specifiedEvents: pastEvents });
    }
  };

  showOngoing = (event) => {
    this.setState({
      showOngoing: [true, "active-btn"],
      showFuture: [false, ""],
      showPast: [false, ""],
    });
    event.target.className = this.state.showOngoing[1];
    console.log("ongoing...");
    this.checkDate(0);
  };

  showFuture = (event) => {
    this.setState({
      showOngoing: [false, ""],
      showFuture: [true, "active-btn"],
      showPast: [false, ""],
    });
    event.target.className = this.state.showFuture[1];
    console.log("future...");
    this.checkDate(1);
  };

  showPast = (event) => {
    this.setState({
      showOngoing: [false, ""],
      showFuture: [false, ""],
      showPast: [true, "active-btn"],
    });
    event.target.className = this.state.showPast[1];
    console.log("past...");
    this.checkDate(2);
  };

  render() {
    let events = <Spinner />;
    if (this.state.specifiedEvents) {
      events = (
        <EventsPage
          events={this.state.specifiedEvents}
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
            <button
              onClick={(event) => this.showOngoing(event)}
              className={this.state.showOngoing[1]}
            >
              Ongoing
              {this.state.showOngoing[0] ? (
                <span>
                  (
                  {this.state.specifiedEvents
                    ? this.state.specifiedEvents.length
                    : null}
                  )
                </span>
              ) : null}
            </button>
            <button
              onClick={(event) => this.showFuture(event)}
              className={this.state.showFuture[1]}
            >
              Future
              {this.state.showFuture[0] ? (
                <span>
                  (
                  {this.state.specifiedEvents
                    ? this.state.specifiedEvents.length
                    : null}
                  )
                </span>
              ) : null}
            </button>
            <button
              onClick={(event) => this.showPast(event)}
              className={this.state.showPast[1]}
            >
              Past
              {this.state.showPast[0] ? (
                <span>
                  (
                  {this.state.specifiedEvents
                    ? this.state.specifiedEvents.length
                    : null}
                  )
                </span>
              ) : null}
            </button>
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

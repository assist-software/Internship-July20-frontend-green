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
    events: null,
    showOngoing: [true, 'activeFilter'],
    showFuture: [false, ''],
    showPast: [false, '']
  };

  componentDidMount() {
    axios
      .get(
        // "/events"
        "http://192.168.149.51:8001/api/events/10/1/",
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "respoonsEvents");
        this.setState({ events: response.data });
      });
  }

  showOngoing = (event) => {
    this.setState({ showOngoing: [true, "active-btn"], showFuture: [false, ""], showPast: [false, ''] });
    event.target.className = this.state.showOngoing[1];
    console.log('ongoing...');
  }

  showFuture = (event) => {
    this.setState({ showOngoing: [false, ""], showFuture: [true, "active-btn"], showPast: [false, ''] });
    event.target.className = this.state.showFuture[1];
    console.log('ongoing...');

  }

  showPast = (event) => {
    this.setState({ showOngoing: [false, ""], showFuture: [false, ""], showPast: [true, 'active-btn'] });
    event.target.className = this.state.showPast[1];
    console.log('ongoing...');

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
            <button onClick={(event) => this.showOngoing(event)} className={this.state.showOngoing[1]}>
              Ongoing
              <span>({this.state.events ? this.state.events.length : null})</span>
            </button>
            <button onClick={(event) => this.showFuture(event)} className={this.state.showFuture[1]}>
              Future
              <span>({this.state.events ? this.state.events.length : null})</span>
            </button>
            <button onClick={(event) => this.showPast(event)} className={this.state.showPast[1]}>
              Past
              <span>({this.state.events ? this.state.events.length : null})</span>
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

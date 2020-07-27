import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Event.css";

class Event extends Component {
  state = {
    pageID: null,
    singleEvents: null,
  };

  goToPage = () => {
    console.log(this.props.id);
    this.props.history.push(`/event/${this.props.id}`);
  };

  componentDidMount() {
    const id = this.props.id;
    this.setState({ pageID: this.props.id });
  }

  render() {
    const { event } = this.props;
    console.log(this.props, "props events");
    return (
      <div className="Event">
        <div className="event-img" onClick={() => this.goToPage()}></div>

        <div className="event-body">
          <div className="wrapper">
            <h1 onClick={() => this.goToPage()}>{event.title}</h1>
            <p className="description">{event.body}</p>
            <div className="dateTime">
              <p>
                <img src={require("./img/calendar.png")} alt="" /> {event.date}
              </p>
              <p>
                <img src={require("./img/clock.png")} alt="" /> {event.time}
              </p>
              <br />
              <p>
                <img src={require("./img/pin.png")} alt="" /> {event.address}
              </p>
            </div>

            <div className="participants">
              <h1>{event.participants}</h1>

              <img src={require("./img/avatar-1.png")} alt="" />
              <img src={require("./img/avatar-2.png")} alt="" />
              <img src={require("./img/avatar-3.png")} alt="" />
              <img src={require("./img/avatar-4.png")} alt="" />

              <p>+{event.participants}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Event);

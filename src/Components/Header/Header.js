import React, { Component } from "react";
import "./Header.css";
import "../Common/Styles.css";
import { Button } from "semantic-ui-react";
import AddCoach from "../Coaches/AddCoach/AddCoach";
import AddEvent from "../Events/AddEvent/AddEvent";

class Header extends Component {
  state = {
    openAddCoach: false,
    openAddEvents: false,
  };
  openCoachModal = () => {
    this.setState({ openAddCoach: true });
  };
  closeCoachModal = () => {
    this.setState({ openAddCoach: false });
  };
  openEventsModal = () => {
    this.setState({ openAddEvents: true });
  };
  closeEventsModal = () => {
    this.setState({ openAddEvents: false });
  };
  render() {
    const currentRoute = window.location.pathname;
    return (
      <div className="Header">
        <h1 className="title">{this.props.title}</h1>

        <div className="addNew">
          <input type="text" placeholder="Input Placeholder" />
          <Button
            color="green"
            onClick={
              currentRoute.includes("coaches")
                ? this.openCoachModal
                : this.openEventsModal
            }
          >
            Add new
          </Button>
        </div>
        <AddCoach
          title="Add Coach"
          open={this.state.openAddCoach}
          openClick={this.openCoachModal}
          closeClick={this.closeCoachModal}
        />
        <AddEvent
          title="Add Event"
          open={this.state.openAddEvents}
          openClick={this.openEventsModal}
          closeClick={this.closeEventsModal}
        />
      </div>
    );
  }
}

export default Header;

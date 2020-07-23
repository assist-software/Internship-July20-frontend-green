import React, { Component } from "react";
import "./Header.css";
import "../Common/Styles.css";
import { Button } from "semantic-ui-react";
import AddCoach from "../Coaches/AddCoach/AddCoach";
import AddEvent from "../Events/AddEvent/AddEvent";
import AddClub from "../Clubs/AddClub/AddClub";
import AddAthlete from "../Athletes/AddAthlete/AddAthlete";

class Header extends Component {
  state = {
    openAddCoach: false,
    openAddEvents: false,
    openAddClub: false,
    openAddAthlete: false,
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
  openClubsModal = () => {
    this.setState({ openAddClub: true });
  };
  closeClubsModal = () => {
    this.setState({ openAddClub: false });
  };
  openAthleteModal = () => {
    this.setState({ openAddAthlete: true });
  };
  closeAthleteModal = () => {
    this.setState({ openAddAthlete: false });
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
                : currentRoute.includes("events")
                ? this.openEventsModal
                : currentRoute.includes("clubs")
                ? this.openClubsModal
                : currentRoute.includes("athletes")
                ? this.openAthleteModal
                : null
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
        <AddClub
          title="Add Club"
          open={this.state.openAddClub}
          openClick={this.openClubsModal}
          closeClick={this.closeClubsModal}
        />
        <AddAthlete
          title="Add Athlete"
          open={this.state.openAddAthlete}
          openClick={this.openAthleteModal}
          closeClick={this.closeAthleteModal}
        />
      </div>
    );
  }
}

export default Header;

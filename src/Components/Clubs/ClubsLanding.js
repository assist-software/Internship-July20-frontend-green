import React, { Component } from "react";
import Header from "../Header/Header";
import ClubsComponent from "./ClubsComponent/ClubsComponent";

class ClubsLanding extends Component {
  state = {
    clubs: [
      { title: "Biking Club", img: "", members: "132", coach: "Esther Wilson" },
      { title: "Club Biking", img: "", members: "12", coach: "Esther " },
      { title: "Biking Club", img: "", members: "5", coach: "Wilson" },
      { title: "Club Biking", img: "", members: "14", coach: "Esther Wilson" },
      { title: "Biking Club", img: "", members: "475", coach: "Wilson" },
      { title: "Club Biking", img: "", members: "523", coach: "Esther Wilson" }
    ]
  };

  render() {
      console.log(this.state.clubs)
    return (
      <div>
        <Header title="Clubs" />
        <ClubsComponent clubs={this.state.clubs} />
      </div>
    );
  }
}

export default ClubsLanding;

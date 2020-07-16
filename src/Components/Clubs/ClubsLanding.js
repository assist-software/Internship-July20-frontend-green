import React, { Component } from "react";
import Header from "../Header/Header";
import ClubsComponent from "./ClubsComponent/ClubsComponent";

class ClubsLanding extends Component {
  state = {
    events: [
      {
        img: "./bg-1.png",
        title: "Running for Life",
        body:
          "Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.",
        date: "20.06.2020",
        time: "09:00 AM",
        location: "Suceava Fortress, Main Enter",
        participants: "",
      },
      {
        img: "./bg-2.png",
        title: "Running for Life",
        body:
          "Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.",
        date: "20.06.2020",
        time: "09:00 AM",
        location: "Suceava Fortress, Main Enter",
        participants: "",
      },
      {
        img: "./bg-3.png",
        title: "Running for Life",
        body:
          "Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.",
        date: "20.06.2020",
        time: "09:00 AM",
        location: "Suceava Fortress, Main Enter",
        participants: "",
      },
      {
        img: "./bg-4.png",
        title: "Running for Life",
        body:
          "Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.",
        date: "20.06.2020",
        time: "09:00 AM",
        location: "Suceava Fortress, Main Enter",
        participants: "",
      },
      {
        img: "./bg-5.png",
        title: "Running for Life",
        body:
          "Ad enim sit commodo laborum mollit. Incididunt Lorem exercitation ad occaecat reprehenderit id.",
        date: "20.06.2020",
        time: "09:00 AM",
        location: "Suceava Fortress, Main Enter",
        participants: "",
      },
    ],
  };

  render() {
    return (
      <div>
        <Header title="Clubs" />
        <ClubsComponent clubs={this.state.clubs} />
      </div>
    );
  }
}

export default ClubsLanding;
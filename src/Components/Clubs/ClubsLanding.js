import React, { Component } from "react";
import Axios from '../../axios';
import Header from "../Header/Header";
import ClubsComponent from "./ClubsComponent/ClubsComponent";

class ClubsLanding extends Component {
  state = {
    clubs: null
  };

  componentDidMount() {
    Axios.get('/clubs')
      .then(response => {
        this.setState({ clubs: response.data });
        console.log(response);
      });

    render() {
      let clubs = <p>No clubs yet!</p>;
      if (this.state.clubs) {
        clubs = <ClubsComponent clubs={this.state.clubus} />;
      }
      return (
        <div>
          <Header title="Clubs" />
          {/* <ClubsComponent clubs={this.state.clubs} /> */}
          {clubs}
        </div>
      );
    }
  }

  export default ClubsLanding;

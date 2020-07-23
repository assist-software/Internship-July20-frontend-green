import React, { Component } from "react";
import Axios from '../../axios';
import Header from "../Header/Header";
import { withRouter } from 'react-router-dom';
import ClubsComponent from "./ClubsComponent/ClubsComponent";
import Pagination from '../Common/Pagination/Pagination';

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
  }

  render() {
    let clubs = <p>No clubs yet!</p>;
    if (this.state.clubs) {
      clubs = <ClubsComponent clubs={this.state.clubus} />;
    }

    if (localStorage.getItem("token")) {
      console.log("Already logged in!");
      return (
        <div style={{ padding: '60px 40px' }}>
          <Header title="Clubs" />
          {/* <ClubsComponent clubs={this.state.clubs} /> */}
          {clubs}
          <Pagination />
        </div>
      );
    } else {
      localStorage.clear();
      console.log("logout Success")
      this.props.history.push(`/login`)
    }
  };
};

export default withRouter(ClubsLanding);

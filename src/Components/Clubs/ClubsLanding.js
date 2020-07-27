import React, { Component } from "react";
import Axios from "axios";
import Header from "../Header/Header";
import { withRouter } from "react-router-dom";
import ClubsComponent from "./ClubsComponent/ClubsComponent";
import Pagination from "../Common/Pagination/Pagination";
import Spinner from "../Common/LoadingSpinner/Spinner";

const token = localStorage.getItem("token");
class ClubsLanding extends Component {
  state = {
    clubs: null,
  };

  componentDidMount() {
    Axios.get("http://192.168.149.51:8001/api/clubs/10/1/", {
      headers: {
        Authorization: `token ${token}`,
      },
    }).then((response) => {
      this.setState({ clubs: response.data });
      console.log(response);
    });
  }

  render() {
    let clubs = <Spinner />;
    if (this.state.clubs) {
      clubs = <ClubsComponent clubs={this.state.clubs} />;
    }

    if (localStorage.getItem("token")) {
      console.log("Already logged in!");
      return (
        <div style={{ padding: "60px 40px" }}>
          <Header title="Clubs" />
          {/* <ClubsComponent clubs={this.state.clubs} /> */}
          {clubs}
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

export default withRouter(ClubsLanding);

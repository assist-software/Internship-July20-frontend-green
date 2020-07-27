import React, { Component } from "react";
import Axios from "../../axios";
import Header from "../Header/Header";
import { withRouter } from "react-router-dom";
import ClubsComponent from "./ClubsComponent/ClubsComponent";
import Pagination from "../Common/Pagination/Pagination";
import Spinner from "../Common/LoadingSpinner/Spinner";

class ClubsLanding extends Component {
  state = {
    //   "clubs": [
    //     {
    //       "id": 1,
    //       "title": "Running club",
    //       "img": "",
    //       "members": "22",
    //       "coach": "Esther Wilson"
    //     },
    //     {
    //       "id": 2,
    //       "title": "Biking Club",
    //       "img": "",
    //       "members": "22",
    //       "coach": "Esther"
    //     },
    //     {
    //       "id": 3,
    //       "title": "Biking Club",
    //       "img": "",
    //       "members": "22",
    //       "coach": "Esther"
    //     },
    //     {
    //       "id": 4,
    //       "title": "Biking Club",
    //       "img": "",
    //       "members": "22",
    //       "coach": "Esther"
    //     },
    //     {
    //       "id": 5,
    //       "title": "Swimming club",
    //       "img": "",
    //       "members": "22",
    //       "coach": "Wilson"
    //     }
    //   ]
    clubs: null
  };

  componentDidMount() {
    Axios.get("http://192.168.149.51:8002/api/clubs/").then((response) => {
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
        <div style={{ padding: "60px 40px", }}>
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

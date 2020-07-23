import React, { Component } from "react";
import Axios from "../../axios";
import Header from "../Header/Header";
import ClubsComponent from "./ClubsComponent/ClubsComponent";
import Pagination from "../Common/Pagination/Pagination";
import Spinner from "../Common/LoadingSpinner/Spinner";

class ClubsLanding extends Component {
  state = {
    clubs: null,
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
    return (
      <div style={{ padding: "60px 40px" }}>
        <Header title="Clubs" />
        {clubs}
        <Pagination />
      </div>
    );
  }
}

export default ClubsLanding;

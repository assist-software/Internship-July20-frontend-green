import React, { Component } from "react";
import Athletes from "./Athletes";
import Axios from "../../../axios";
import Pagination from "../../Common/Pagination/Pagination";
import Spinner from "../../Common/LoadingSpinner/Spinner";
import Header from "../../Header/Header";

import "./AthletesPage.css";

class athletesComponent extends Component {
  state = {
    members: null,
  };

  componentDidMount() {
    Axios.get("/members").then((response) => {
      this.setState({ members: response.data });
      console.log(response);
    });
  }

  render() {
    let athletes = <Spinner />;
    if (this.state.members) {
      athletes = <Athletes members={this.state.members} />;
    }
    return (
      <div className="ClubPage" id="AthletesWrapper">
        <Header title="Athletes" />

        <div className="clubMembers">{athletes}</div>

        <Pagination></Pagination>
      </div>
    );
  }
}

export default athletesComponent;

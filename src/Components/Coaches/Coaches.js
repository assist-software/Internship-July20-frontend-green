import React, { Component } from "react";
import CoachTable from "./CoachesTable/CoachTable";
import Header from "../Header/Header";
import Axios from "../../axios";
import Pagination from "../Common/Pagination/Pagination";

import "./CoachesTable/CoachTable.css";

class Coaches extends Component {
  state = {
    coaches: null,
  };

  componentDidMount() {
    Axios.get("/coaches").then((response) => {
      this.setState({ coaches: response.data });
      console.log(response);
    });
  }
  render() {
    let coaches = <p>No coaches yet!</p>;
    if (this.state.coaches) {
      coaches = <CoachTable coaches={this.state.coaches} />;
    }
    return (
      <div style={{ padding: "60px 40px" }}>
        <Header title="Coaches" />
        {coaches}

        <Pagination />
      </div>
    );
  }
}

export default Coaches;

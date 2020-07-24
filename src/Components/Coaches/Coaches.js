import React, { Component } from "react";
import CoachTable from "./CoachesTable/CoachTable";
import Header from "../Header/Header";
import { Redirect } from "react-router-dom";
import Pagination from "../Common/Pagination/Pagination";
import "./CoachesTable/CoachTable.css";
import Spinner from "../Common/LoadingSpinner/Spinner";

import axios from "axios";

class Coaches extends Component {
  state = {
    coaches: null,
  };

  componentDidMount() {
    axios
      .get(
        "http://192.168.149.51:8002/api/coach/"
        //  {pageNr:1, pageSize:10}
      )
      .then((response) => {
        console.log(response, "response");
        axios
          .get(
            "http://192.168.149.51:8002/api/coach/clubs/" +
              response.data.id +
              "/"
          )
          .then((res) => {
            console.log("teeext");
            console.log(res, "rees");
          });

        this.setState({ coaches: response.data });
        console.log(response, "respoonseeeee");
      });
  }
  render() {
    let coaches = <Spinner />;
    if (this.state.coaches) {
      coaches = <CoachTable coaches={this.state.coaches} />;
    }

    if (localStorage.getItem("token")) {
      console.log("Already logged in!");
      return (
        <div style={{ padding: "60px 40px" }}>
          <Header title="Coaches" />
          {coaches}

          <Pagination />
        </div>
      );
    } else {
      console.log("Please log in!");
      return <Redirect to={{ pathname: "/login" }} />;
    }
  }
}

export default Coaches;

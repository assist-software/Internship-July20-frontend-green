import React, { Component } from "react";
import CoachTable from "./CoachesTable/CoachTable";
import Header from "../Header/Header";
import Axios from "../../axios";
import { withRouter } from "react-router-dom";
import Pagination from "../Common/Pagination/Pagination";
import "./CoachesTable/CoachTable.css";
import Spinner from "../Common/LoadingSpinner/Spinner";
import axios from "axios";

const token = localStorage.getItem("token");
class Coaches extends Component {
  state = {
    coaches: null,
  };

  componentDidMount() {
    console.log(token, "coach token");
    axios
      .get(
        "http://192.168.149.51:8001/api/coach/10/1/",
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
        //  {pageNr:1, pageSize:10}
      )
      .then((response) => {
        // axios
        //   .get(
        //     "http://192.168.149.51:8001/api/coach/clubs/" +
        //       response.data.id +
        //       "/"
        //   )
        //   .then((res) => {
        //     console.log("teeext");
        //     console.log(res, "rees");
        //   });

        this.setState({ coaches: response.data });
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
      localStorage.clear();
      console.log("logout Success");
      this.props.history.push(`/login`);
      return console.log("LogOut");
    }
  }
}

export default withRouter(Coaches);

import React, { Component } from "react";
import CoachTable from "./CoachesTable/CoachTable";
import Header from "../Header/Header";
import Axios from '../../axios';
import { withRouter } from 'react-router-dom';
import Pagination from '../Common/Pagination/Pagination'
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
      localStorage.clear();
      console.log("logout Success");
      this.props.history.push(`/login`);
      return console.log("LogOut");
    };


  }
}

export default withRouter(Coaches);

import React, { Component } from "react";
import CoachTable from "./CoachesTable/CoachTable";
import Header from "../Header/Header";
import Axios from '../../axios';
import { withRouter } from 'react-router-dom';
import Pagination from '../Common/Pagination/Pagination'

import './CoachesTable/CoachTable.css';

class Coaches extends Component {
  state = {
    coaches: null
  };

  componentDidMount() {
    Axios.get('/coaches')
      .then(response => {
        this.setState({ coaches: response.data });
        console.log(response);
      });

  }
  render() {
    let coaches = <p>No coaches yet!</p>;
    if (this.state.coaches) {
      coaches = <CoachTable coaches={this.state.coaches} />;
    }


    if (localStorage.getItem("token")) {
      console.log("Already logged in!");
      return (
        <div style={{ padding: '60px 40px' }}>
          <Header title="Coaches" />
          {coaches}

          <Pagination />
        </div>
      );
    } else {
      localStorage.clear();
      console.log("logout Success")
      this.props.history.push(`/login`)
    };


  }
}

export default withRouter(Coaches);

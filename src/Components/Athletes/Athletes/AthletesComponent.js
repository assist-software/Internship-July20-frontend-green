import React, { Component } from 'react';
import Athletes from './Athletes';
import { withRouter } from 'react-router-dom';
import Axios from '../../../axios';
import Pagination from '../../Common/Pagination/Pagination'
import Spinner from "../../Common/LoadingSpinner/Spinner";
import Header from "../../Header/Header";
import "./AthletesPage.css";

class athletesComponent extends Component {
  state = {
    "members": [
      {
        "img": "",
        "name": "Dianne Robertson",
        "gender": "female",
        "age": "22",
        "primary": "Running",
        "secondary": "Biking"
      },
      {
        "img": "",
        "name": "Eduardo Miles",
        "gender": "male",
        "age": "22",
        "primary": "Biking",
        "secondary": "Running"
      },
      {
        "img": "",
        "name": "Lily Jones",
        "gender": "female",
        "age": "22",
        "primary": "Running",
        "secondary": "Biking"
      }
    ],
  };

  componentDidMount() {
    Axios.get("/members").then((response) => {
      this.setState({ members: response.data });
      console.log(response);
    });
  }


  render() {

    let members = this.state.members;

    if (localStorage.getItem("token")) {
      console.log("Already logged in!");
      let athletes = <Spinner />;
      if (this.state.members) {
        athletes = <Athletes members={this.state.members} />;
      }
      return (
        <div className="ClubPage" id="AthletesWrapper" >
          <Header title="Athletes" />

          <p className="club-title">Atheletes</p>

          <div className="filterAdd">
            <input type="text" placeholder="Input Placeholder (Case sensitive!!)" onChange={e => this.filterHandler(e.target.value)} />
            <button className="addBtn">Add new</button>
          </div>

          <div className="clubMembers">
            <Athletes members={members} />
          </div>

          <Pagination></Pagination>

        </div>
      );
    } else {
      localStorage.clear();
      console.log("logout Success")
      this.props.history.push(`/login`)
      return console.log("logout")
    }
  };
};

export default withRouter(athletesComponent);

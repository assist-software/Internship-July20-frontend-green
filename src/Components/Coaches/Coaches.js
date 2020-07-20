import React, { Component } from "react";
import CoachTable from "./CoachesTable/CoachTable";
import Header from "../Header/Header";
import Axios from '../../axios';

class Coaches extends Component {
  state = {
    coaches: null
  };
  
  componentDidMount () {
    Axios.get('/coaches')
    .then(response => {
      this.setState({coaches: response.data});
      console.log(response);
    });
    
  }
  render() {
    let coaches = <p>No coaches yet!</p>;
    if(this.state.coaches) {
      coaches =  <CoachTable coaches={this.state.coaches} />;
    }
    return (
      <div>
        <Header title="Coaches" />
       {coaches}
      </div>
    );
  }
}

export default Coaches;

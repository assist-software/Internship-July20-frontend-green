import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Clubs.css";

class Club extends Component {

  goToPage = () => {
    console.log(this.props.id);
    const id = this.props.id;
    id ? this.props.history.push(`/club/${this.props.id}/${this.props.title}/${this.props.coach}/`) : console.log('no-id');
    id ? console.log(id) : console.log('no-id');
  }

  render() {
    return (
      <div className="Club">
        <p
          className="c-title"
          onClick={() => this.goToPage()}>
          {this.props.title}
        </p>

        <p className="c-subtitle">Members</p>
        <div className="members">
          <img src={require("./img/avatar-1.png")} alt="" />
          <img src={require("./img/avatar-2.png")} alt="" />
          <img src={require("./img/avatar-3.png")} alt="" />
          <img src={require("./img/avatar-4.png")} alt="" />

          <p>+ {this.props.members}</p>
        </div>

        <p className="c-subtitle">Coach</p>
        <p className="c-coach">{this.props.coach}</p>
      </div>
    );
  }

};

export default withRouter(Club);

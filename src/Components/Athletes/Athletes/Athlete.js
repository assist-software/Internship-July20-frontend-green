import React, { Component } from "react";
import "./AthletesPage.css";

class Athlete extends Component {
  render() {
    const { member } = this.props;
    console.log(this.props.member, "member aici");
    return (
      <div className="Member">
        <div className="member-header">
          <img src={require("./img/avatar.png")} alt="" />
          <p className="p-name">
            {member.first_name} {member.last_name}{" "}
          </p>
          <p className="p-details">
            {member.gender == 0 ? "Male" : "Female"} <span>&#183;</span>{" "}
            {member.age} YEARS
          </p>
        </div>

        <div className="member-sports">
          <div className="primary-sport">
            <p>Primary sport</p>
            <p>{member.primary_sport.type}</p>
          </div>
          <div className="secondary-sport">
            <p>secondary sport</p>
            <p>{member.secondary_sport.type}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Athlete;

import React, { Component } from "react";
import "./Leftsidebar.css";
import { NavLink } from "react-router-dom";

class Butoane extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <NavLink to="/coaches" activeClassName="active" className="menuLink">
            <button className="btncoaches">Coaches</button>
          </NavLink>
          <NavLink to="/events" activeClassName="active" className="menuLink">
            <button className="btnevents">Events</button>
          </NavLink>
          <NavLink to="/clubs" activeClassName="active" className="menuLink">
            <button className="btnclubs">Clubs</button>
          </NavLink>
          <NavLink
            to="/athletes/"
            activeClassName="active"
            className="menuLink"
          >
            <button className="btnath ">Athletes</button>
          </NavLink>
        </div>

        <button className="btnlog" id="textlog">
          Logout
        </button>
      </div>
    );
  }
}
export default Butoane;

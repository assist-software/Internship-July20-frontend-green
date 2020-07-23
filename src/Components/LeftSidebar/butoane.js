import React, { Component } from "react";
import "./Leftsidebar.css";
import { NavLink } from "react-router-dom";

class Butoane extends Component {
  state = { active: false };
  handleActiveBtn = (e) => {
    let active = !this.state.active;
    this.setState({ active: active });
  };
  render() {
    return (
      <div>
        <div className="menu">
          <NavLink to="/coaches" activeClassName="active" className="menuLink">
            <button
              id={this.state.active ? "active" : ""}
              className="btncoaches"
              id="text"
              onClick={this.handleActiveBtn}
            >
              Coaches
            </button>
          </NavLink>
          <NavLink to="/events" activeClassName="active" className="menuLink">
            <button className="btnevents btn" id="text">
              Events
            </button>
          </NavLink>
          <NavLink to="/clubs" activeClassName="active" className="menuLink">
            <button className="btnclubs btn" id="text">
              Clubs
            </button>
          </NavLink>
          <NavLink to="/athletes" activeClassName="active" className="menuLink">
            <button className="btnath btn" id="text">
              Athletes
            </button>
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

import React from "react";
import "./Leftsidebar.css";
import { NavLink } from "react-router-dom";

const butoane = () => {
  return (
    <div>
      <div className="menu">
        <NavLink to="/coaches">
          <button className="btncoaches" id="text">
            <i className="icon"></i>Coaches
          </button>
        </NavLink>
        <NavLink to="/events">
          <button className="btnevents" id="text">
            Events
          </button>
        </NavLink>
        <NavLink to="/clubs">
          <button className="btnclubs" id="text">
            Clubs
          </button>
        </NavLink>
        <NavLink to="/athletes">
          <button className="btnath" id="text">
            Athletes
          </button>
        </NavLink>
      </div>

      <button className="btnlog" id="textlog">
        Logout
      </button>
    </div>
  );
};
export default butoane;

<<<<<<< HEAD
import React from 'react';
import './Leftsidebar.css';
const butoane =() =>
{
    return(
        
        <div className="menu2">
        <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
        </label>
        </div>
        
    );
}
export default butoane;
=======
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
>>>>>>> 674e71e56ee9ff3a9eab07dc7373d222c332a643

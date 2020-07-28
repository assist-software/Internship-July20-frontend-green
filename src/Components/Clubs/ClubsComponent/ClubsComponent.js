import React from "react";
import Clubs from "./Clubs";

import "./Clubs.css";

const clubsComponent = (props) => {
  return (
    <div className="ClubsComponent">
      <Clubs clubs={props.clubs} />
    </div>
  );
};

export default clubsComponent;

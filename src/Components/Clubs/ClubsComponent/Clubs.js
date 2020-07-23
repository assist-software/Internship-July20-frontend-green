import React from "react";
import Club from "./SingleClub";

import "./Clubs.css";

const clubs = (props) => {
  return props.clubs.map((club, index) => {
    return <Club title={club.name} img="X" members="X" coach="X" />;
  });
};

export default clubs;

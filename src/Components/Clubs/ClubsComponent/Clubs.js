import React from "react";
import Club from "./SingleClub";

import "./Clubs.css";

const clubs = (props) => {
  return props.clubs.map((club, index) => {
    return <Club id={club.id} title={club.title} img="X" members={club.members} coach={club.coach} />;
  });
};

export default clubs;

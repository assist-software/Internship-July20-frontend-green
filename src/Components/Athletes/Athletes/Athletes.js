import React from "react";
import Athlete from "./Athlete";

const athletes = (props) => {
  return props.members.map((member, index) => {
    return <Athlete member={member} />;
  });
};

export default athletes;

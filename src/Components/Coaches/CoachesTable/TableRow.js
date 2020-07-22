import React from "react";
import Row from "./Row";

import "./CoachTable.css";

const TableRow = (props) => {
  return props.coaches.map((coach, index) => {
    return (
      <Row
        key={coach.id}
        first_name={coach.fields.first_name}
        last_name={coach.fields.last_name}
        email={coach.fields.email}
        club={coach.fields.clubs}
        id={coach.id}
      />
    );
  });
};

export default TableRow;

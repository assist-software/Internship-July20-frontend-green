import React from "react";
import Row from "./Row";

import "./CoachTable.css";

const TableRow = (props) => {
  return props.coaches.map((coach, index) => {
    return <Row coach={coach} />;
  });
};

export default TableRow;

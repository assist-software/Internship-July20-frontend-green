import React from "react";
import Event from "./Event";

import "./Event.css";

const events = (props) => {
  return props.events.map((event, index) => {
    return <Event event={event} />;
  });
};

export default events;

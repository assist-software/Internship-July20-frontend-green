import React from "react";
import Event from "./Event";

import "./Event.css";

const events = (props) => {
  return props.events.map((event, index) => {
    console.log(event, "aici event");
    return <Event event={event} />;
  });
};

export default events;

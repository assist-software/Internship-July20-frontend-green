import React from "react";
import Events from "./Events";

import "./Event.css";

const EventComponent = (props) => {
  console.log(props.events, "events props");
  return (
    <div className="Events">
      <Events events={props.events}></Events>
    </div>
  );
};

export default EventComponent;

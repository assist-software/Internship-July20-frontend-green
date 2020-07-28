import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch } from "react-router-dom";

import Login from "./Components/Login/Login";
import Coaches from "./Components/Coaches/Coaches";
import EventsLanding from "./Components/Events/EventsLanding";
import EventPage from "./Components/Events/EventPage/EventPage";
import ClubsLanding from "./Components/Clubs/ClubsLanding";
import ClubPage from './Components/Clubs/ClubPage/ClubPage';
import AthletesLanding from "./Components/Athletes/Athletes/AthletesComponent";
import './App.css';

ReactDOM.render(

  <BrowserRouter>
    <React.StrictMode>
      <Switch className="Switch">
        <Route exact path="/login" component={Login} />

        <Layout className="Layout">
          <Route exact path="/coaches" component={Coaches} />
          <Route exact path="/" component={Coaches} />

          <Route exact path="/events" component={EventsLanding} />
          <Route exact path="/events/:id" component={EventPage} />

          <Route exact path="/clubs" component={ClubsLanding} />
          <Route exact path="/club/:id/:title/" component={ClubPage} />

          <Route exact path="/athletes" component={AthletesLanding} />

        </Layout>
      </Switch>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById("root")
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login'
import Coaches from './Components/Coaches/Coaches';
import EventsLanding from './Components/Events/EventsLanding';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <Switch>
         {/* <Route path="/login" component={Login} /> */}
        <Layout>
            <Route exact path="/" component={Login} />
            <Route path="/coaches" component={Coaches} />
            <Route path="/events" component={EventsLanding} />
        </Layout>
        </Switch>   
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

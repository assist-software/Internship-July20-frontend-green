import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import Login from './Components/Login/Login'
import Coaches from './Components/Coaches/CoachesTable/CoachTable';
import Events from './Components/Events/EventsPage/Events';


class App extends Component {



  render() {
    return (
      <div className="App">
         <Switch>
         {/* <Route path="/login" component={Login} /> */}
        <Layout>
            <Route exact path="/" component={Login} />
            <Route path="/coaches" component={Coaches} />
            <Route path="/events" component={Events} />
        </Layout>
        </Switch>   
      </div>
    );
  };
};

export default App;

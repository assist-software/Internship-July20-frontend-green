import React, { Component } from 'react';
//import Butoane from './Components/LeftSidebar/butoane';
import './App.css';
import LeftSidebar from '../src/Components/LeftSidebar/LeftSidebar';
//import Chart from '../src/chart'

class App extends Component {
  
  render() {
    return (
      <div className="App layout">
        <div>
          <LeftSidebar fullname={this.props.fullname} role={this.props.role} />
        </div>
        <div>
          {this.props.children}
        </div>

        

      </div>
    );
  };
};

export default App;

import React, { Component } from 'react';
import './App.css';
import LeftSidebar from '../src/Components/LeftSidebar/LeftSidebar';

class App extends Component {



  render() {
    return (
      <div className="App layout">  
      <div>
         <LeftSidebar />
      </div>
      <div>
         {this.props.children}
      </div>

      </div>
    );
  };
};

export default App;

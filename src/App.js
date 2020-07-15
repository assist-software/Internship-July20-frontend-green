import React, { Component } from 'react';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar';

import Coachtable from './Components/Coaches/CoachesTable/CoachTable';
import Butoane from './Components/LeftSidebar/butoane';
import TableRow from'./Components/Coaches/CoachesTable/TableRow';


import './App.css';

class App extends Component{
  

  render(){
    return (
    
       <div className="box">
         <div className="a">
        <LeftSidebar></LeftSidebar>
        <Butoane></Butoane>
        </div>

        <div className="b">
        <Coachtable ></Coachtable>
        <TableRow></TableRow>
        </div>
        
        
      </div>
    );
  };
};

export default App;

import React, { Component } from 'react';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar';
import Butoane from './Components/LeftSidebar/butoane';
import './App.css';
import Chart from './Components/Chart';
class App extends Component{
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield'],
        datasets:[
          {
            label:'Population',
            data:[
              217509,
              181045,
              153060
              
            ],
            backgroundColor:[
              'rgba(black)',
              'rgba(black)',
              'rgba(black)'
            ]
          }
        ]
      }
    });
  }
render() {
    return (
      <div className="App">
        <div className="box">
        <div id="main">
        </div>
        <div className="container"></div>
            <div className="a">
            <LeftSidebar></LeftSidebar>
            <Butoane></Butoane>
            </div>
            <div className="b">
            

            <div className="App">
             <div className="App-header">
              
                 <h2>Welcome to React</h2>
              </div>
              <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
            </div>





            </div>
      </div>
      </div>
    );
  };
};

export default App;

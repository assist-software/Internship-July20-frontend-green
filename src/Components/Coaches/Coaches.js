import React, { Component } from "react";
//import CoachTable from "./CoachesTable/CoachTable";
//import Header from "../Header/Header";
import Axios from '../../axios';
import { Redirect } from 'react-router-dom';
import Pagination from '../Common/Pagination/Pagination'

import './CoachesTable/CoachTable.css';
import { Checkbox } from "semantic-ui-react";

class Coaches extends Component {

  constructor(){
    super();
    this.state = {
      chartData:{},
      checked:false
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
        labels: ['Ronald', 'Wendy', 'Brandon', 'Evelyn'],
        datasets:[
          { 
            
            label :'Heart Rate',
            hidden: true,
            data:[
              105,
              120,
              110,
              130 
            ],
            backgroundColor:[
              'rgba(0,0,0)',
              'rgba(0,0,0)',
              'rgba(0,0,0)',
              'rgba(0,0,0)'
              
            ]
            
          },
            
            {
            label:'Calories', 
            hidden: true,
            data:[
              89,
              120,
              60,
              20
              
            ],
            backgroundColor:[
              'rgba(0,0,0)',
              'rgba(0,0,0)',
              'rgba(0,0,0)',
              'rgba(0,0,0)',
              'rgba(0,0,0)',
              'rgba(0,0,0)'
              
            ]
          },
          {
            label :'Av. Speed', 
            hidden: true,
            data:[
              70,
              80,
              90,
              100
              
            ],
            backgroundColor:[
              'rgba(0,0,0)',
              'rgba(0,0,0)',
              'rgba(0,0,0)',
               'rgba(0,0,0)'
            ]
          },
          {
            label :'Distance', 
            hidden: true,
            data:[
              11,
              40,
              56,20
              
            ],
            backgroundColor:[
              'rgba(0,0,0)',
              'rgba(0,0,0)',
              'rgba(0,0,0)',
              'rgba(0,0,0)'
            ]
          }
        ]
      }
    });
  }

 
  state = {
    coaches: null
  };

  componentDidMount() {
    Axios.get('/coaches')
      .then(response => {
        this.setState({ coaches: response.data });
        console.log(response);
      });
   
  }
  changeLegendHeart = (e, data) => 
  {
    this.setState((prevState) => ({ checkedHeart: !prevState.checkedHeart }))
    const{chartData} = this.state;
    let name = data.label;
    let chartDataNew = chartData.datasets.find(item => item.label === name );
    if(this.state.checkedHeart)
    {
    chartDataNew.hidden =true;
    }
    else{
      chartDataNew.hidden =false
    }
    this.setState({chartData})
  }
  changeLegendCalories = (e, data) => 
  {
    this.setState((prevState) => ({ checkedCalories: !prevState.checkedCalories }))
    const{chartData} = this.state;
    let name = data.label;
    let chartDataNew = chartData.datasets.find(item => item.label === name );
    if(this.state.checkedCalories)
    {
    chartDataNew.hidden =true;
   
    }


    if (localStorage.getItem("token")) {
      console.log("Already logged in!");
      return (
        <div style={{ padding: '60px 40px' }}>
          <Header title="Coaches" />
          {coaches}

          <Pagination />
        </div>
      );
    } else {
      console.log("Please log in!");
      return <Redirect to={{ pathname: "/login" }} />;

    };


  }
}

export default Coaches;

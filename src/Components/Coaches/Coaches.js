import React, { Component } from "react";
//import CoachTable from "./CoachesTable/CoachTable";
//import Header from "../Header/Header";
import Axios from '../../axios';
//import Pagination from '../Common/Pagination/Pagination'
import Chart from '../Charts/Chart'
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
    else{
      chartDataNew.hidden =false
    }
    this.setState({chartData})
  }
  changeLegendSpeed = (e, data) => 
  {
    this.setState((prevState) => ({ checkedSpeed: !prevState.checkedSpeed }))
    const{chartData} = this.state;
    let name = data.label;
    let chartDataNew = chartData.datasets.find(item => item.label === name );
    if(this.state.checkedSpeed)
    {
    chartDataNew.hidden =true;
    }
    else{
      chartDataNew.hidden =false
    }
    this.setState({chartData})
  }
  changeLegendDistance = (e, data) => 
  {
    this.setState((prevState) => ({ checkedDistance: !prevState.checkedDistance }))
    const{chartData} = this.state;
    let name = data.label;
    let chartDataNew = chartData.datasets.find(item => item.label === name );
    if(this.state.checkedDistance)
    {
    chartDataNew.hidden =true;
    }
    else{
      chartDataNew.hidden =false
    }
    this.setState({chartData})
  }
 
  render() {
    // let coaches = <p>No coaches yet!</p>;
    // if (this.state.coaches) {
    //   coaches = <CoachTable coaches={this.state.coaches} />;
    // }
    // console.log('chartDataNew', this.state.chartData)
    return (
      <div style={{ padding: '60px 40px' }}>
        {/* <Header title="Coaches" />
        {coaches}

        <Pagination /> */}
        <div className="App">
        <div className="App-header">
          <div>
          <h1>Select metrics you want to be compared</h1>
          <div className="ramabutoane">

              <Checkbox label="Heart Rate" name="Heart Rate"  onChange={this.changeLegendHeart} value={this.state.checkedHeart}/>

              <Checkbox label="Calories" name="Calories"  onChange={this.changeLegendCalories} value={this.state.checkedCalories}/>
              
              <Checkbox label="Av. Speed" name="Av. Speed"  onChange={this.changeLegendSpeed} value={this.state.checkedSpeed}/>

              <Checkbox label="Distance" name="Distance"  onChange={this.changeLegendDistance} value={this.state.checkedDistance}/>
            
          </div>

          </div>
          <h2>Graph</h2>
        </div>

        <Chart chartData={this.state.chartData} location="Participants" legendPosition="bottom"/>
      </div>
      </div>
    );
  }
}

export default Coaches;

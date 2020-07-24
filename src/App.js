import React, { Component } from "react";
import "./App.css";
import LeftSidebar from "../src/Components/LeftSidebar/LeftSidebar";
import Aux from "./Components/Common/Auxiliary";

class App extends Component {
  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: ["Boston", "Worcester", "Springfield"],
        datasets: [
          {
            label: "Population",
            data: [217509, 181045, 153060],
            backgroundColor: ["rgba(black)", "rgba(black)", "rgba(black)"],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="App layout">
        <div>
          {" "}
          <LeftSidebar fullname={this.props.fullname} role={this.props.role} />
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;

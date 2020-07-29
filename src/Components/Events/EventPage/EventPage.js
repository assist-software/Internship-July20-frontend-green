import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Participants from "./Participants";
import { Button, Checkbox } from "semantic-ui-react";
import "./EventPage.css";
import EditEvent from "../AddEvent/EditEvent";
import Chart from "./Chart";

import "./EventPage.css";

const token = localStorage.getItem("token");

class EventPage extends Component {
  state = {
    compare: false,
    btnClass: "btn-compare",
    btnText: "Compare Performance",
    pageID: null,
    arrayGraphic: [""],
    displayGraphic: false,
    event: null,
    singleEvents: null,
    members: null,
    openEditModal: false,
  };
  openEditModal = () => {
    this.setState({ openEditModal: true });
  };
  closeEditModal = () => {
    this.setState({ openEditModal: false });
  };

  componentDidMount() {
    const pageID = parseInt(this.props.match.params.id);
    this.setState({ pageID: pageID });
    console.log("page id: ", pageID);

    axios
      .get(`http://192.168.149.51:8001/api/events/${pageID}/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        this.setState({
          singleEvents: response.data.data,
          members: response.data.members,
        });
        console.log(response);
      });
    console.log(this.state.event);
  }

  compare = (e) => {
    const valid = this.state.compare;
    if (!valid) {
      this.setState({ btnClass: "btn-done", btnText: "Done", compare: true });
      console.log("you can compare");
      console.log(this.state.compare);
    } else {
      this.setState({
        btnClass: "btn-compare",
        btnText: "Compare Performance",
        compare: false,
        displayGraphic: false,
        event: null,
        singleEvents: null,
        members: null,

        // graphic
        chartData: {},
        checked: false,
      });
    }
  };

  componentWillMount() {
    this.getChartData();
  }

  componentDidMount() {
    const pageID = parseInt(this.props.match.params.id);
    this.setState({ pageID: pageID });
    console.log("page id: ", pageID);

    axios
      .get(`http://192.168.149.51:8001/api/events/${pageID}/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        this.setState({
          singleEvents: response.data.data,
          members: response.data.members,
        });
        console.log(response);
      });
    console.log(this.state.event);
  }

  showGraphic = (checked, id) => {
    //adding or removing checked to array
    console.log(checked, id);
    let checking = this.state.arrayGraphic;
    if (checked) {
      checking[id] = "1";
    } else {
      checking[id] = "0";
    }
    this.setState({ arrayGraphic: checking });

    //checking if there is a participant checked
    if (checking.includes("1")) {
      this.setState({ displayGraphic: true });
    } else {
      this.setState({ displayGraphic: false });
    }
  };

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: ["Ronald", "Wendy", "Brandon", "Dariu"],

        datasets: [
          {
            label: "Heart Rate",
            hidden: true,
            data: [105, 120, 110, 130],
            backgroundColor: "rgba(0,0,0)",
          },

          {
            label: "Calories",
            hidden: true,
            data: [89, 120, 60, 20],
            backgroundColor: "rgba(0,0,0)",
          },
          {
            label: "Av. Speed",
            hidden: true,
            data: [70, 80, 90, 100],
            backgroundColor: "rgba(0,0,0)",
          },
          {
            label: "Distance",
            hidden: true,
            data: [105, 120, 110, 130],
            backgroundColor: "rgba(0,0,0)",
          },
        ],
      },
    });
  }

  changeLegendHeart = (e, data) => {
    this.setState((prevState) => ({ checkedHeart: !prevState.checkedHeart }));
    const { chartData } = this.state;
    let name = data.label;
    let chartDataNew = chartData.datasets.find((item) => item.label === name);
    if (this.state.checkedHeart) {
      chartDataNew.hidden = true;
    } else {
      chartDataNew.hidden = false;
    }
    this.setState({ chartData });
  };
  changeLegendCalories = (e, data) => {
    this.setState((prevState) => ({
      checkedCalories: !prevState.checkedCalories,
    }));
    const { chartData } = this.state;
    let name = data.label;
    let chartDataNew = chartData.datasets.find((item) => item.label === name);
    if (this.state.checkedCalories) {
      chartDataNew.hidden = true;
    } else {
      chartDataNew.hidden = false;
    }
    this.setState({ chartData });
  };
  changeLegendSpeed = (e, data) => {
    this.setState((prevState) => ({ checkedSpeed: !prevState.checkedSpeed }));
    const { chartData } = this.state;
    let name = data.label;
    let chartDataNew = chartData.datasets.find((item) => item.label === name);
    if (this.state.checkedSpeed) {
      chartDataNew.hidden = true;
    } else {
      chartDataNew.hidden = false;
    }
    this.setState({ chartData });
  };
  changeLegendDistance = (e, data) => {
    this.setState((prevState) => ({
      checkedDistance: !prevState.checkedDistance,
    }));
    const { chartData } = this.state;
    let name = data.label;
    let chartDataNew = chartData.datasets.find((item) => item.label === name);
    if (this.state.checkedDistance) {
      chartDataNew.hidden = true;
    } else {
      chartDataNew.hidden = false;
    }
    this.setState({ chartData });
  };

  render() {
    if (localStorage.getItem("token")) {
      const iD = this.state.pageID;

      return (
        <div className="EventPage" style={{ backgroundColor: "#F9F9F9" }}>
          <header>
            <p>Events</p>
            <img src={require("./img/arrow-ios-right.png")} alt=""></img>
            <h1>
              {this.state.singleEvents ? this.state.singleEvents["name"] : null}
            </h1>
          </header>

          <div className="main-header">
            <p className="title">
              {this.state.singleEvents ? this.state.singleEvents["name"] : null}
            </p>
            <Button color="green" onClick={this.openEditModal}>
              Edit
            </Button>

            <div className="dateTime">
              <div>
                <p>
                  <img src={require("./img/calendar.png")} alt="" />{" "}
                  {this.state.singleEvents
                    ? this.state.singleEvents["date"]
                    : null}
                </p>
              </div>
              <div>
                <p>
                  <img src={require("./img/clock.png")} alt="" />{" "}
                  {this.state.singleEvents
                    ? this.state.singleEvents["time"]
                    : null}
                </p>
              </div>
              <div>
                <p>
                  <img src={require("./img/pin.png")} alt="" />{" "}
                  {this.state.singleEvents
                    ? this.state.singleEvents["location"]
                    : null}
                </p>
              </div>
            </div>
          </div>

          <div className="event-content">
            <div className="image-content"></div>

            <div className="text-content">
              <p className="title-content">
                {this.state.singleEvents
                  ? this.state.singleEvents["description1"]
                  : null}
              </p>
              <p>
                {this.state.singleEvents
                  ? this.state.singleEvents["description2"]
                  : null}
              </p>
            </div>
          </div>

          <div>
            <div className="eventParticipants">
              <button className={this.state.btnClass} onClick={this.compare}>
                {this.state.btnText}
              </button>
              <p className="p-title">
                Participants{" "}
                <span>
                  ({this.state.members ? this.state.members.length : null})
                </span>
              </p>
              <p className="p-select">
                Select participants you want to compare
              </p>
            </div>

            {this.state.members ? (
              <div className="Participants">
                {this.state.members ? (
                  <Participants
                    participants={this.state.members}
                    showGraphic={this.showGraphic}
                    compare={this.state.compare}
                  />
                ) : null}
              </div>
            ) : (
              <p>No participants</p>
            )}

            {this.state.displayGraphic ? (
              <div className="compareParticipants">
                <p className="p-select">
                  Select metrics you want to be compared
                </p>
                <div className="p-options">
                  <p className="p-option">
                    {" "}
                    <Checkbox
                      label="Heart Rate"
                      name="Heart Rate"
                      onChange={this.changeLegendHeart}
                      value={this.state.checkedHeart}
                    />
                  </p>
                  <p className="p-option">
                    {" "}
                    <Checkbox
                      label="Calories"
                      name="Calories"
                      onChange={this.changeLegendCalories}
                      value={this.state.checkedCalories}
                    />
                  </p>
                  <p className="p-option">
                    {" "}
                    <Checkbox
                      label="Av. Speed"
                      name="Av. Speed"
                      onChange={this.changeLegendSpeed}
                      value={this.state.checkedSpeed}
                    />
                  </p>
                  <p className="p-option">
                    {" "}
                    <Checkbox
                      label="Distance"
                      name="Distance"
                      onChange={this.changeLegendDistance}
                      value={this.state.checkedDistance}
                    />
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          {this.state.displayGraphic ? (
            <Chart
              chartData={this.state.chartData}
              location="Participants"
              legendPosition="bottom"
            />
          ) : null}
          <EditEvent
            title="Edit Event"
            open={this.state.openEditModal}
            openClick={this.openEditModal}
            closeClick={this.closeEditModal}
          />
        </div>
      );
    } else {
      localStorage.clear();
      console.log("logout Success");
      this.props.history.push(`/login`);
      return false;
    }
  }
}

export default withRouter(EventPage);

import React, { Component } from "react";
import { Button, Header, Modal, Form } from "semantic-ui-react";
import "../../Common/Styles.css";
import axios from "axios";
import { Dropdown } from "semantic-ui-react";

const token = localStorage.getItem("token");

class AddAthlete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athlete: {
        first_name: "",
        last_name: "",
        email: "",
        primary_sport: "",
        secondary_sport: "",
        gender: "",
        age: "",
        height: "",
        weight: "",
        club: "",
        img: "",
      },
      sportOptions: [],
      clubOptions: [],
    };
  }
  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
  };
  componentDidMount() {
    axios
      .get("http://192.168.149.51:8001/sports/", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        let obj = { ...response.data };

        for (let index in obj) {
          let id = obj[index].id;
          let text = obj[index].type;
          let newSport = {
            key: id,
            value: text,
            text: text,
          };

          let joined = this.state.sportOptions.concat(newSport);
          this.setState({ sportOptions: joined });
        }
      });
    //get clubs for dropdown
    axios
      .get("http://192.168.149.51:8001/api/clubs/", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        let obj = { ...response.data };

        for (let index in obj) {
          let id = obj[index].id;
          let text = obj[index].name;
          let newClub = {
            key: id,
            value: text,
            text: text,
          };

          let joined = this.state.clubOptions.concat(newClub);
          this.setState({ clubOptions: joined });
        }
      });
  }

  handleChange(event, data) {
    let athlete = this.state.athlete;

    if (data.name == "clubs") {
      let pickedOption = this.state.clubOptions.find(
        (o) => o.value === data.value
      );
      athlete[data.name] = pickedOption.key;
    } else if (data.name == "primary_sport" || data.name == "secondary_sport") {
      let pickedOption = this.state.sportOptions.find(
        (o) => o.value === data.value
      );
      athlete[data.name] = pickedOption.key;
    } else {
      athlete[data.name] = data.value;
    }

    this.setState({ athlete: athlete });
  }
  handleSubmit(event) {
    event.preventDefault();
    let athlete = this.state.athlete;
    console.log();

    axios
      .post("http://192.168.149.51:8001/api/coach/", athlete, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Modal
        closeIcon
        open={this.props.open}
        onOpen={this.onOpen}
        onClose={this.onClose}
        dimmer={true}
      >
        <Header content={this.props.title} />

        <Modal.Content>
          <form
            className="form-inputs"
            id="addAthlete"
            onSubmit={this.handleSubmit}
          >
            <p className="form-subtitle">General Information</p>
            <div className="grid-2-col">
              <div>
                <label for="name">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  // onChange={this.handleChange}
                />
              </div>
              <div>
                <label for="email">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                  // onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="grid-2-col">
              <div>
                <label for="primary-sport">Primary Sport</label>
                <Form.Dropdown
                  name="primary-sport"
                  type="text"
                  placeholder="Primary Sport"
                  required
                  selection
                  options={this.state.sportOptions}
                  // onChange={this.handleChange}
                />
              </div>
              <div>
                <label for="secondary-sport">Secondary Sport</label>
                <Form.Dropdown
                  name="secondary-sport"
                  type="text"
                  placeholder="Secondary Sport"
                  required
                  selection
                  options={this.state.sportOptions}
                  // onChange={this.handleChange}
                />
              </div>
            </div>

            <p className="form-subtitle">Personal Information</p>

            <div className="grid-2-col">
              <div>
                <label for="gender">Gender</label>
                <input
                  name="gender"
                  type="text"
                  placeholder="Gender"
                  required
                  // onChange={this.handleChange}
                />
              </div>
              <div>
                <label for="age">Age</label>
                <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  required
                  // onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="grid-2-col">
              <div>
                <label for="height">Height</label>
                <input
                  name="height"
                  type="number"
                  placeholder="Height"
                  required
                  // onChange={this.handleChange}
                />
              </div>
              <div>
                <label for="weight">Weight</label>
                <input
                  name="weight"
                  type="number"
                  placeholder="Weight"
                  required
                  // onChange={this.handleChange}
                />
              </div>
            </div>

            <Form.Dropdown
              label="Club Assign"
              name="clubs"
              options={this.state.clubOptions}
              selection
              placeholder="Club Assign"
              required
              // onChange={this.handleChange}
            />

            <label for="upload">Avatar Image</label>
            <input
              name="upload"
              type="file"
              placeholder="Upload File"
              required
            />
          </form>
        </Modal.Content>

        <Modal.Actions className="form-btns">
          <Button color="black">delete</Button>
          <Button color="red" onClick={this.onClose}>
            Cancel
          </Button>
          <Button color="green" type="submit" form="addAthlete">
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default AddAthlete;

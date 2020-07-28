import React, { Component } from "react";
import { Button, Header, Modal, Form, Dropdown } from "semantic-ui-react";
import "../../Common/Styles.css";
import axios from "axios";

const token = localStorage.getItem("token");

class AddClub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      club: {
        id: "",
        name: "",
        owner: "",
      },
      options: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
  };
  componentDidMount() {
    axios
      .get("http://192.168.149.51:8001/api/coach/", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        let obj = { ...response.data };

        for (let index in obj) {
          let id = obj[index].id;
          let name = obj[index].last_name;
          let newCoach = {
            key: id,
            text: name,
            value: id,
          };

          let joined = this.state.options.concat(newCoach);
          this.setState({ options: joined });
          console.log(this.state.options, "options aici");
        }
      });
  }
  handleChange(event) {
    let club = this.state.club;

    club[event.target.name] = event.target.value;

    console.log(event.target.name, event.target.value, "clubOwner");

    this.setState({ club: club });
    console.log(this.state.club, "stateeee");
  }
  handleChangeSelect(data) {
    let club = this.state.club;
    club[data.name] = data.value;
    this.setState({ club: club });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.club, "club pe submit aici");
    let club = this.state.club;
    axios
      .post("http://192.168.149.51:8001/api/clubs/", club, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    let { club } = this.state;
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
          <Form
            className="form-inputs"
            id="addCoach"
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              name="name"
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
              required
            />

            <Form.Dropdown
              label="Assign a Coach"
              name="coach"
              options={this.state.options}
              onChange={this.handleChangeSelect}
              selection
              placeholder="Pick a Coach"
              required
            />

            <div className="invite-members">
              <Button color="blue">invite members</Button>
              <p>(Optional)</p>
            </div>
          </Form>
        </Modal.Content>

        <Modal.Actions className="form-btns">
          <Button color="black">delete</Button>
          <Button color="red" onClick={this.onClose}>
            Cancel
          </Button>
          <Button color="green" type="submit" form="addCoach">
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default AddClub;

import React, { Component } from "react";
import { Button, Header, Modal, Form } from "semantic-ui-react";
import "../../Common/Styles.css";

class AddAthlete extends Component {
  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
  };
  render() {
    const options = [
      { key: 1, text: "Running Club", value: "Running Club" },
      { key: 2, text: "Biking Club", value: "Biking Club" },
    ];
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
          <form className="form-inputs">
            <p className="form-subtitle">General Information</p>
            <div className="grid-2-col">
              <div>
                <label for="name">Name</label>
                <input name="name" type="text" placeholder="Name" required />
              </div>
              <div>
                <label for="email">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>

            <div className="grid-2-col">
              <div>
                <label for="primary-sport">Primary Sport</label>
                <input
                  name="primary-sport"
                  type="text"
                  placeholder="Primary Sport"
                  required
                />
              </div>
              <div>
                <label for="secondary-sport">Secondary Sport</label>
                <input
                  name="secondary-sport"
                  type="text"
                  placeholder="Secondary Sport"
                  required
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
                />
              </div>
              <div>
                <label for="age">Age</label>
                <input name="age" type="number" placeholder="Age" required />
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
                />
              </div>
              <div>
                <label for="weight">Weight</label>
                <input
                  name="weight"
                  type="number"
                  placeholder="Weight"
                  required
                />
              </div>
            </div>

            <Form.Dropdown
              label="Club Assign"
              name="clubs"
              options={options}
              selection
              multiple
              placeholder="Club Assign"
              required
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
          <Button color="green">Add</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default AddAthlete;

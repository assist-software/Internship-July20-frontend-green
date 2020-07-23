import React, { Component } from "react";
import { Button, Header, Modal, Form } from "semantic-ui-react";
import "../../Common/Styles.css";

class AddEvent extends Component {
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
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Name" required />

            <div className="grid-2-col">
              <div>
                <label htmlFor="date">Date</label>
                <input
                  name="date"
                  type="date"
                  placeholder="Pick Date"
                  required
                />
              </div>
              <div>
                <label htmlFor="Time">Time</label>
                <input
                  name="time"
                  type="time"
                  placeholder="Pick Time"
                  required
                />
              </div>
            </div>

            {/* <label for="location">Location </label>
            <select
              name="location"
              type="select"
              placeholder="Location"
              required
            >
              <option value="clubX">Club X</option>
              <option value="clubY">Club Y</option>
            </select> */}

            <Form.Dropdown
              label="Club Assign"
              name="clubs"
              options={options}
              selection
              multiple
              placeholder="Club Assign"
              required
            />
            <label htmlFor="description">Description</label>
            <textarea
              rows="6"
              name="description"
              type="textarea"
              placeholder="Description"
              required
            />

            <div className="invite-members">
              <Button color="blue">invite members</Button>
              <p>(Optional)</p>
            </div>
            <label for="upload">Event Cover</label>
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
          <Button color="red">Cancel</Button>
          <Button color="green">Add</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default AddEvent;

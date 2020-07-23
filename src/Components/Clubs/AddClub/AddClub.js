import React, { Component } from "react";
import { Button, Header, Modal, Form } from "semantic-ui-react";
import "../../Common/Styles.css";

class AddClub extends Component {
  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
  };
  render() {
    const options = [
      { key: 1, text: "coach X", value: "coach X" },
      { key: 2, text: "coach Y", value: "coach Y" },
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
            <label for="name">Name</label>
            <input name="name" type="text" placeholder="Name" required />

            <Form.Dropdown
              label="Assign a Coach"
              name="coach"
              options={options}
              selection
              multiple
              placeholder="Pick a Coach"
              required
            />

            <div className="invite-members">
              <Button color="blue">invite members</Button>
              <p>(Optional)</p>
            </div>
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
export default AddClub;

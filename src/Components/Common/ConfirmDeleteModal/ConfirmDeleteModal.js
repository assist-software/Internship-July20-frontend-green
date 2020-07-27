import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import "../../Common/Styles.css";
import axios from "axios";

const token = localStorage.getItem("token");

class ConfirmDeleteModal extends Component {
  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
  };
  DeleteCoachHandler = (itemId) => {
    axios
      .delete(
        `http://192.168.149.51:8001/api/coach/${itemId}/`,
        // { params: { id: itemId } },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("success");
        // this.setState({ fields: fields });
      })
      .catch((err) => console.log(err));

    this.onClose();
  };

  render() {
    console.log(this.props, "delete props");
    return (
      <Modal
        closeIcon
        open={this.props.open}
        onOpen={this.onOpen}
        onClose={this.onClose}
        dimmer={true}
      >
        <Header content="Delete Coach" />

        <Modal.Content>
          <p>
            Are you sure you want to delete Coach{" "}
            {this.props.first_name + " " + this.props.last_name}? If you delete
            coach’s account, all data associated with this profile will be
            permanently deleted.
          </p>
        </Modal.Content>

        <Modal.Actions>
          <Button color="red" onClick={this.onClose}>
            cancel
          </Button>
          <Button
            color="green"
            onClick={() => this.DeleteCoachHandler(this.props.coach.id)}
          >
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ConfirmDeleteModal;

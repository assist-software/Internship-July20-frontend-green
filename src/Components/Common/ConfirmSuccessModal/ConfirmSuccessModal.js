import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import "../../Common/Styles.css";
import "./ConfirmSuccessModal.css";

class ConfirmSuccessModal extends Component {
  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
    window.location.reload(true);
  };

  render() {
    let modalContent = "";
    if (this.props.type == "club") {
      modalContent = (
        <Modal.Content id="delete-content">
          <p>
            New club:
            <strong> {this.props.name + " "}</strong>
            has been added.
          </p>
        </Modal.Content>
      );
    } else {
      modalContent = (
        <Modal.Content id="delete-content">
          <p>
            Athlete
            {" " + this.props.first_name + " " + this.props.last_name + " "}
            was added on the {this.props.clubs}.
          </p>
        </Modal.Content>
      );
    }
    return (
      <Modal
        closeIcon
        open={this.props.open}
        onOpen={this.onOpen}
        onClose={this.onClose}
        dimmer={true}
      >
        <div id="delete-modal">
          <Header
            id="delete-header"
            icon="check circle outline"
            content={this.props.title}
          />

          {modalContent}

          <Modal.Actions>
            <Button color="green" onClick={this.onClose}>
              Close
            </Button>
          </Modal.Actions>
        </div>
      </Modal>
    );
  }
}

export default ConfirmSuccessModal;

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

          <Modal.Content id="delete-content">
            <p>
              Athlete {this.props.first_name + " " + this.props.last_name + " "}
              was added on the {this.props.clubs}.
            </p>
          </Modal.Content>

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

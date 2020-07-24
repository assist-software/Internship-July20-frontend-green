import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import "../../Common/Styles.css";
import "./ConfirmSuccessModal.css";
import axios from "axios";

class ConfirmSuccessModal extends Component {
  state = {
    options: [],
  };
  componentDidMount() {
    axios.get("http://192.168.149.51:8002/api/clubs/").then((response) => {
      let obj = { ...response.data };
      console.log(obj, "the obj");
      for (let index in obj) {
        let id = obj[index].id;
        let text = obj[index].name;
        let newClub = {
          key: id,
          value: text,
          text: text,
        };

        let joined = this.state.options.concat(newClub);
        this.setState({ options: joined });
      }
    });
  }

  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
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

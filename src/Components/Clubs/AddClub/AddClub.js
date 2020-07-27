import React, { Component } from "react";
import { Button, Header, Modal, Form } from "semantic-ui-react";
import "../../Common/Styles.css";
import axios from "axios";

const token = localStorage.getItem("token");

class AddClub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      club: this.props.clubs,
      options: [],
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
  };
  componentDidMount() {
    axios
      .get("http://192.168.149.51:8001/api/coaches/", {
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
            value: name,
            owner: id,
          };

          let joined = this.state.options.concat(newCoach);
          this.setState({ options: joined });
        }
      });
  }
  render() {
    let { club } = this.state;
    return (
      <h1>text</h1>
      // <Modal
      //   closeIcon
      //   open={this.props.open}
      //   onOpen={this.onOpen}
      //   onClose={this.onClose}
      //   dimmer={true}
      // >
      //   <Header content={this.props.title} />

      //   <Modal.Content>
      //     <form className="form-inputs">
      //       <label for="name">Name</label>
      //       <input
      //         name="name"
      //         value={club.name}
      //         type="text"
      //         placeholder="Name"
      //         required
      //       />

      //       <Form.Dropdown
      //         label="Assign a Coach"
      //         name="coach"
      //         options={this.state.options}
      //         selection
      //         multiple
      //         placeholder="Pick a Coach"
      //         required
      //       />

      //       <div className="invite-members">
      //         <Button color="blue">invite members</Button>
      //         <p>(Optional)</p>
      //       </div>
      //     </form>
      //   </Modal.Content>

      //   <Modal.Actions className="form-btns">
      //     <Button color="black">delete</Button>
      //     <Button color="red" onClick={this.onClose}>
      //       Cancel
      //     </Button>
      //     <Button color="green">Add</Button>
      //   </Modal.Actions>
      // </Modal>
    );
  }
}
export default AddClub;

import React, { Component } from "react";
import { Button, Header, Modal, Form, Dropdown } from "semantic-ui-react";
import "../../Common/Styles.css";
import axios from "axios";
import Aux from "../../Common/Auxiliary";
import ConfirmSuccessModal from "../../Common/ConfirmSuccessModal/ConfirmSuccessModal";

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
      lastAdded: {},
      showConfirmModal: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
  };
  openConfirmModal = () => {
    this.setState({ showConfirmModal: true });
  };
  closeConfirmModal = () => {
    this.setState({ showConfirmModal: false });
    window.location.reload(true);
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
          let name = obj[index].first_name + " " + obj[index].last_name;
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
  handleChangeSelect(event, data) {
    let club = this.state.club;
    club.owner = data.value;
    this.setState({ club: club });
    console.log(this.state.club, "dataSelect");
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
      .then(function (response) {
        console.log("success");
      })
      .catch(function (error) {
        console.log(error);
      });
    let lastAdded = JSON.parse(JSON.stringify(club));

    this.setState({ lastAdded: lastAdded });
    this.onClose();
    this.openConfirmModal(); // open confirmation
  };
  render() {
    let { club } = this.state;
    return (
      <Aux>
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
            </form>
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

        <ConfirmSuccessModal
          title="Club Added"
          name={this.state.lastAdded.name}
          open={this.state.showConfirmModal}
          openClick={this.openConfirmModal}
          closeClick={this.closeConfirmModal}
          type={"club"}
        />
      </Aux>
    );
  }
}
export default AddClub;

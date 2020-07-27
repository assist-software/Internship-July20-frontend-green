import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import "../../Common/Styles.css";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";
import ConfirmSuccessModal from "../../Common/ConfirmSuccessModal/ConfirmSuccessModal";
import Aux from "../../Common/Auxiliary";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const token = localStorage.getItem("token");
const initialState = {
  fields: {
    first_name: "",
    last_name: "",
    email: "",
    clubs: "",
  },
  options: [],
  errors: {
    first_name: "",
    last_name: "",
    email: "",
    clubs: "",
  },
  showConfirmModal: false,
  lastAdded: {},
};
class AddCoach extends Component {
  constructor(props) {
    super(props);
    if (this.props.editMode) {
      this.state = {
        fields: this.props.coach,
        options: [],
        errors: {
          first_name: "",
          last_name: "",
          email: "",
          clubs: "",
        },
        showConfirmModal: false,
        lastAdded: {},
      };
    } else {
      this.state = JSON.parse(JSON.stringify(initialState));
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  openConfirmModal = () => {
    this.setState({ showConfirmModal: true });
  };
  closeConfirmModal = () => {
    this.setState({ showConfirmModal: false });
  };

  componentDidMount() {
    axios
      .get("http://192.168.149.51:8001/api/clubs/", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        let obj = { ...response.data };

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

  handleChange(event, data) {
    let fields = this.state.fields;

    if (data.name == "clubs") {
      let pickedOption = this.state.options.find((o) => o.value === data.value);
      // let value = data.name;
      // const id = this.state.options.map((option, index) => {
      //   if (value === option.value) {
      //     return option.key;
      //   }
      // });
      fields[data.name] = pickedOption.key;
      this.setState({ clubName: pickedOption.value });
    } else {
      fields[data.name] = data.value;
    }

    this.setState({ fields: fields });
  }
  deleteHandler = (event) => {
    document.getElementById("theform").reset();
    this.setState({ clubs: "" });
  };
  handleValidation() {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;

    //First Name
    if (!fields.first_name) {
      formIsValid = false;
      errors.first_name = "Cannot be empty";
    }

    if (typeof fields.first_name !== "undefined") {
      if (!fields.first_name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors.first_name = "Only letters";
      }
    }
    //Last Name
    if (!fields.last_name) {
      formIsValid = false;
      errors.last_name = "Cannot be empty";
    }

    if (typeof fields.last_name !== "undefined") {
      if (!fields.last_name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors.last_name = "Only letters";
      }
    }
    //Email
    if (!validEmailRegex.test(fields.email)) {
      formIsValid = false;
      errors.email = "Email is not valid";
    }
    //Select
    if (!fields.clubs) {
      formIsValid = false;
      errors.clubs = "Please pick a club";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.fields, "fields on submit");

    if (this.handleValidation()) {
      //post obj
      axios
        .post("http://192.168.149.51:8001/api/coach/", this.state.fields, {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then(function (response) {})
        .catch(function (error) {
          console.log(error);
        });
      let lastAdded = JSON.parse(JSON.stringify(this.state.fields));

      this.setState({ lastAdded: lastAdded });
      this.onClose(); //close form modal
      this.openConfirmModal(); // open confirmation

      console.log(initialState, "initial state");
      this.setState({
        errrors: initialState.errors,
        fields: initialState.fields,
      });
    } else {
      console.log("Form has errors.");
    }
  };

  render() {
    const { errors, fields } = this.state;

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
            <Form
              id="theform"
              className="form-inputs"
              onSubmit={this.handleSubmit}
              noValidate
            >
              <Form.Input
                label="First name"
                placeholder="First name"
                name="first_name"
                id="first_name"
                value={this.props.first_name}
                onChange={this.handleChange}
                type="text"
                required
                noValidate
                error={
                  errors.first_name.length > 0 && {
                    content: errors.first_name,
                    pointing: "below",
                  }
                }
              />

              <Form.Input
                label="Last name"
                placeholder="Last name"
                name="last_name"
                id="last_name"
                value={this.props.last_name}
                onChange={this.handleChange}
                type="text"
                required
                noValidate
                error={
                  errors.last_name.length > 0 && {
                    content: errors.last_name,
                    pointing: "below",
                  }
                }
              />

              <Form.Input
                id="email"
                name="email"
                // control={Input}
                label="Email"
                placeholder="test@test.com"
                value={this.props.email}
                onChange={this.handleChange}
                type="email"
                required
                noValidate
                error={
                  errors.email.length > 0 && {
                    content: errors.email,
                    pointing: "below",
                  }
                }
              />

              <Form.Dropdown
                label="Club Assign"
                name="clubs"
                selection
                options={this.state.options}
                onChange={this.handleChange}
                placeholder="Club Assign"
                defaultValue={this.state.clubs}
                value={this.state.clubs}
                required
                error={
                  errors.clubs.length > 0 && {
                    content: errors.clubs,
                    pointing: "below",
                  }
                }
              />
            </Form>
          </Modal.Content>
          <Modal.Actions className="form-btns">
            <Button color="black" onClick={this.deleteHandler}>
              delete
            </Button>
            <Button color="red" onClick={this.onClose}>
              Cancel
            </Button>
            <Button color="green" type="submit" value="submit" form="theform">
              Add
            </Button>
          </Modal.Actions>{" "}
        </Modal>

        <ConfirmSuccessModal
          title="Coach Added"
          first_name={this.state.lastAdded.first_name}
          last_name={this.state.lastAdded.last_name}
          clubs={this.state.clubName}
          open={this.state.showConfirmModal}
          openClick={this.openConfirmModal}
          closeClick={this.closeConfirmModal}
        />
      </Aux>
    );
  }
}
export default AddCoach;

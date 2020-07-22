import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import "../../Common/Styles.css";
import axios from "../../../axios";
import { Form, Input, TextArea, Select, Dropdown } from "semantic-ui-react";
import ConfirmSuccessModal from "../../Common/ConfirmSuccessModal/ConfirmSuccessModal";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
// const validateForm = (errors) => {
//   let valid = true;
//   Object.values(errors).forEach(
//     // if we have an error string set valid to false
//     (val) => val.length > 0 && (valid = false)
//   );
//   return valid;
// };
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
    // this.state = {};

    this.state = JSON.parse(JSON.stringify(initialState));

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  openConfirmModal = () => {
    this.setState({ showConfirmModal: true });
  };
  closeConfirmModal = () => {
    this.setState({ showConfirmModal: false });
  };

  componentWillMount() {
    axios.get("/clubs").then((response) => {
      let obj = { ...response.data };
      console.log(obj, "the obj");
      for (let index in obj) {
        let id = obj[index].id;
        let text = obj[index].title;
        let newClub = {
          key: id,
          value: text,
          text: text,
        };

        let joined = this.state.options.concat(newClub);
        this.setState({ options: joined });

        // this.setState({ options: [...this.state.options, newClub] });

        // this.setState({
        //   options: [{ value: id, text: text }],
        // });
      }
    });

    // this.setState({
    //   options: [
    //     { value: "1", text: "Biking Club" }, // value = id , text = title
    //     { value: "2", text: "Running Club" },
    //     { value: "3", text: "Climbing Club" },
    //   ],
    // });
    console.log(this.state.options, "optiooons");
  }

  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
  };

  handleChange(event, data) {
    let fields = this.state.fields;

    // fields[data.name] = data.options[data.value - 1].text;

    fields[data.name] = data.value;
    this.setState({ fields: fields });
  }
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
    if (!fields.clubs.length) {
      formIsValid = false;
      errors.clubs = "Please pick a club";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.handleValidation()) {
      //post obj
      axios
        .post("/coaches", this.state)
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
    console.log(this.state.lastAdded, "last added in state");
    console.log(this.state.fields, "state on submit");
    console.log(this.state.errors, "errors on submit");
  };

  render() {
    const { errors } = this.state;
    console.log(this.state.lastAdded.clubs, "cluuuuuubs");
    return (
      <div>
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
                multiple
                options={this.state.options}
                onChange={this.handleChange}
                placeholder="Club Assign"
                value={this.props.clubs}
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
            <Button color="black">delete</Button>
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
          clubs={this.state.lastAdded.clubs}
          open={this.state.showConfirmModal}
          openClick={this.openConfirmModal}
          closeClick={this.closeConfirmModal}
        />
      </div>
    );
  }
}
export default AddCoach;

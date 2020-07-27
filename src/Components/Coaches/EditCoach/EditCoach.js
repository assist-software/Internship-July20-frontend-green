import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import "../../Common/Styles.css";
import axios from "../../../axios";
import { Form } from "semantic-ui-react";
import Aux from "../../Common/Auxiliary";

const token = localStorage.getItem("token");

class EditCoach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: this.props.coach,
      options: [],
      errors: {
        first_name: "",
        last_name: "",
        email: "",
        clubs: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
    fields[data.name] = data.value;
    this.setState({ fields: fields });
  }
  deleteHandler = (event) => {
    document.getElementById("theform").reset();
    this.setState({ clubs: "" });
  };

  handleSubmit = (id) => {
    let fields = this.state.fields;
    // this.props.history.push("/fields");
    console.log(fields, "@fields pe submit");

    // axios
    //   .get(
    //     "http://192.168.149.51:8001/api/coach/clubs/" +
    //       response.data.id +
    //       "/"
    //   )
    //   .then((res) => {
    //     console.log("teeext");
    //     console.log(res, "rees");
    //   });

    // if (this.handleValidation()) {

    // axios
    //   .put(`http://192.168.149.51:8001/api/coach/${id}/`, fields, {
    //     headers: {
    //       Authorization: `token ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log("success");
    //     this.setState({ fields: fields });
    //   })
    //   .catch((err) => console.log(err));

    this.onClose(); //close form modal
  };

  render() {
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
              id="editform"
              className="form-inputs"
              onSubmit={this.handleSubmit(this.state.id)}
              noValidate
            >
              <Form.Input
                label="First name"
                placeholder="First name"
                name="first_name"
                id="first_name"
                value={this.state.fields.first_name}
                onChange={this.handleChange}
                type="text"
                required
                // noValidate
                // error={
                //   errors.first_name.length > 0 && {
                //     content: errors.first_name,
                //     pointing: "below",
                //   }
                // }
              />

              <Form.Input
                label="Last name"
                placeholder="Last name"
                name="last_name"
                id="last_name"
                value={this.state.fields.last_name}
                onChange={this.handleChange}
                type="text"
                required
                // noValidate
                // error={
                //   errors.last_name.length > 0 && {
                //     content: errors.last_name,
                //     pointing: "below",
                //   }
                // }
              />

              <Form.Input
                id="email"
                name="email"
                // control={Input}
                label="Email"
                placeholder="test@test.com"
                value={this.state.fields.email}
                onChange={this.handleChange}
                type="email"
                required
                // noValidate
                // error={
                //   errors.email.length > 0 && {
                //     content: errors.email,
                //     pointing: "below",
                //   }
                // }
              />

              <Form.Dropdown
                label="Club Assign"
                name="clubs"
                selection
                options={this.state.options}
                onChange={this.handleChange}
                placeholder="Club Assign"
                defaultValue={this.state.fields.clubs[0]}
                required
                // error={
                //   errors.clubs.length > 0 && {
                //     content: errors.clubs,
                //     pointing: "below",
                //   }
                // }
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
            <Button color="green" type="submit" value="submit" form="editform">
              Save
            </Button>
          </Modal.Actions>{" "}
        </Modal>
      </Aux>
    );
  }
}
export default EditCoach;

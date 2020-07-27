import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import "../../Common/Styles.css";
import axios from "../../../axios";
import { Form } from "semantic-ui-react";
import Aux from "../../Common/Auxiliary";

class EditCoach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        first_name: props.first_name,
        last_name: props.last_name,
        email: props.email,
        clubs: props.clubs,
      },
      id: props.id,
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
    axios.get("/clubs").then((response) => {
      let obj = { ...response.data };

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
    //   .put(`/coaches/${id}`, fields)
    //   .then((res) => {
    //     this.setState({ fields: res.data });
    //     this.props.history.push("/fields");
    //   })
    //   .catch((err) => console.log(err));

    // let lastAdded = JSON.parse(JSON.stringify(this.state.fields));

    // this.setState({ lastAdded: lastAdded });
    // this.onClose(); //close form modal
    // this.openConfirmModal(); // open confirmation

    // console.log(initialState, "initial state");
    // this.setState({
    //   errrors: initialState.errors,
    //   fields: initialState.fields,
    // });
    // } else {
    //   console.log("Form has errors.");
    // }
  };

  render() {
    // const { errors, fields } = this.state;

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
                multiple
                options={this.state.options}
                onChange={this.handleChange}
                placeholder="Club Assign"
                defaultValue={this.state.clubs}
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
            <Button color="green" type="submit" value="submit" form="theform">
              Save
            </Button>
          </Modal.Actions>{" "}
        </Modal>
      </Aux>
    );
  }
}
export default EditCoach;

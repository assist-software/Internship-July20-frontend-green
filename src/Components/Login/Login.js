import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Login.css";
import { Input, Icon, Button, Header, Modal } from "semantic-ui-react";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isSignedUp: true,
      type: "password",
      modalOpen: false,
      errors: {
        username: "",
      },
    };
    this.showHide = this.showHide.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username = validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };
  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input",
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://192.168.149.51:8001/user/signin/", this.state)
      .then((res) => {
        console.log(res.status, "aiciRes");
        if (res.status !== 200) {
          this.setState({ isSignedUp: false });
        }

        const token = res.data.token;
        localStorage.setItem("token", token);
        this.props.history.push(`/coaches`);
      })
      .catch((error) => {
        this.handleOpen();
        console.log(error, "error");
      });
  };

  render() {
    const { username, password, errors } = this.state;
    let errorModal = (
      <Modal
        closeIcon
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
        className="errorModal"
      >
        <Header icon="spy" content="Login Failed" />
        <Modal.Content>
          <h3 className="errorMessage">
            It seems like you're not registered. Please register first!
          </h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" className="gotIt" onClick={this.handleClose}>
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
    return (
      <div className="login-container">
        <div className="login">
          <div>{/* ---this is the first column - must be empty */}</div>
          <div className="login-data-container">
            <div className="login-text">
              <p>WELCOME</p>
              <h2>Login to your account</h2>
            </div>

            <form onSubmit={this.submitHandler} className="login-form">
              <label htmlFor="email">Email Address</label>
              {errors.username.length > 0 && (
                <span className="errorUsername">{errors.username}</span>
              )}
              <Input
                name="username"
                type="email"
                placeholder="enter your email"
                value={username}
                onChange={this.changeHandler}
                // noValidate
                // error={
                //   errors.username.length > 0 && {
                //     content: errors.username,
                //     pointing: "below",
                //   }
                // }
              />

              <label htmlFor="password">Password </label>
              <Input
                icon={<Icon name="eye" link onClick={this.showHide} />}
                placeholder="enter your password"
                name="password"
                type={this.state.type}
                value={password}
                onChange={this.changeHandler}
              />

              <input type="submit" value="Login" />
            </form>
          </div>
          <div>{/* this is the third column */}</div>
        </div>
        <div className="login-image">
          {/* <img src={loginImage} alt="sport-club-app" /> */}
        </div>
        {errorModal}
      </div>
    );
  }
}

export default withRouter(Login);

import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Login.css";
import { Input, Icon } from "semantic-ui-react";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isSignedUp: false,
      type: "password",
    };
    this.showHide = this.showHide.bind(this);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
      // axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({ isSignedUp: true });
        }

        const token = res.data.token;
        localStorage.setItem("token", token);
        this.props.history.push(`/coaches`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { username, password } = this.state;

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
              <Input
                name="username"
                type="email"
                placeholder="enter your email"
                value={username}
                onChange={this.changeHandler}
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
      </div>
    );
  }
}

export default withRouter(Login);

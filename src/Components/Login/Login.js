import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isSignedUp: false,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
              <label for="email">Email Address</label>
              <input
                name="username"
                type="email"
                placeholder="enter your email"
                value={username}
                onChange={this.changeHandler}
              />

              <label for="password">Password </label>
              <input
                name="password"
                type="text"
                placeholder="enter your password"
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuth } from "./actions/authAction";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  handleLogin() {
    console.log(this.props);
    const { dispatch, history } = this.props;
    dispatch(setAuth());
    history.push("/");
  }
  render() {
    return (
      <div>
        Login Page
        <button onClick={this.handleLogin.bind(this)}>Login</button>
      </div>
    );
  }
}
export default connect()(Login);

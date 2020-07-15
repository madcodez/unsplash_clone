import React, { useState } from "react";
import store from "./reducers/reducers";
import { setAuth, setUser } from "./actions/authAction";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({
    author: "",
    password: "",
  });
  const [notFound, setNotFound] = useState(true);
  let history = useHistory();
  function handleLogin(e) {
    //console.log(this.props);
    e.preventDefault();
    //const { dispatch, history } = this.props;
    const user = localStorage.getItem("user");
    if (login.author === JSON.parse(user)["author"]) {
      store.dispatch(setAuth());
      store.dispatch(setUser(login));
      history.push("/");
    }
    setNotFound(false);
    console.log("Please Register");
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  }
  if (notFound) {
    return (
      <form onSubmit={handleLogin}>
        <label htmlFor="author">
          <b>UserName</b>
        </label>
        <input
          type="text"
          placeholder="Enter User name"
          value={login.author}
          name="author"
          required
          onChange={handleChange}
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={login.password}
          required
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    );
  } else {
    return <h1>Please Signup</h1>;
  }
}

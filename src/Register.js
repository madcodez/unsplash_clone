import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Register() {
  let history = useHistory();
  const [reg, setReg] = useState({
    author: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(reg));
    history.push("/login");
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setReg({ ...reg, [name]: value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="author">
        <b>UserName</b>
      </label>
      <input
        type="text"
        placeholder="Enter User name"
        value={reg.author}
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
        value={reg.password}
        required
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

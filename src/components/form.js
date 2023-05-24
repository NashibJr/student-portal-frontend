import React, { useState } from "react";
import "../styles/pages.css";
import Input from "./input";
import heplerFunctions from "./helperFunctions";

const Form = ({ label, header }) => {
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // input attributes.
  const inputAttributes = [
    {
      type: "text",
      name: "username",
      value: state.username,
      placeholder: "Username",
    },
    {
      type: "password",
      name: "password",
      value: state.password,
      placeholder: "Password",
    },
  ];
  const canClick = state.username && state.password;

  return (
    <div className="container mt-5 form-content">
      <h1 className="text-center">XXX Sxhool</h1>
      <p className="h2 text-center mb-5">
        {header} <span className="text-success">{label}</span>
      </p>
      <form>
        {inputAttributes.map((attribute, index) => (
          <Input key={index} values={attribute} handleChange={handleChange} />
        ))}
        <button
          type="button"
          className="btn btn-success form-control mt-5 mb-5"
          onClick={heplerFunctions.handleLogin(state.username, state.password)}
          disabled={!canClick}
        >
          {label}
        </button>
      </form>
    </div>
  );
};

export default Form;

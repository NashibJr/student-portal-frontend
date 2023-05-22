import React, { useState } from "react";
import "../styles/pages.css";
import Input from "./input";

const Form = ({ label, handleSubmit }) => {
  const [state, setState] = useState({ username: "", email: "", password: "" });

  const handleChange = (event) => {
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // input attributes.
  const inputAttributes =
    label === "Login"
      ? [
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
        ]
      : [
          {
            type: "text",
            name: "username",
            value: state.username,
            placeholder: "Username",
          },
          {
            type: "email",
            name: "email",
            value: state.email,
            placeholder: "Email",
          },
          {
            type: "password",
            name: "password",
            value: state.password,
            placeholder: "Password",
          },
        ];

  return (
    <div className="container mt-5 form-content">
      <h1 className="text-center">XXX Sxhool</h1>
      <p className="h2 text-center mb-5">
        Are you an Admin? <span className="text-success">{label}</span>
      </p>
      <form>
        {inputAttributes.map((attribute, index) => (
          <Input key={index} values={attribute} handleChange={handleChange} />
        ))}
        <button
          type="button"
          className="btn btn-success form-control mt-5 mb-5"
          onClick={handleSubmit}
        >
          {label}
        </button>
      </form>
    </div>
  );
};

export default Form;

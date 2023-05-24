import React, { useState } from "react";
import Input from "../components/input";

const RegisterStudents = () => {
  const [state, setState] = useState({
    id: "",
    fullname: "",
    password: "123456",
    class_: "",
    address: "",
    house: "",
  });

  const attributes = [
    {
      type: "number",
      name: "id",
      value: state.id,
      placeholder: "Student number",
    },
    {
      type: "text",
      name: "fullname",
      value: state.fullname,
      placeholder: "Full names",
    },
    {
      type: "passsword",
      name: "password",
      value: state.password,
      placeholder: "Password!",
    },
    {
      type: "class_",
      name: "class_",
      value: state.class_,
      placeholder: "Class",
    },
    {
      type: "address",
      name: "address",
      value: state.address,
      placeholder: "Address",
    },
    { type: "house", name: "house", value: state.house, placeholder: "House" },
  ];

  // const postStudents=async()=>{}
  return (
    <div className="container mt-5 form-content">
      <h2>Register New Student</h2>
      <form className="mt-5">
        {attributes.map((attribute, index) => (
          <Input
            key={index}
            values={attribute}
            handleChange={(event) =>
              setState({ ...state, [event.target.name]: event.target.value })
            }
          />
        ))}
      </form>
      <div className="row  mt-5 mb-3">
        <div className="col-sm-7">
          <button type="button" className="btn btn-success w-100 mt-2">
            Register
          </button>
        </div>
        <div className="col-sm-5">
          <button type="button" className="btn btn-success w-100 mt-2">
            Back to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterStudents;
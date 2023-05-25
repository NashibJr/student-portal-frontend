import React, { useState } from "react";
import heplerFunctions from "../components/helperFunctions";
import RegisterAndUpload from "../components/registerAndUpolad";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await heplerFunctions.registerStudents(
      state.id,
      state.fullname,
      state.password,
      state.class_,
      state.address,
      state.house
    );
    alert(data.data.student.message);
    setState({
      id: state.id,
      fullname: "",
      password: "123456",
      class_: "",
      address: "",
      house: "",
    });
  };
  const canSubmit =
    state.id && state.fullname && state.class_ && state.house && state.address;

  return (
    <RegisterAndUpload
      label="Register New Student"
      attributes={attributes}
      handleSubmit={handleSubmit}
      handleChange={(event) =>
        setState({ ...state, [event.target.name]: event.target.value })
      }
      canSubmit={canSubmit}
    />
  );
};

export default RegisterStudents;

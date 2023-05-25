import React, { useState } from "react";
import Input from "./input";
import heplerFunctions from "./helperFunctions";
import Footer from "./footer";

const RegisterAdmin = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const attributes = [
    {
      type: "text",
      name: "username",
      value: state.username,
      placeholder: "Username",
    },
    { type: "email", name: "email", value: state.email, placeholder: "Email" },
    {
      type: "password",
      name: "password",
      value: state.password,
      placeholder: "Password",
    },
  ];

  const handleRegister = async () => {
    const data = await heplerFunctions.handleRegisterAdmin(
      state.username,
      state.email,
      state.password
    );
    setMessage(data.data.admin.message);
    setState({ email: "", password: "" });
  };

  const resetMessage = () => {
    setMessage("");
    setState({ username: "", email: "", password: "" });
  };

  const canSubmit = state.username && state.email && state.password;
  return (
    <div className="container m-5">
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#newadmin"
        onClick={resetMessage}
      >
        New Admin
      </button>
      <div
        className="modal fade"
        id="newadmin"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Register Admin
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                {attributes.map((attribute) => (
                  <Input
                    key={attribute.type}
                    values={attribute}
                    handleChange={(event) =>
                      setState({
                        ...state,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                ))}
              </form>
              <span className="text-success">{message}</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={resetMessage}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleRegister}
                disabled={!canSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default RegisterAdmin;

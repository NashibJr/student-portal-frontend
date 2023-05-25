import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";

const RegisterAndUpload = ({
  label,
  attributes,
  handleSubmit,
  handleChange,
  canSubmit,
}) => {
  return (
    <div className="container mt-5 form-content">
      <h2>{label}</h2>
      <form className="mt-5">
        {attributes.map((attribute, index) => (
          <Input key={index} values={attribute} handleChange={handleChange} />
        ))}
      </form>
      <div className="row  mt-5 mb-3">
        <div className="col-sm-7">
          <Button
            label="Register"
            handleSubmit={handleSubmit}
            disabled={!canSubmit}
          />
        </div>
        <div className="col-sm-5">
          <Button label="Back to dashboard" />
        </div>
      </div>
    </div>
  );
};

export default RegisterAndUpload;

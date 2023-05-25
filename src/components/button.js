import React from "react";

const Button = ({ label, handleSubmit, disabled }) => {
  return (
    <button
      type="button"
      className="btn btn-success w-100 mt-2"
      onClick={handleSubmit}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

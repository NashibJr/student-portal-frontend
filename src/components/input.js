import React from "react";

const Input = ({
  values: { type, name, value, placeholder },
  handleChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className="form-control mt-3"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;

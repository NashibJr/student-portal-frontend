import React from "react";

const Student = ({ image, name, class_, house }) => {
  return (
    <div>
      <img src={image} width="30px" height="20px" alt="" />
      <p className="h3">{name}</p>
      <p>{class_}</p>
      <p>
        <span className="fw-bold">{house}</span> house
      </p>
    </div>
  );
};

export default Student;

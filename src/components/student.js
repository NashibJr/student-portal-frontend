import React from "react";

const Student = ({ image, name, class_ }) => {
  return (
    <div className="student dashboard-content border p-3 d-flex flex-column">
      <img src={image} width="15%" height="50%" alt="" />
      <p className="h5">{name}</p>
      <p>{class_}</p>
    </div>
  );
};

export default Student;

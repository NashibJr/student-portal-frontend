import React from "react";
import arrow from "../icons/arrow.jpg";

const DashboardComponent = ({ values: { image, label, number, link } }) => {
  return (
    <div className="row p-3 mt-5 border dashboard-content">
      <div className="row row-1">
        <div className="col-sm-6">
          <img src={image} width="60%" height="70vh" alt="" />
        </div>
        <div className="col-sm-6 mt-2">
          <p className="h5">{label}</p>
          <p className="h2">{number}</p>
        </div>
      </div>
      <hr className="w-75"></hr>
      <div className="row border-2 w-100">
        <a href={link} className="nav-link dashboard-link">
          <img src={arrow} width="30px" height="20px" alt="" />
          View
        </a>
      </div>
    </div>
  );
};

export default DashboardComponent;

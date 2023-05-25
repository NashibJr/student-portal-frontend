import React from "react";
import { classes, links, profile, results, students } from "./constants";
import Link from "./linkList";
import Dropdown from "./dropdownLinks";
import "../styles/main.css";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success fixed-top p-3 nav-content">
      <div className="container-fluid">
        <a href="/home" className="navbar-brand head">
          School X
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto d-flex">
            {links.map((link) => (
              <Link
                key={link.label}
                label={link.label}
                route={link.route}
                anchorClassName="nav-link"
                listClassName="nav-item"
              />
            ))}
            <Dropdown dropdownItems={results} label="Results" />
            <Dropdown dropdownItems={students} label="Students" />
            <Dropdown dropdownItems={classes} label="Classes" />
            <Dropdown dropdownItems={profile} label="User" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

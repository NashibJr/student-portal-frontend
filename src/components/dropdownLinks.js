import React from "react";
import Link from "./linkList";

const Dropdown = ({ dropdownItems, label }) => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        className="nav-link dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
      >
        {label}
      </a>
      <ul className="dropdown-menu">
        {dropdownItems.map((item) => (
          <Link
            key={item.label}
            label={item.label}
            route={item.route}
            anchorClassName="dropdown-item"
          />
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;

import React from "react";

const Link = ({ label, route, listClassName, anchorClassName }) => {
  return (
    <li className={listClassName}>
      <a className={anchorClassName} href={route}>
        {label}
      </a>
    </li>
  );
};

export default Link;

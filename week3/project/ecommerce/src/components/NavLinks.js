import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/favorites">Favorties</Link>
      </li>
      <li>
        <Link to="/">Products</Link>
      </li>
    </ul>
  );
};

export default NavLinks;

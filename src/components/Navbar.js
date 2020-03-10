import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/">
            {" "}
            <img
              className="Logo"
              height="128px"
              src="/logo_KD.png"
              alt="KD"
            />{" "}
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

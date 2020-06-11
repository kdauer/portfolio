import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("navbar");
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
          <Link to="/about">{t("navbar:item.0")}</Link>
        </li>
        <li>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            {t("navbar:item.1")}
          </Link>
        </li>
        <li>
          <Link to="/contact">{t("navbar:item.2")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Copyright © 2020 Konstantin Dauer{" "}
        <Link
          to="https://github.com/kdauer"
          rel="noopener noreferrer"
          target="blank"
        >
          <img height="16px" src="/logo-github.svg" alt="github" />
        </Link>
        <Link
          to="https://linkedin.com/in/kdauer"
          rel="noopener noreferrer"
          target="blank"
        >
          <img height="16px" src="/logo-linkedin.svg" alt="linkedin" />
        </Link>
        <Link to="/privacypolicy">Datenschutz</Link>
        <Link to="/legalnotice">Impressum</Link>
      </p>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Copyright © 2020 Konstantin Dauer{" "}
        <a
          href="https://github.com/kdauer"
          rel="noopener noreferrer"
          target="blank"
        >
          <img height="16px" src="/logo-github.svg" alt="github" />
        </a>
        <a
          href="https://linkedin.com/in/kdauer"
          rel="noopener noreferrer"
          target="blank"
        >
          <img height="16px" src="/logo-linkedin.svg" alt="linkedin" />
        </a>
        <Link to="/privacypolicy">privacy policy</Link>
        <Link to="/legalnotice">legal notice</Link>
      </p>
    </div>
  );
}

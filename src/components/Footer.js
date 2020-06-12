import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");
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
        <Link to="/privacypolicy">{t("footer:privacypolicy")}</Link>
        <Link to="/legalnotice">{t("footer:legalnotice")}</Link>
      </p>
    </div>
  );
}

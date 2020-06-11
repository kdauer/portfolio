import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <div style={{ height: "100vh" }} className="Page">
      <h2 className="Intro">{t("home:intro")}</h2>
      <div className="container">
        <img width="50%" height="auto" src="/media.jpg" alt="media" />
        <h3>{t("home:content.title")}</h3>
        <div className="LinkDiv">
          <Link to="/projects" style={{ textDecoration: "none" }}>
            {t("home:content.text")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

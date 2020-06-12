import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetail";
import ContactForm from "./components/ContactForm";
import Impress from "./components/legalnotice";
import DSGVO from "./components/privacypolicy";
import Footer from "./components/Footer";
import vCard from "./components/vCard";
import { Switch, Route, Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation("translation", "cookie");
  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };
  return (
    <div className="App">
      <Navbar />
      <button type="button" onClick={() => changeLanguage("de")}>
        {t("translation:de")}
      </button>

      <button type="button" onClick={() => changeLanguage("en")}>
        {t("translation:en")}
      </button>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/contact" component={ContactForm} />
        <Route path="/legalnotice" component={Impress} />
        <Route path="/privacypolicy" component={DSGVO} />
        <Route path="/k" component={vCard} />
      </Switch>
      <div className="space"></div>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        {t("cookie:text")}{" "}
        <Link
          to="/privacypolicy"
          style={{ textDecoration: "none", color: "lightblue" }}
        >
          {t("cookie:privacypolicy")}
        </Link>{" "}
        <span style={{ fontSize: "10px" }}>{t("cookie:accept")}</span>
      </CookieConsent>
      <Footer />
    </div>
  );
};

export default App;

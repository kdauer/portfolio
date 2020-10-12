import React from "react";
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div className="About">
      <img width="100%" height="auto" src="/portrait.jpg" alt="me" />
      <h3>Konstantin Dauer - Full Stack Web Developer</h3>
      <p>
      {t("about:firstParagraph")}
      </p>
      <p>
      {t("about:secondParagraph")}
      </p>
      <p>
      {t("about:thirdParagraph")}
      </p>
      <p>
      {t("about:fourthParagraph")}
      </p>
      <p>
      {t("about:fivthParagraph")}
      </p>
      <p>
      {t("about:sixthParagraph")}
      </p>
      <p>
      {t("about:seventhParagraph")}
      </p>
    </div>
  );
};

export default About;

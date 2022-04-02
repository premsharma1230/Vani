import React from "react";
import HindiLogo from "../../assets/hindi.png";
import EnglishLogo from "../../assets/english.png";
import VaniLogo from "../../assets/vani.png";
import Classes from "./_appNavigation.module.scss";
import { Link } from "react-router-dom";

export default function LogogSection() {
  return (
    <Link to="/">
      <div className={Classes.mainContainer}>
        <div>
          <img
            src={HindiLogo}
            alt="vani publiction in hindi"
            width="52px"
            height="47px"
          />
        </div>
        <div className={Classes.vani}>
          <img src={VaniLogo} alt="vani publiction logo" />
        </div>
        <div className={Classes.englishLogo}>
          <img
            src={EnglishLogo}
            alt="vani publiction in english"
            width="84px"
            height="49px"
          />
        </div>
      </div>
    </Link>
  );
}

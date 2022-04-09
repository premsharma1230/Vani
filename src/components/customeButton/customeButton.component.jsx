import React from "react";
import { Link } from "react-router-dom";
import "./_customeButton.styles.scss";

export default function CustomeButton({ name, accent }) {
  return (
    <button className={accent ? "CustomeButtonAccent" : "CustomeButton"}>
      <Link to="/Booklist">{name}</Link>
    </button>
  );
}

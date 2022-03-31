import React from "react";
import "./_customeButton.styles.scss";

export default function CustomeButton({ name, accent }) {
  return (
    <button className={accent ? "CustomeButtonAccent" : "CustomeButton"}>
      {name}
    </button>
  );
}

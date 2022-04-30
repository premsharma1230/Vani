import React from "react";
import { Link } from "react-router-dom";
import "./_customeButton.styles.scss";

export default function CustomeButton({ getSlug, name, accent }) {
  return (
    <button className={accent ? "CustomeButtonAccent" : "CustomeButton"}>
      {name === "LEARN ABOUT AUTHOR" ?
         <Link
         to={`/AuhorDescription/${getSlug}`}
         key={getSlug}
       >{name}</Link>
        :name === "SEE THIS BOOK" ?
        <Link
        to={`/BookDescription/${getSlug}`}
        key={getSlug}
      >{name}</Link>
      :
      <Link
        to="#"
      >{name}</Link>
      }
    </button>
  );
}

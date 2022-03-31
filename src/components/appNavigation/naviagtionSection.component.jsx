import React from "react";
import Classes from "./_appNavigation.module.scss";
import { Link } from "react-router-dom";
export default function NavigationSection() {
  const linkarr = [
    "Kitab ki dukan",
    "About",
    "Collections",
    "Authors",
    "Events",
  ];
  return (
    <div className={Classes.navigationContainer}>
      <ul>
        {linkarr.map((ele, index) => {
          return (
            <React.Fragment key={index}>
              <li className={Classes.Navlinks}>
                <Link to="/BookDetail">{ele}</Link>
              </li>

              <li className={Classes.bullet}></li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

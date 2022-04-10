import React from "react";
import Classes from "./_appNavigation.module.scss";
import { Link } from "react-router-dom";
export default function NavigationSection() {
  const linkarr = [
    {
      name: "Kitab ki dukan",
      url: "/Booklist",
    },
    {
      name: "Authors",
      url: "/Author",
    },
    {
      name: "About",
      url: "#",
    },

    {
      name: "Collections",
      url: "#",
    },

    {
      name: "Events",
      url: "#",
    },
  ];
  console.log(linkarr, "ele++++++++++++");
  return (
    <div className={Classes.navigationContainer}>
      <ul>
        {linkarr.map((ele, index) => {
          return (
            <React.Fragment key={index}>
              <li className={Classes.Navlinks}>
                <Link to={ele.url}>{ele.name}</Link>
              </li>

              <li className={Classes.bullet}></li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

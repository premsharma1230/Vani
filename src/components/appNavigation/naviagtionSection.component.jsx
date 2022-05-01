import React from "react";
import Classes from "./_appNavigation.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { menuNav } from "../../actions";

export default function NavigationSection() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleMenuList = e => {
    console.log(e, "eee++++++++");
    if (e === "/Booklist") {
      dispatch(menuNav(false));
    }
    navigate(e);
  };

  return (
    <div className={Classes.navigationContainer}>
      <ul>
        {linkarr.map((ele, index) => {
          return (
            <React.Fragment key={index}>
              <li className={Classes.Navlinks}>
                <div onClick={() => handleMenuList(ele.url)}>{ele.name}</div>
              </li>

              <li className={Classes.bullet}></li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

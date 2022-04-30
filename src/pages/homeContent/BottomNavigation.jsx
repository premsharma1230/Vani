import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { menuNav } from "../../actions";

export const BottomNavigation = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [menuBar, setmenuBar] = useState(false);
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  const handleMenu = () => {
    setmenuBar(!menuBar);
    dispatch(menuNav(!menuBar));
    if (search) {
      setSearch(false);
    }
  };

  const handleSearch = () => {
    setSearch(!search);
    if (!search) {
      dispatch(menuNav(false));
    }
    // setSearch(false);
  };
  return (
    <>
      <div className="Bottom_Navitgator_Wrapper">
        <ul>
          <li>
            <Link to={"/"}>
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li onClick={handleMenu}>
            <i className="fas fa-bars"></i>
          </li>
          <li className="Search" onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </li>
          <li className="CartMain_Wrapper">
            <Link to={"/Cart"}>
              <span className="CartCounter">{changeTheNumber}</span>
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
        {search !== false ? (
          <div className="Search-input">
            <input type="text" placeholder="search...." />
          </div>
        ) : null}
      </div>
    </>
  );
};
